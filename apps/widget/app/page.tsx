"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConneted,
    isConnecting,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <Button onClick={() => startCall()}>Start call</Button>
      <Button onClick={() => endCall()}>End call</Button>
      <p>Is Connected: {isConneted}</p>
      <p>Is Connecting: {isConnecting}</p>
      <p>Is Speaking: {isSpeaking}</p>
      <p>{JSON.stringify(transcript)}</p>
    </div>
  );
}
