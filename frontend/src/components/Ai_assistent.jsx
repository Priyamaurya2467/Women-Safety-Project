import React from "react";
import Sidebar from "./Elements/Sidebar";
import ChatArea from './ChatArea'

function Ai_assistent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 overflow-hidden">
        <ChatArea />
      </main>
    </div>
  );
}

export default Ai_assistent;