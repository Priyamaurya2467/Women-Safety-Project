import React from "react";

import ChatHeader from "./Pages/Ai_Assistent/ChatHeader";
import WelcomeCard from "./Pages/Ai_Assistent/WelcomeCard";
import ChatMessages from "./Pages/Ai_Assistent/ChatMessage";
import CabVerificationCard from "./Pages/Ai_Assistent/CabVerificationCard";
import JourneyCard from "./Pages/Ai_Assistent/";
import RouteAnalysisCard from "./Components/RouteAnalysisCard";
import EmergencyCard from "./Components/EmergencyCard";
import QuickActions from "./Components/QuickActions";
import ChatInput from "./Components/ChatInput";

function ChatArea() {
  return (
    <div className="flex h-screen flex-col bg-gray-50">

      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">

        <WelcomeCard />

        <ChatMessages />

        <CabVerificationCard />

        <JourneyCard />

        <RouteAnalysisCard />

        <EmergencyCard />

      </div>

      <QuickActions />

      <ChatInput />

    </div>
  );
}

export default ChatArea;