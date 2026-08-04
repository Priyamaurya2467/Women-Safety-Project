import React, { useRef, useState } from "react";
import {
  Mic,
  Image,
  Send,
  Loader2,
  Paperclip,
} from "lucide-react";

function ChatInput({ onSend, loading = false }) {
  const [message, setMessage] = useState("");

  const fileInputRef = useRef();

  const sendMessage = () => {
    if (!message.trim()) return;

    onSend?.(message.trim());

    setMessage("");
  };

  const handleKeyDown = (e) => {
    // Press Enter to send
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    "🚖 Verify my cab",
    "📍 Share my live location",
    "🛡 Analyze my route",
    "🚨 Trigger SOS",
    "🚓 Nearby police station",
  ];

  return (
    <div className="sticky bottom-0 border-t border-gray-200 bg-white px-8 py-5">

      {/* Input Box */}
      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">

        <textarea
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask SafeHer AI anything..."
          className=" min-h-[48px] max-h-32 w-full resize-none rounded-t-3xl bg-transparent px-5 pt-5 text-gray-700 placeholder-gray-400 outline-none"
        />

        {/* Bottom Toolbar */}
        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">

          {/* Left */}
          <div className="flex items-center gap-2">

            <button
              onClick={() => fileInputRef.current.click()}
              className="rounded-lg p-2 transition hover:bg-gray-100"
            >
              <Paperclip size={20} />
            </button>

            <input
              ref={fileInputRef}
              type="file"
              hidden
            />

            <button className="rounded-lg p-2 transition hover:bg-gray-100">
              <Image size={20} />
            </button>

            <button className="rounded-lg p-2 transition hover:bg-gray-100">
              <Mic size={20} />
            </button>

          </div>

          {/* Right */}

          <button
            onClick={sendMessage}
            disabled={!message.trim() || loading}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Send size={18} />
                Send
              </>
            )}
          </button>

        </div>
      </div>

      {/* Suggestions */}

      <div className="mt-4 flex flex-wrap gap-2">

        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => onSend?.(item)}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
}

export default ChatInput;