import React, { useState } from "react";

import ChatHeader from "./Pages/Ai_Assistent/ChatHeader";
import WelcomeCard from "./Pages/Ai_Assistent/WelcomeCard";
import ChatMessages from "./Pages/Ai_Assistent/ChatMessage";
import QuickActions from "./Pages/Ai_Assistent/QuickActions";
import ChatInput from "./Pages/Ai_Assistent/ChatInput";

import { useJourneyContext } from "../Context/JourneyContext";
import { useLocation } from "../Context/LocationContext";

function ChatArea() {
  const { journey } = useJourneyContext();
  const { startSharing } = useLocation();

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "welcome",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  // -------------------- Send Chat --------------------

  const handleSend = async (text) => {
    if (!text.trim()) return;

    addMessage({
      id: Date.now(),
      type: "text",
      role: "user",
      content: text,
    });

    setLoading(true);

    // Replace with backend AI API
    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        type: "text",
        role: "assistant",
        content:
          "I'm analyzing your request. Please wait while I gather the required information.",
      });

      setLoading(false);
    }, 1000);
  };

  // -------------------- Quick Actions --------------------

  const showCabVerification = () => {
    addMessage({
      id: Date.now(),
      type: "cabVerification",
    });
  };

  const showJourney = () => {
    addMessage({
      id: Date.now(),
      type: "journey",
      journey,
    });
  };

  const showRouteAnalysis = () => {
    addMessage({
      id: Date.now(),
      type: "routeAnalysis",
    });
  };

  const showEmergency = () => {
    addMessage({
      id: Date.now(),
      type: "emergency",
    });
  };

  const shareLocation = async () => {
    try {
      await startSharing();

      addMessage({
        id: Date.now(),
        type: "text",
        role: "assistant",
        content: "📍 Live location sharing has started.",
      });
    } catch (error) {
      addMessage({
        id: Date.now(),
        type: "text",
        role: "assistant",
        content: "Unable to start live location sharing.",
      });
    }
  };

  const showSafetyTips = () => {
    addMessage({
      id: Date.now(),
      type: "text",
      role: "assistant",
      content:
        "✔ Verify the cab number before entering.\n✔ Share your live location with trusted contacts.\n✔ Avoid isolated routes.\n✔ Keep SOS ready throughout your journey.",
    });
  };

  return (
    <div className="flex h-full flex-col bg-gray-50">
      {/* Header */}
      {/* <ChatHeader /> */}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <WelcomeCard />

        <ChatMessages
          messages={messages}
          loading={loading}
        />
      </div>

      {/* Quick Actions */}
      <QuickActions
        onVerifyCab={showCabVerification}
        onJourney={showJourney}
        onRoute={showRouteAnalysis}
        onEmergency={showEmergency}
        onShareLocation={shareLocation}
        onSafetyTips={showSafetyTips}
      />

      {/* Chat Input */}
      <ChatInput
        onSend={handleSend}
        loading={loading}
      />
    </div>
  );
}

export default ChatArea;