# Yoom 🌐  

Yoom is a cutting-edge meeting application designed to simplify virtual communication and collaboration. Built using **Next.js**, **Clerk**, and the **Stream Video API**, Yoom provides a seamless and interactive meeting experience for users.  

## 🚀 Features  

- **Video Meetings**: High-quality video conferencing powered by the Stream Video API.  
- **User Authentication**: Secure user accounts and sessions managed with Clerk.  
- **Real-Time Chat**: Communicate with meeting participants in real time.  
- **Scheduling**: Set up and manage meeting schedules effortlessly.  
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.  

## 🛠️ Tech Stack  

- **Frontend**: Next.js  
- **Authentication**: Clerk  
- **Video API**: Stream Video API  
- **Styling**: Tailwind CSS (or the chosen styling library)  
- **Hosting**: [Vercel]

## 🚀 Getting Started  

Follow these steps to set up the project on your local machine.  

### Prerequisites  

- Node.js (>= 14.x)  
- npm or yarn  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/yoom.git
   cd yoom
   npm install
# or
yarn install

NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
STREAM_API_KEY=your-stream-api-key
STREAM_API_SECRET=your-stream-api-secret
STREAM_APP_ID=your-stream-app-id

npm run dev
# or
yarn dev
