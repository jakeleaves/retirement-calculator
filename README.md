# Retirement Calculator

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Demo

Experience the **Retirement Calculator** live:

👉 **[Retirement Calculator Demo](https://retirement-calculator-9zg1vyz8t-jakeleaves-projects.vercel.app)**

---

## Features

- **Retirement Planning**: Input your current age, monthly savings, retirement spending goals, and expected return rates to calculate when you can retire.
- **Interactive Chart**: Visualize your net worth growth over time based on your input data.
- **Detailed Results**: View a breakdown of how your net worth evolves as you save towards retirement.
- **Dynamic Calculations**: The calculator adjusts in real time based on the values you provide, giving you instant feedback.
- **Responsive Design**: Enjoy a seamless experience across all devices, from desktops to mobile phones.
- **Secure Backend**: Powered by Convex functions, ensuring efficient and secure computations.

---

## Tech Stack

The Retirement Calculator leverages a modern and robust technology stack:

- **Frontend**: [Next.js](https://nextjs.org/) (Typescript)
- **Backend**: [Convex](https://www.convex.dev/) functions for server-side computations
- **Deployment**: [Vercel](https://vercel.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (`useState`)
- **API Integration**: Convex for seamless client-server interactions

---

## Installation

Follow these steps to set up the Retirement Calculator locally:

### Prerequisites

- **Node.js**: Ensure you have Node.js (v14 or later) installed. [Download Node.js](https://nodejs.org/)
- **Git**: Install Git to clone the repository. [Download Git](https://git-scm.com/downloads)
- **Convex CLI**: Install the Convex CLI globally to manage backend functions.

  ```bash
  npm install -g convex
  ```

### Steps
1. Clone the Repository
```bash
git clone https://github.com/jakeleaves/retirement-calculator.git
cd retirement-calculator
```
2. Install Dependencies
```bash
npm install
```
3. Set Up Convex Backend
* Initialize Convex

Navigate to the project directory and initialize Convex:
```bash
convex init
```
* Deploy Convex Functions

Deploy your Convex functions to ensure the backend is ready:
```bash
convex dev
```
* Configure Environment Variables

Create a .env.local file in the root directory and add your Convex project URL and API token:
```bash
CONVEX_URL=https://your-convex-project.convex.cloud
CONVEX_API_TOKEN=your_convex_api_token
```
4. Start the Development Server
```bash
npm run dev
```

## Usage
1. Open the Application

Open your browser and navigate to http://localhost:3000.

2. Enter Your Financial Data
* Current Age: Enter your current age.
* Monthly Savings: Specify how much you save each month.
* Current Net Worth: Input your existing savings and investments.
* Expected Return Rate: Define the annual return rate you expect on your investments.
* Retirement Annual Spending: Set your desired annual spending during retirement.
* Withdrawal Rate: Choose a safe withdrawal rate for your retirement funds.
3. Calculate Retirement Plan
Click the Calculate button to generate your retirement projections. The app will display:

* Estimated Retirement Age: When you can retire based on your inputs.
* Net Worth Growth Chart: Visual representation of your savings growth over time.
* Detailed Financial Breakdown: Insights into your retirement planning.
4. Modify Inputs as Needed
Adjust any of the input fields to see how changes affect your retirement timeline and net worth projections in real-time.

## License
This project is licensed under the MIT License.

