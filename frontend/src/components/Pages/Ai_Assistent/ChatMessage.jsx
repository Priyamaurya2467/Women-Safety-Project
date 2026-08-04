import React, { useEffect, useRef } from "react";
import {
  Bot,
  User,
  Loader2,
} from "lucide-react";

function ChatMessages({ messages = [], loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="space-y-6">

      {messages.length === 0 && (
        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white">
            <Bot size={22} />
          </div>

          <div className="max-w-4xl rounded-3xl rounded-tl-md border border-gray-200 bg-white p-6 shadow-sm">

            <h2 className="text-lg font-semibold">
              Welcome to SafeHer AI 👋
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Ask me anything related to your journey.
              I can verify your cab, analyze routes,
              detect unsafe areas, monitor live location,
              guide you during emergencies and much more.
            </p>

          </div>

        </div>
      )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.role === "user"
              ? "justify-end"
              : "items-start gap-4"
          }`}
        >
          {msg.role === "assistant" && (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white">
              <Bot size={22} />
            </div>
          )}

          {msg.role === "user" ? (
            <div className="max-w-2xl rounded-3xl rounded-tr-md bg-indigo-600 px-6 py-4 text-white shadow">
              {msg.content}
            </div>
          ) : (
            <div className="max-w-5xl rounded-3xl rounded-tl-md border border-gray-200 bg-white p-6 shadow-sm">
              <p className="leading-7 text-gray-700">
                {msg.content}
              </p>
            </div>
          )}

          {msg.role === "user" && (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
              <User size={20} />
            </div>
          )}
        </div>
      ))}

      {loading && (
        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white">
            <Bot size={22} />
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-sm">

            <div className="flex items-center gap-3">

              <Loader2
                size={18}
                className="animate-spin text-indigo-600"
              />

              <span className="text-gray-600">
                SafeHer AI is thinking...
              </span>

            </div>

          </div>

        </div>
      )}

      <div ref={bottomRef} />

    </div>
  );
}

export default ChatMessages;