"use client";
import AuthForm from "@/components/auth-form";
import { useTicket } from "@/context/ticket-provider";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const { signup } = useTicket();
  const router = useRouter();

  const handleSignup = (email: string, password: string) => {
    if (signup(email, password)) router.push("/dashboard");
  };

  return <AuthForm onSubmit={handleSignup} isLogin={false} />;
}
