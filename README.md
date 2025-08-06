# Better Ed: Voice AI Assessment

An interactive AI-powered physics tutoring application built with Next.js that provides real-time audio/video conversations with Teacher Be, an AI tutor specialized in physics education.

Note: This codebase is originally from better-ed using Gemini that has been retrofitted for Gemma. 
Some remnants of Gemini may exist, but is not used.

## 🎯 Features

- **Real-time AI Conversations**: Interactive audio/video conversations with Teacher Be using Gemma 3n AI model
- **Multimodal Interaction**: 
  - Real-time audio processing with speech detection
  - Video capture and display
  - Image capture during conversations
  - Audio worklet processing for low-latency performance
- **WebSocket Integration**: Real-time communication with Gemma AI for instant responses
- **Firebase Integration**: Automatic conversation logging and storage
- **Responsive Design**: Modern UI with Tailwind CSS and Radix UI components

## 🏗️ Architecture

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible component primitives

### AI & Communication
- **Gemma 3n AI Model**: Google's multimodal AI for real-time conversations
- **WebSocket**: Real-time bidirectional communication
- **Audio Processing**: Custom audio worklets for low-latency processing
- **Speech Recognition**: Real-time transcription and response generation

### Backend & Storage
- **Firebase Firestore**: Conversation logging and data persistence
- **Firebase App**: Backend infrastructure

### Audio/Video Processing
- **Web Audio API**: Real-time audio processing and playback
- **MediaDevices API**: Camera and microphone access
- **Canvas API**: Image capture and processing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Modern browser with WebRTC support
- Microphone and camera access
- Environment variables configured (see Configuration section)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd be-mini
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables**
Create a `.env.local` file in the root directory:

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to start using the app.

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.1.7**: React framework with App Router
- **React 19**: UI library
- **TypeScript 5**: Type safety

### UI & Styling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### AI & Communication
- **Google Generative AI**: Gemma 3n model integration
- **WebSocket**: Real-time communication
- **Web Audio API**: Audio processing and playback

### Backend & Storage
- **Firebase 11.4.0**: Backend services
- **Firestore**: NoSQL database

### Audio Processing
- **LameJS**: Audio encoding/decoding
- **JS-Base64**: Base64 encoding utilities

## 🔧 Configuration

### Environment Variables

The app requires several environment variables to function properly:

### Browser Requirements

- Modern browser with WebRTC support
- Microphone and camera permissions
- HTTPS connection (required for media access in production)

## 📁 Project Structure

```
be-mini/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── CameraPreview/  # Camera and audio processing
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   ├── services/          # AI and WebSocket services
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── components/            # Shared UI components
├── lib/                   # Library utilities
├── public/                # Static assets
│   ├── avatars/          # AI and user avatars
│   └── worklets/         # Audio processing worklets
└── ...
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Setup for Production
Ensure all environment variables are properly configured in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Better Ed: Education Reimagined** - Making learning interactive and engaging through AI-powered conversations.


