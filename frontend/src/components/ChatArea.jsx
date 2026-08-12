import React, { useState } from "react";
import axios from "axios";
import ChatHeader from "./Pages/Ai_Assistent/ChatHeader";
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
      role: "assistant",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  // AI Reply
  const handleSend = async(text)=> {
    if(!text.trim()) return;

    addMessage({
      id: Date.now(),
      role: "user",
      type: "text",
      content: text,
    });
    setLoading(true);

    try{
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          message: text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("AI Backend Response:", response.data);

      addMessage({
        id: Date.now()+1,
        role: "assistent",
        type: "text",
        content: response.data.reply,
      })
    }catch(err){
      console.log("Ai chat error",err);
      console.log("Backend Response",err.response?.data);

      addMessage({
        id: Date.now()+1,
        role: "assistent",
        type: "text",
        content:
          err.response?.data?.message || "Unable to connect to the AI server",
      });
    } finally{
      setLoading(false)
    }
  }

  // Verify Cab
  const showCabVerification = () => {
    addMessage({
      id: Date.now(),
      role: "user",
      type: "text",
      content: "Verify my cab",
    });

    aiReply("Cab verification completed.");

    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        type: "cabVerification",
      });
    }, 1200);
  };

  //----------------------------------------
  // Journey
  //----------------------------------------

  const showJourney = () => {
    addMessage({
      id: Date.now(),
      role: "user",
      type: "text",
      content: "Show my current journey",
    });

    aiReply("Here is your current journey.");

    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        type: "journey",
        journey,
      });
    }, 1200);
  };

  //----------------------------------------
  // Route Analysis
  //----------------------------------------

  const showRouteAnalysis = () => {
    addMessage({
      id: Date.now(),
      role: "user",
      type: "text",
      content: "Analyze my route",
    });

    aiReply("Analyzing your route.");

    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        type: "routeAnalysis",
      });
    }, 1200);
  };

  //----------------------------------------
  // Emergency
  //----------------------------------------

  const showEmergency = () => {
    addMessage({
      id: Date.now(),
      role: "user",
      type: "text",
      content: "Emergency help",
    });

    aiReply("Emergency options are ready.");

    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        type: "emergency",
      });
    }, 1200);
  };

  //----------------------------------------
  // Share Live Location
  //----------------------------------------

  const shareLocation = async () => {
    addMessage({
      id: Date.now(),
      role: "user",
      type: "text",
      content: "Share my live location",
    });

    try {
      await startSharing();

      aiReply("📍 Live location sharing has started successfully.");
    } catch (error) {
      aiReply("Unable to start live location sharing.");
    }
  };

  //----------------------------------------
  // Safety Tips
  //----------------------------------------

  const showSafetyTips = () => {
    addMessage({
      id: Date.now(),
      role: "user",
      type: "text",
      content: "Give me safety tips",
    });

    aiReply(`✔ Verify cab number before entering.

✔ Share your live location.

✔ Avoid isolated roads.

✔ Sit behind the driver.

✔ Keep SOS ready.

✔ Inform trusted contacts.`);
  };

  return (
    <div className="flex h-full flex-col bg-gray-50">
      {/* Header */}
      <ChatHeader />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
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