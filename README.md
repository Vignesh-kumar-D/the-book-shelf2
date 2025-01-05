# 📚 BookShelf: Personal Book Tracking App

## 📑 Table of Contents
- [Live Demo](#-live-demo)
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#️-architecture)
- [Key Features](#-key-features)
 - [User Authentication](#user-authentication)
 - [Book Management](#book-management)
 - [Data Persistence](#data-persistence)
- [Screenshots](#-screenshots)
- [Installation](#️-installation)
- [Technical Implementation](#-technical-implementation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🔗 Live Demo
[Visit BookShelf](https://the-book-shelf2.vercel.app/)

## 🎯 Overview
BookShelf is a modern web application that helps users maintain their personal book wishlist and track reading progress. Built with React and Firebase, it offers a seamless experience for book discovery and tracking.

## ✨ Features
- Book search via Google Books API
- Personal reading wishlist
- Reading progress tracking
- Secure user authentication
- Responsive mobile design
- Real-time data synchronization

## 🛠️ Tech Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) - Frontend Framework
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) - State Management
- ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) - Backend & Authentication
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) - UI Framework
- ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) - Deployment

## 🏗️ Architecture
```mermaid
flowchart TB
    subgraph Frontend["React Frontend"]
        UI["React Components"]
        Redux["Redux Store"]
        LocalStorage["Local Storage"]
        
        subgraph Components["Key Components"]
            Search["Book Search"]
            List["Wishlist"]
            Auth["Auth Forms"]
        end
        
        UI --> Redux
        Redux --> LocalStorage
        Components --> UI
    end

    subgraph APIs["External Services"]
        Firebase["Firebase"]
        GoogleBooks["Google Books API"]
        
        subgraph FirebaseServices["Firebase Services"]
            Auth_["Authentication"]
            DB["Realtime Database"]
        end
    end

    UI -->|"Search Books"| GoogleBooks
    UI -->|"User Auth"| Auth_
    Redux -->|"Store/Fetch Books"| DB
    LocalStorage -->|"Cache Auth Token"| Auth_

    classDef frontend fill:#61DAFB,stroke:#20232a,stroke-width:2px,color:black
    classDef apis fill:#FFA611,stroke:#1A1A1A,stroke-width:2px,color:white
    classDef components fill:#61DAFB,stroke:#20232a,stroke-width:2px,opacity:0.7
    classDef firebase fill:#FFA611,stroke:#1A1A1A,stroke-width:2px,opacity:0.7

    class Frontend frontend
    class APIs apis
    class Components components
    class FirebaseServices firebase
```
## 💡 Key Features

### User Authentication
- Secure sign-up and login
- JWT token management
- Protected routes
- Persistent sessions

### Book Management
- Search books via Google Books API
- Add books to personal wishlist
- Track reading status
- Real-time updates

### Data Persistence
- Firebase Realtime Database
- Local storage for session management
- Cached responses for better performance

## 📱 Screenshots

### Search Interface
![Search Page](https://github.com/legendvi/the-book-shelf2/assets/41253273/bcf3d34e-ba5e-494a-bb91-6448e0dac285)

### Book List View
![List Page](https://github.com/legendvi/the-book-shelf2/assets/41253273/4cabed18-bd59-4050-9cc6-f9bbeac7f860)

### Authentication
![Authentication Page](https://github.com/legendvi/the-book-shelf2/assets/41253273/01cf4464-9f4f-41cf-9034-10b376fb6911)

## ⚙️ Installation

### Prerequisites
- Node.js
- npm
- Firebase account

### Local Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Visit `http://localhost:3000`

## 🌟 Technical Implementation

### React Features Used
- Functional Components
- React Hooks
- Context API
- Protected Routes
- Custom Hooks

### State Management
- Redux for global state
- Local state with useState
- Context for theme/auth
- Persistent storage integration

### API Integration
- Google Books API for search
- Firebase REST API for data
- JWT authentication flow
- Error handling

## 🚀 Deployment
- Automated deployment via Vercel
- GitHub integration for CI/CD
- Production optimizations
- Performance monitoring

## 🤝 Contributing
Contributions welcome! Feel free to:
- Fork the repository
- Create feature branch
- Submit pull requests

## 📜 License
[MIT](LICENSE)
