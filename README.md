<div align="center">
  <h1 align="center">Recurrly - Subscription Management</h1>
  <p align="center">
    <strong>A full-stack mobile application to monitor, manage, and control recurring expenses.</strong>
  </p>
  
  <p align="center">
    <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" /></a>
    <a href="https://expo.dev/"><img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://www.nativewind.dev/"><img src="https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="NativeWind" /></a>
    <a href="https://clerk.com/"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" /></a>
    <a href="https://posthog.com/"><img src="https://img.shields.io/badge/PostHog-F0AD4E?style=for-the-badge&logo=posthog&logoColor=white" alt="PostHog" /></a>
  </p>
</div>

<hr />

## ✨ Overview

**Recurrly** is an elegantly designed, full-stack subscription management application that helps users track their active and inactive subscriptions in one centralized dashboard. 
Built using a modern mobile architecture with React Native and Expo Router, Recurrly provides a fast, intuitive, and premium user experience.

> Stop losing money on forgotten subscriptions. Track, manage, and optimize your recurring expenses with Recurrly.

---

## 🚀 Key Features

* **📊 Dashboard & Analytics**: Centralized view of all recurring expenses.
* **🔔 Smart Reminders**: Never miss a renewal date with automated email notifications.
* **🔐 Secure Authentication**: Enterprise-grade security powered by **Clerk**.
* **📈 Product Analytics**: Integrated with **PostHog** to track usage and optimize UX.
* **💅 Premium UI/UX**: Styled meticulously with **NativeWind** (Tailwind CSS for React Native).
* **📱 Cross-Platform**: Runs natively on both **iOS** and **Android**.

---

## 🛠️ Tech Stack

### Frontend & Mobile Architecture
* **Framework:** [React Native](https://reactnative.dev/) & [Expo](https://expo.dev/) (SDK 54)
* **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [NativeWind](https://www.nativewind.dev/) (v4/v5 preview)
* **Icons:** `@expo/vector-icons`

### Backend & Infrastructure
* **Authentication:** [Clerk Expo](https://clerk.com/docs/quickstarts/expo)
* **Analytics:** [PostHog React Native](https://posthog.com/docs/libraries/react-native)

---

## 🏃‍♂️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/client) app on your iOS/Android device (or a configured simulator/emulator)

### Installation

1. **Clone the repository (or navigate to the project directory):**
   ```bash
   git clone <your-repo-url>
   cd react_native-recurrly
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and configure your keys:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   EXPO_PUBLIC_POSTHOG_API_KEY=your_posthog_api_key
   EXPO_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

4. **Start the Development Server:**
   ```bash
   npm run start
   ```

5. **Run on your device:**
   - Scan the QR code from the terminal using **Expo Go** on Android, or the **Camera app** on iOS.
   - Alternatively, press `i` to open in iOS simulator, or `a` to open in Android emulator.

---

## 📁 Project Structure

```text
react_native-recurrly/
├── app/                  # Expo Router file-based routing
│   ├── (auth)/           # Authentication screens (Sign In, Sign Up)
│   ├── (root)/           # Main application screens (Tabs, Dashboard)
│   ├── _layout.tsx       # Root layout & providers
│   └── ...
├── assets/               # Images, fonts, and static assets
├── components/           # Reusable UI components
├── constants/            # App-wide constants (theme, icons, data)
├── lib/                  # Utility functions and helper classes
├── src/
│   └── config/           # Configuration files (e.g., PostHog setup)
├── .env                  # Environment variables
├── app.json              # Expo configuration
├── global.css            # Global stylesheet for NativeWind
├── metro.config.js       # Metro bundler configuration
├── package.json          # Project metadata and dependencies
└── tailwind.config.js    # Tailwind CSS configuration
```

---

## 🤝 Contributing

Contributions are always welcome! Feel free to open an issue or submit a pull request if you'd like to improve the project.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
