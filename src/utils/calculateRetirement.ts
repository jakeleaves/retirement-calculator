// src/utils/calculateRetirement.ts

export interface RetirementInput {
    age: number;
    monthlySavings: number;
    retirementAnnualSpending: number;
    currentNetWorth: number;
    expectedReturnRate: number; // in percentage, e.g., 5 for 5%
    withdrawalRate: number;      // in percentage, e.g., 4 for 4%
  }
  
  export interface RetirementOutput {
    fireNumber: number;
    fireAge: number;
    yearsUntilFire: number;
    detailedNetWorth: { age: number; netWorth: number; contributions: number; ratio: number }[];
  }
  
  export const calculateRetirement = (input: RetirementInput): RetirementOutput => {
    const {
      age,
      monthlySavings,
      retirementAnnualSpending,
      currentNetWorth,
      expectedReturnRate,
      withdrawalRate,
    } = input;
  
    const fireNumber = retirementAnnualSpending / (withdrawalRate / 100);
    const annualReturnRate = expectedReturnRate / 100;
  
    let totalSavings = currentNetWorth;
    let totalContributions = 0;
    let yearsUntilFire = 0;
    const detailedNetWorth: { age: number; netWorth: number; contributions: number; ratio: number }[] = [];
  
    while (totalSavings < fireNumber && yearsUntilFire < 100) {
      yearsUntilFire += 1;
  
      // Add annual contributions
      totalContributions += monthlySavings * 12;
  
      // Add contributions to the total savings
      totalSavings += monthlySavings * 12;
  
      // Apply annual return
      totalSavings *= 1 + annualReturnRate;
  
      detailedNetWorth.push({
        age: age + yearsUntilFire,
        netWorth: parseFloat(totalSavings.toFixed(2)),
        contributions: parseFloat(totalContributions.toFixed(2)),
        ratio: parseFloat((totalSavings / totalContributions).toFixed(2)),
      });
    }
  
    const fireAge = age + yearsUntilFire;
  
    return {
      fireNumber: parseFloat(fireNumber.toFixed(2)),
      fireAge: parseFloat(fireAge.toFixed(2)),
      yearsUntilFire: parseFloat(yearsUntilFire.toFixed(2)),
      detailedNetWorth,
    };
  };
  