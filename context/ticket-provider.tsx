"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Toast from "@/components/toast";

export type Ticket = {
  id: string;
  title: string;
  description?: string;
  status: "open" | "in_progress" | "closed";
  priority?: "low" | "medium" | "high";
  createdAt: string;
};

type User = { email: string; token: string } | null;

type ContextType = {
  tickets: Ticket[];
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
  user: User;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string) => boolean;
  logout: () => void;
  showToast: (message: string, type: "success" | "error") => void;
};

const TicketContext = createContext<ContextType | undefined>(undefined);

export default function TicketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>(() => {
    if (typeof window === "undefined") return null;
    const token = localStorage.getItem("ticketapp_session");
    return token ? { email: "user@example.com", token } : null;
  });

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // ✅ Sync tickets to localStorage when they change
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const login = (email: string, password: string) => {
    if (email && password.length >= 6) {
      const token = btoa(`${email}:${Date.now()}`);
      if (typeof window !== "undefined")
        localStorage.setItem("ticketapp_session", token);
      setUser({ email, token });
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string) => login(email, password);

  const logout = () => {
    if (typeof window !== "undefined")
      localStorage.removeItem("ticketapp_session");
    setUser(null);
  };

  return (
    <TicketContext.Provider
      value={{ tickets, setTickets, user, login, signup, logout, showToast }}
    >
      {children}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </TicketContext.Provider>
  );
}

export const useTicket = () => {
  const ctx = useContext(TicketContext);
  if (!ctx) throw new Error("useTicket must be used within TicketProvider");
  return ctx;
};
