// app/page.tsx
"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <div className="max-w-[1440px] mx-auto">
        <header className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">TicketFlow</h1>
          <div className="flex gap-2">
            <button
              onClick={() => router.push("/signup")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign up
            </button>
          </div>
        </header>

        <section className="relative px-6 py-20 overflow-hidden">
          <div className="absolute top-10 right-20 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-200 rounded-full opacity-30"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Manage Your Tickets
              <span className="text-indigo-600"> Effortlessly</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Streamline your workflow with our powerful ticket management
              system
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button
                onClick={() => router.push("/signup")}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-lg font-semibold"
              >
                Get Started
              </button>
              <button
                onClick={() => router.push("/login")}
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition text-lg font-semibold"
              >
                Login
              </button>
            </motion.div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4F46E5"
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        <section className="px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Create Tickets",
                desc: "Easily create and track support tickets",
              },
              {
                title: "Manage Status",
                desc: "Update ticket status in real-time",
              },
              {
                title: "Stay Organized",
                desc: "Keep all your tickets in one place",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="px-6 py-8 border-t border-gray-200 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} TicketFlow. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
