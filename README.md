# 🎟️ TicketFlow — Modern Ticket Management App

TicketFlow is a lightweight, local-first ticket management application built with **React**, **Next.js (App Router)**, and **Tailwind CSS**.
It features a clean interface, animated transitions, offline persistence, and an intuitive workflow for creating, editing, and tracking support tickets — all in the browser.

---

## 🚀 Features

- **Landing Page** — Hero section with CTA, features overview, and gradient visuals.
- **Authentication (Mocked)** — Local storage–based signup/login (no backend required).
- **Dashboard** — Summaries of ticket stats: total, open, in-progress, closed.
- **Ticket Management** — Create, edit, delete, and filter tickets in real time.
- **Persistent Storage** — Tickets and sessions are stored in `localStorage`.
- **Animated UI** — Smooth transitions powered by **Framer Motion**.
- **Toast Notifications** — Non-blocking feedback for all user actions.
- **Responsive Design** — Fully responsive with Tailwind CSS utilities.
- **Zero Config** — Runs directly as a Next.js client component — no backend setup needed.

---

## 🧠 Tech Stack

| Layer        | Technology                            | Purpose                            |
| ------------ | ------------------------------------- | ---------------------------------- |
| UI           | React 18 + Next.js (App Router)       | Component architecture and routing |
| Styling      | Tailwind CSS                          | Utility-first styling              |
| Animation    | Framer Motion                         | Page and component transitions     |
| State        | React Hooks (`useState`, `useEffect`) | Component-level logic              |
| Persistence  | `localStorage`                        | Offline and session data           |
| Build/Deploy | Next.js / Vercel or any Node host     | Simple static or hybrid hosting    |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/codabytez/ticketflow-react.git
cd ticketflow-react
```

### 2️⃣ Install dependencies

Using **pnpm** (recommended):

```bash
pnpm install
```

Or with npm/yarn:

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the development server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧭 Navigation Flow

| Page                  | Description                              |
| --------------------- | ---------------------------------------- |
| **Landing Page**      | Entry screen with app intro and CTAs     |
| **Login / Signup**    | Mock authentication (localStorage token) |
| **Dashboard**         | Displays ticket stats and quick actions  |
| **Ticket Management** | CRUD operations for tickets              |

Navigation is handled via in-component state (`currentPage`) instead of router routes.

---

## 💾 Data Persistence

- **User Session** — Stored in `localStorage` as `ticketapp_session`.
- **Tickets** — Stored in `localStorage` as `tickets` (array of objects).
- Data automatically syncs when you add/edit/delete tickets.

---

## 🧩 Component Overview

| Component          | Description                                       |
| ------------------ | ------------------------------------------------- |
| `TicketApp`        | Root component that controls navigation and state |
| `LandingPage`      | Marketing hero + feature grid                     |
| `AuthPage`         | Login and signup screens                          |
| `Dashboard`        | Ticket summaries and stats                        |
| `TicketManagement` | Full CRUD interface                               |
| `Toast`            | Temporary notification popup                      |

---

## ✨ UI Design Notes

- **Color scheme**: Indigo/Blue gradients for modern appeal
- **Rounded cards** and **soft shadows** for clean aesthetic
- **Motion-based transitions** using `AnimatePresence`
- **Responsive grid layouts** for tickets and stats cards

---

### 🧩 Demo Accounts

For testing, you can log in with any email/password combination (minimum 6 chars).

Example:

```JavaScript
Email: test@example.com
Password: 123456
```

---
