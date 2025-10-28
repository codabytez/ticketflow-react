"use client";
import AuthForm from "@/components/auth-form";
import { useTicket } from "@/context/ticket-provider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useTicket();
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    if (login(email, password)) router.push("/dashboard");
  };

  return <AuthForm onSubmit={handleLogin} isLogin={true} />;
}
