import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";
import { Avatar, AvatarImage } from "./avatar.js";
import { cn } from "../lib/utils.js";

interface Props {
  seed: string;
  size?: number;
  className?: string;
  badgeClassName?: string;
  imageUrl?: string;
  badgeImageUrl?: string;
}

export default function DicebearAvatar({
  badgeImageUrl,
  seed,
  badgeClassName,
  className,
  imageUrl,
  size = 32,
}: Props) {
  const avatarSrc = useMemo(() => {
    if (imageUrl) {
      return imageUrl;
    }

    const avatar = createAvatar(glass, {
      seed: seed.toLocaleLowerCase().trim(),
      size,
    });

    return avatar.toDataUri();
  }, [seed, size]);

  const badgeSize = Math.round(size * 0.5);

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      <Avatar
        className={cn("border", className)}
        style={{ width: size, height: size }}
      >
        <AvatarImage alt="Image" src={avatarSrc} />
      </Avatar>
      {badgeImageUrl && (
        <div
          className={cn(
            "absolute right-0 bottom-0 flex items-center justify-center overflow-hidden rounded-full border-2 border-background bg-background",
            className
          )}
          style={{
            width: badgeSize,
            height: badgeSize,
            transform: "translate(15%, 15%)",
          }}
        >
          <img
            alt="badge"
            className="h-full w-full object-cover"
            height={badgeSize}
            width={badgeSize}
            src={badgeImageUrl}
          />
        </div>
      )}
    </div>
  );
}
