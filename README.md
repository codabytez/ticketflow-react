# TicketFlow React - Ticket Management System

A modern, responsive ticket management web application built with React, Framer Motion, and Tailwind CSS.

## 🚀 Features

### Core Functionality

- **Landing Page**: Beautiful hero section with wavy SVG background and decorative elements
- **Authentication**: Secure login and signup with validation and session management
- **Dashboard**: Overview with ticket statistics and quick actions
- **Ticket Management**: Full CRUD operations (Create, Read, Update, Delete)

### Technical Features

- ✅ React 18 with Hooks (useState, useEffect)
- ✅ Framer Motion for smooth animations
- ✅ Tailwind CSS for styling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Form validation with inline error messages
- ✅ Toast notifications for user feedback
- ✅ LocalStorage for data persistence
- ✅ Protected routes with authentication
- ✅ Component-based architecture

## 📋 Requirements Met

- **Max-width**: 1440px centered layout on all pages
- **Wave Background**: SVG wave in hero section
- **Decorative Circles**: Multiple circular blur elements
- **Status Colors**:
  - Open → Green (`bg-green-500`)
  - In Progress → Amber (`bg-amber-500`)
  - Closed → Gray (`bg-gray-500`)
- **Authentication**: Session stored as `ticketapp_session` in localStorage
- **Validation**: Title and status fields are mandatory
- **Error Handling**: Consistent error messages and toast notifications

## 🛠️ Tech Stack

- **Framework**: React 18
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS (via CDN or build)
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser localStorage

## 📦 Installation

### Prerequisites

- Node.js 16+ ([Download](https://nodejs.org/))
- pnpm or yarn

### Setup Instructions

1. **Navigate to the React project directory**

```bash
cd ticketflow-react
```

1. **Install dependencies**

```bash
pnpm install
```

1. **Start the development server**

```bash
pnpm dev
```

1. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Design System

### Colors

- **Primary**: Indigo (`#4F46E5`)
- **Success**: Green (`#10B981`)
- **Warning**: Amber (`#F59E0B`)
- **Danger**: Red (`#EF4444`)
- **Gray**: Various shades for text and backgrounds

### Typography

- **Headings**: Bold, large sizes for hierarchy
- **Body**: Regular weight, readable sizes
- **Labels**: Medium weight, smaller sizes

### Spacing

- Consistent padding and margins using Tailwind's spacing scale
- Card-based layout with rounded corners and shadows

## 🔐 Authentication

### Session Management

- Sessions are stored in `localStorage` with the key `ticketapp_session`
- Token format: Base64 encoded `email:timestamp`
- Protected routes check for valid session before rendering
- Unauthorized access redirects to login page

### Test Credentials

You can use any email and password combination:

- **Email**: Any valid email format (e.g., `test@example.com`)
- **Password**: Minimum 6 characters

## 📝 Ticket Structure

Tickets are stored in localStorage under the key `tickets`:

```javascript
{
  id: string,              // Unique identifier (timestamp)
  title: string,           // Required
  description: string,     // Optional
  status: 'open' | 'in_progress' | 'closed',  // Required
  priority: 'low' | 'medium' | 'high',        // Optional
  createdAt: string       // ISO timestamp
}
```

## ✨ Key Components

### App Component Structure

The application is structured as a single-page application with the following views:

1. **LandingPage**

   - Hero section with gradient background
   - Decorative circular elements
   - Wavy SVG divider
   - Feature cards
   - Footer

2. **AuthPage** (Login/Signup)

   - Email and password validation
   - Inline error messages
   - Toast notifications
   - Switch between login/signup

3. **Dashboard**

   - Ticket statistics cards
   - Color-coded status indicators
   - Quick action buttons
   - Logout functionality

4. **Ticket Management**
   - Create new tickets
   - Edit existing tickets
   - Delete with confirmation
   - List view with cards
   - Status badges
   - Form validation

### React Hooks Used

- **useState**: Managing component state

  - Current page/view
  - User authentication state
  - Tickets array
  - Form data
  - Toast notifications
  - Errors

- **useEffect**: Side effects
  - Load user session on mount
  - Load tickets from localStorage
  - Save tickets to localStorage when changed
  - Auto-dismiss toast notifications

### Custom Hook: useAuth

A custom authentication hook that manages:

- User state
- Login function
- Signup function
- Logout function
- Session persistence

## 🎯 Validation Rules

### Authentication

- **Email**: Must be valid email format
- **Password**: Minimum 6 characters

### Tickets

- **Title**: Required, cannot be empty
- **Status**: Must be one of: `open`, `in_progress`, `closed`
- **Description**: Optional, no validation
- **Priority**: Optional, defaults to `medium`

## 🚨 Error Handling

The application handles errors in multiple ways:

1. **Inline Validation**: Displayed beneath form fields
2. **Toast Notifications**: Shown for actions and errors (3s auto-dismiss)
3. **Route Protection**: Redirects to login for unauthorized access
4. **Confirmation Dialogs**: For destructive actions (delete)

## 🎬 Animations with Framer Motion

The app uses Framer Motion for smooth animations:

- **Page Transitions**: Fade in effects on page load
- **Toast Notifications**: Slide down animation
- **Form Toggles**: Smooth height transitions
- **Ticket Cards**: Scale and opacity transitions
- **Button Interactions**: Hover and tap animations

### Animation Examples

```javascript
// Toast animation
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
/>

// Ticket card animation
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
/>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

All layouts adapt gracefully to different screen sizes using Tailwind's responsive utilities.

## 🔧 Available Scripts

### Development

```bash
pnpm dev
# Starts development server on http://localhost:3000
```

### Build

```bash
pnpm build
# Creates optimized production build
```

### Preview

```bash
pnpm preview
# Preview production build locally
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Use a different port
PORT=3003 pnpm dev
```

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
pnpm install
```

### Tickets Not Persisting

- Check browser localStorage is enabled
- Open DevTools → Application → Local Storage
- Verify `tickets` and `ticketapp_session` keys exist

### Animations Not Working

- Ensure Framer Motion is installed: `pnpm install framer-motion`
- Check console for errors

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel
```

### Static Hosting

```bash
# Build for production
pnpm run build

# Upload the build/ (dist) folder to a static hosting service
# - GitHub Pages
# - AWS S3
# - Firebase Hosting
# - Surge.sh
```

## 🎓 Code Structure Explanation

### State Management Pattern

The app uses React's built-in state management:

```javascript
// Global state
const [user, setUser] = useState(null);
const [tickets, setTickets] = useState([]);

// Form state
const [formData, setFormData] = useState({...});
const [errors, setErrors] = useState({});
```

### Data Persistence Pattern

```javascript
// Load on mount
useEffect(() => {
  const savedTickets = localStorage.getItem("tickets");
  if (savedTickets) {
    setTickets(JSON.parse(savedTickets));
  }
}, []);

// Save on change
useEffect(() => {
  if (tickets.length > 0) {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }
}, [tickets]);
```

## 💡 Best Practices Implemented

- ✅ **Component Organization**: Logical separation of concerns
- ✅ **State Management**: Efficient use of hooks
- ✅ **Error Handling**: Comprehensive validation and feedback
- ✅ **Accessibility**: Semantic HTML, proper ARIA labels
- ✅ **Performance**: Optimized re-renders, memoization where needed
- ✅ **Code Quality**: Clean, readable, maintainable code
- ✅ **User Experience**: Loading states, feedback, animations

## Author

### Lisan al Gaib

- GitHub: [@codabytez](https://github.com/codabytez)
- Twitter: [@codabytez](https://x.com/codabytez)
- LinkedIn: [codabytez](https://www.linkedin.com/in/codabytez/)

## Acknowledgments

- Built for HNG Internship Frontend Track Stage 2
- Design inspiration from behance

---

**Live Demo**: <https://ticketflow-react-alpha.vercel.app>

**Repository**: <https://github.com/codabytez/ticketflow-react>
