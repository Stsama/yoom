"use client"
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";
import { useParams } from "next/navigation";



const Meeting = () => {
  
  const { id } = useParams() as { id: string };

  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetuptComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);
  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          { !isSetupComplete ? (
            <MeetingSetup  setIsSetupComplete={setIsSetuptComplete} />
          ) : (
            <MeetingRoom />

          )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
};

export default Meeting;
