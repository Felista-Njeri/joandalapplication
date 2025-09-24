# JO&AL Knowledge Experts Mobile Application

## Overview

JO&AL Knowledge Experts is a world-class knowledge-based consultancy firm's mobile application built with React Native and Expo. The application serves as a digital platform for accessing the company's various consultancy services, focusing on Research Services, Business Consultancy, and Management Consultancy.

## Features

### 🔐 Authentication

- User registration and login functionality
- Firebase authentication integration
- Secure user profile management

### 📱 Core Features

- **Service Catalog**: Browse and purchase consultancy services
- **E-Learning Platform**: Access to training materials and courses
- **Chat System**: Real-time communication with consultants
- **Shopping Cart**: Easy service booking and purchase management
- **User Profiles**: Personalized user experience and history tracking

### 💼 Services Offered

1. **Research Services**

   - Opinion Polls
   - Academic Writing Training
   - Research Consultancy

2. **Business Consultancy**

   - Strategic Planning
   - Market Analysis
   - Business Development

3. **Management Consultancy**
   - Organizational Development
   - Process Improvement
   - Leadership Training

## Technical Stack

### Frontend

- React Native (v0.72.10)
- Expo SDK (v49.0.13)
- React Navigation (v6.x)
- TypeScript

### Backend & Services

- Firebase
  - Authentication
  - Realtime Database
- Expo Build Properties
- React Native Gifted Chat

### UI/UX

- Custom styled components
- Space Grotesk font family
- Responsive design
- Native gestures support

## Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone [repository-url]
   cd joandalapplication
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:

   - Configure Firebase credentials
   - Set up Google Services files for Android and iOS

4. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

### Running the App

- **Android:**
  \`\`\`bash
  npm run android
  \`\`\`

- **iOS:**
  \`\`\`bash
  npm run ios
  \`\`\`

- **Web:**
  \`\`\`bash
  npm run web
  \`\`\`

## Project Structure

\`\`\`
joandalapplication/
├── app/
│ ├── images/ # Application images and icons
│ ├── screens/ # Screen components
│ └── styles/ # Screen-specific styles
├── assets/ # Static assets
├── android/ # Android-specific configurations
├── ios/ # iOS-specific configurations
└── firebase/ # Firebase configuration
\`\`\`

## Key Features Implementation

### Navigation

- Bottom tab navigation for main sections
- Stack navigation for screen flows
- Custom navigation bar component

### State Management

- React hooks for local state
- Firebase Realtime Database for global state
- Context API for theme and authentication state

### Styling

- Custom styling system
- Responsive design patterns
- Consistent theme across the application

## Firebase Integration

The application uses Firebase for:

- User Authentication
- Real-time Chat
- Data Storage
- Analytics

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is proprietary software owned by JO&AL Knowledge Experts.

## About JO&AL Knowledge Experts

JO&AL Knowledge Experts is a knowledge-based company focused on empowering people and businesses to create wealth. The company combines different methods of making money to create effective resources for beginners and experts, conforming to global changes brought about by information technology.

### Mission

To empower people and businesses to use their knowledge to escape the cubicle and create wealth.

### Vision

A world-class knowledge-based firm empowering people and businesses to create wealth.

### Core Values

- Integrity
- Creativity
- Excellence
- Commitment
- Teamwork
- Entrepreneurship
- Flexibility

For more information, visit our website or contact us through the application.
