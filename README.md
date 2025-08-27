# React Native Wallet

A simple and modern wallet app built with React Native (Expo) and Node.js backend. Track your income, expenses, and balance with a clean UI and real-time updates.
## Features
- User authentication (Clerk)
- Add, view, and delete transactions
- View total balance, income, and expenses
- Rate limiting and security (Upstash Redis)
- Responsive design for mobile devices
- Backend with NeonDB (Postgres)

## Tech Stack
- **Frontend:** React Native (Expo), Expo Router
- **Backend:** Node.js, Express
- **Database:** NeonDB (Postgres)
- **Rate Limiting:** Upstash Redis
- **Authentication:** Clerk

## Getting Started

### Prerequisites
- Node.js & npm
- Expo CLI (`npm install -g expo-cli`)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with your NeonDB and Upstash credentials:
   ```env
   DATABASE_URL=your-neondb-url
   UPSTASH_REDIS_REST_URL=your-upstash-url
   UPSTASH_REDIS_REST_TOKEN=your-upstash-token
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the mobile_wallet folder:
   ```sh
   cd mobile_wallet
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npx expo start
   ```
4. Update `constants/api.js` with your backend IP and port (for emulator/device access).

## Usage
- Add transactions to track your spending and income.
- View your balance, income, and expenses on the dashboard.
- Delete transactions as needed.


## License
MIT

---
Made with ❤️ by Siddhi Agrawal
