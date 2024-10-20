// src/utils/calculateRetirement.ts

export interface RetirementInput {
    age: number;
    retirementAge: number;
    monthlySavings: number;
    retirementAnnualSpending: number;
    currentNetWorth: number;
    endAge: number;
    expectedReturnRate: number; // Expected annual return rate in percentage (e.g., 5 for 5%)
  }
  
  export interface RetirementOutput {
    fireNumber: number;
    fireAge: number;
    yearsUntilFire: number;
    detailedNetWorth: { age: number; netWorth: number }[];
  }
  
  /**
   * Calculates retirement metrics based on user inputs.
   *
   * @param input - The retirement input parameters.
   * @returns The retirement output metrics.
   */
  export const calculateRetirement = (input: RetirementInput): RetirementOutput => {
    const {
      age,
      retirementAge,
      monthlySavings,
      retirementAnnualSpending,
      currentNetWorth,
      endAge,
      expectedReturnRate,
    } = input;
  
    const yearsUntilRetirement = retirementAge - age;
    const yearsInRetirement = endAge - retirementAge;
  
    // Convert expected return rate from percentage to decimal
    const annualReturnRate = expectedReturnRate / 100;
    const monthlyReturn = annualReturnRate / 12;
  
    // Future Value of Current Net Worth
    const fvCurrent = currentNetWorth * Math.pow(1 + monthlyReturn, yearsUntilRetirement * 12);
  
    // Future Value of Monthly Savings
    const fvSavings = monthlySavings * ((Math.pow(1 + monthlyReturn, yearsUntilRetirement * 12) - 1) / monthlyReturn);
    const totalSavings = fvCurrent + fvSavings;
  
    // FIRE Number: The amount needed at retirement to sustain annual spending
    const fireNumber = retirementAnnualSpending / annualReturnRate;
  
    // Years Until FIRE
    const yearsUntilFire = Math.log(fireNumber / totalSavings) / Math.log(1 + annualReturnRate);
  
    // FIRE Age
    const fireAge = age + yearsUntilFire;
  
    // Generate detailed net worth data for visualization
    const detailedNetWorth: { age: number; netWorth: number }[] = [];
    let currentNetWorthProjection = currentNetWorth;
  
    for (let y = 1; y <= endAge - age; y++) {
      for (let m = 1; m <= 12; m++) {
        currentNetWorthProjection = currentNetWorthProjection * (1 + monthlyReturn) + monthlySavings;
      }
      detailedNetWorth.push({
        age: age + y,
        netWorth: parseFloat(currentNetWorthProjection.toFixed(2)),
      });
    }
  
    return {
      fireNumber: parseFloat(fireNumber.toFixed(2)),
      fireAge: parseFloat(fireAge.toFixed(2)),
      yearsUntilFire: parseFloat(yearsUntilFire.toFixed(2)),
      detailedNetWorth,
    };
  };
  