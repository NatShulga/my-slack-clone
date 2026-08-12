"use client";
import { useState } from "react";

interface Message {
    id: number,
    user: string,
    text: string,
    time: string,
    isMine: boolean;
}

const channels = ["# general", "# random", "# design", "# dev"];

export default function ChatPage() {
  const [activeChannel, setActiveChannel] = useState("# general");
    const [messages, setMessages] = useState<Record<string, Message[]>>({
    '# general': [
      { id: 1, user: "Alex", text: "Hello world!", time: "10:15", isMine: false },
      { id: 2, user: "Jenny", text: "Hello, Alex!", time: "10:15", isMine: false },
    ],
    '# random': [],
    '# design': [],
    '# dev': [],
  });

  const [newMessage, setNewMessage] = useState("");

  //функц отправки сообщения
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg = {
      id: Date.now(),
      user: "Я",
      text: newMessage,
      time: new Date().toLocaleTimeString().slice(0, 5),
      isMine: true,
    };

    setMessages({  ...messages,
  [activeChannel]: [...messages[activeChannel], msg]
    });

    setNewMessage("");
    
  };

  return (
    <div className="flex h-screen bg-[#1a1b1e] text-white font-sans">
      {/* Сайдбар */}
      <div className="w-64 bg-[#25262a] border-r border-[#333538] flex flex-col">
        <div className="p-4 border-b border-[#333538]">
          <h2 className="font-bold">Каналы</h2>
        </div>
        <div className="flex-1 p-2">
          {channels.map((channel) => (
            <button
              key={channel}
              onClick={() => setActiveChannel(channel)}
              className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm ${
                activeChannel === channel
                  ? "bg-[#3a3c42] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {channel}
            </button>
          ))}
        </div>
      </div>

      {/* Окно чата */}
      <div className="flex-1 flex flex-col">
        <div className="h-14 border-b border-[#333538] flex items-center px-6 bg-[#1f2024]">
          <h2 className="text-lg font-medium">{activeChannel}</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages[activeChannel].map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[70%] ${
                msg.isMine ? "ml-auto items-end" : "mr-auto items-start"
              }`}
            >
              <div
                className={`rounded-2xl px-4 py-2 text-sm ${
                  msg.isMine
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-[#34363a] text-gray-200 rounded-bl-sm"
                }`}
              >
                {!msg.isMine && (
                  <div className="text-xs font-semibold text-blue-400 mb-1">
                    {msg.user}
                  </div>
                )}
                {msg.text}
              </div>
              <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
            </div>
          ))}
        </div>

        <form
          onSubmit={sendMessage}
          className="p-4 border-t border-[#333538] bg-[#1f2024]"
        >
          <input
            type="text"
            className="w-full bg-[#2f3136] text-white px-4 py-2 rounded-full outline-none"
            placeholder="Напишите сообщение..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
  }
