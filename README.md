# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **DEMO VIDEO**:

- https://github.com/harshdipsinhzala/web-editor/assets/146345557/901d1b97-7aaa-4aa8-8139-0b300c80081b
- 
- **COLLABORATIVE TEXT-EDITOR**:

**Project Description**:

This project is a web application built with React that enables collaborative text editing among multiple users. It utilizes WebRTC (Web Real-Time Communication) for peer-to-peer communication and Yjs for real-time data synchronization.

**Key Components and Functionality**:

React Components: The application consists of React components that create the user interface for the collaborative text editor. Components handle user interactions and render the editor interface.

Yjs Integration: Yjs is utilized to synchronize the text document's state across all connected users. It ensures that changes made by any user are propagated to others in real-time. Yjs supports conflict resolution and provides a robust framework for collaborative editing.

WebRTC Implementation: WebRTC facilitates peer-to-peer communication between users' browsers. It enables efficient and secure data exchange, allowing users to collaborate without the need for a central server. WebRTC handles tasks such as establishing connections, sending data, and handling network constraints.

Real-time Collaboration Features: Users can concurrently edit the text document, and changes are immediately reflected for all participants.

**Getting Started**:

1.Navigate to the app directory.

2.Run npm install to install the necessary dependencies.

3.npm install @monaco-editor/react

4.npm install yjs y-webrtc

5.npm install y-monaco

6.Go to app.jsx and type npm run dev and then open the url which

will be mention above:  http://localhost:5182/

