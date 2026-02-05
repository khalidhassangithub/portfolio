---
description: How to run the Myportfolio project
---

To run the project locally, follow these steps:

1. **Install Dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**:
   The project uses Google AI for some features. Create a `.env.local` file in the root directory and add your Google AI API key:
   ```bash
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

3. **Run the Development Server**:
   // turbo
   ```bash
   npm run dev
   ```

4. **View the Project**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

5. **Build for Production**:
   If you want to create a production build, run:
   ```bash
   npm run build
   npm run start
   ```
