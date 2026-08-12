'use client';

interface SidebarProps {
    channels: string[],
    activeChannel: string,
    onChannelChange: (channel: string) => void;
}

export default function Sidebar({channels, activeChannel, onChannelChange}: SidebarProps) {
    return(
        <div className="w-64 bg-[#25262a] border-r border-[#333538] flex flex-col h-full">
      <div className="p-4 border-b border-[#333538]">
        <h2 className="font-bold text-white">Каналы</h2>
      </div>
      <div className="flex-1 p-2 overflow-y-auto">
        {channels.map((channel) => (
          <button
            key={channel}
            onClick={() => onChannelChange(channel)}
            className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
              activeChannel === channel
                ? 'bg-[#3a3c42] text-white'
                : 'text-gray-400 hover:text-white hover:bg-[#2f3136]'
            }`}
          >
            {channel}
          </button>
        ))}
      </div>
    </div>
    );
}