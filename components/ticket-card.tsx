// components/TicketCard.tsx
"use client";
import { motion } from "framer-motion";
import { Ticket as T } from "@/context/ticket-provider";

export default function TicketCard({
  ticket,
  onEdit,
  onDelete,
  statusColors,
}: {
  ticket: T;
  onEdit: () => void;
  onDelete: () => void;
  statusColors: Record<string, string>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-900 flex-1 mr-2">
          {ticket.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            statusColors[ticket.status]
          } whitespace-nowrap`}
        >
          {ticket.status.replace("_", " ")}
        </span>
      </div>
      {ticket.description && (
        <p className="text-gray-600 mb-4 text-sm">{ticket.description}</p>
      )}
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}
