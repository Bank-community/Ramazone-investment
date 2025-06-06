// WhatsApp UI Clone using React + Tailwind CSS // This is a static frontend based on your screenshot

import React from 'react'; import { FaSearch, FaCamera, FaEllipsisV, FaPlusSquare } from 'react-icons/fa';

const chats = [ { name: 'Bank Prime Member', message: 'Mithilesh: Hn', time: '6/2/25', pinned: true, unread: 0, icon: '🟢' }, { name: 'Ramazone (You)', message: 'https://script.google.com/mac...', time: '7:07 AM', pinned: true, unread: 0, icon: '🛒' }, { name: 'Bank Community Loan', message: 'You: 🖼️ Prince rama  SIP paym...', time: '7:30 PM', pinned: true, unread: 0, icon: '🏦' }, { name: 'Arya Barauni Begusarai sec...', message: 'rajan raj979895: R J W/h Bag...', time: '10:39 PM', unread: 17, muted: true, icon: '👮' }, { name: 'Team Arya_DTR Update Be...', message: 'Gaurav ps: 🖼️ DTR REPORT...', time: '10:22 PM', unread: 44, muted: true, icon: '🌿' }, { name: 'DeoDap', message: 'Hey there, We noticed that you've...', time: '9:38 PM', unread: 0, icon: '🛍️' }, { name: 'Business assistant', message: '🖼️ Photo', icon: '💼', unread: 0 }, { name: 'ITC DTR Arun g', message: 'Mkm: 🖼️ Photo', unread: 2, muted: true, icon: '🌾' }, ];

export default function WhatsAppClone() { return ( <div className="max-w-md mx-auto h-screen bg-white flex flex-col border shadow"> {/* Header */} <div className="flex justify-between items-center p-4 bg-green-600 text-white"> <h1 className="text-lg font-bold">WhatsApp</h1> <div className="flex gap-4"> <FaCamera /> <FaSearch /> <FaEllipsisV /> </div> </div>

{/* Chat List */}
  <div className="flex-1 overflow-y-auto">
    {chats.map((chat, index) => (
      <div
        key={index}
        className="flex justify-between items-center p-4 border-b hover:bg-gray-100"
      >
        <div className="flex items-center gap-3">
          <div className="text-2xl">{chat.icon}</div>
          <div>
            <div className="font-semibold text-sm">{chat.name}</div>
            <div className="text-gray-600 text-xs truncate w-48">{chat.message}</div>
          </div>
        </div>
        <div className="text-right text-xs">
          <div>{chat.time}</div>
          {chat.unread > 0 && (
            <div className="mt-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
              {chat.unread}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* Bottom Navigation */}
  <div className="flex justify-around items-center p-2 border-t text-sm bg-white">
    <div className="text-green-600 font-semibold">Chats</div>
    <div>Calls</div>
    <div>Updates</div>
    <div>Tools</div>
    <FaPlusSquare className="text-xl" />
  </div>
</div>

); }

