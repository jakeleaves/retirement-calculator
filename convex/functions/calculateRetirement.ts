// src/utils/calculateRetirement.ts

export interface RetirementInput {
    currentAge: number
    retirementAge: number
    currentSavings: number
    monthlyContribution: number
    annualReturnRate: number // in percentage, e.g., 5 for 5%
    inflationRate: number // in percentage
    desiredRetirementIncome: number
  }
  
  export interface RetirementOutput {
    totalSavings: number
    annualRetirementIncome: number
    yearsInRetirement: number
    detailedYearlySavings: { year: number; savings: number }[]
  }
  
  /**
   * Calculates retirement savings and related metrics.
   *
   * @param input - The retirement input parameters.
   * @returns The retirement output metrics.
   */
  export const calculateRetirement = (input: RetirementInput): RetirementOutput => {
    const yearsToRetirement = input.retirementAge - input.currentAge
    const monthlyReturn = input.annualReturnRate / 100 / 12
    const totalMonths = yearsToRetirement * 12
  
    // Future Value of current savings
    const fvCurrent = input.currentSavings * Math.pow(1 + monthlyReturn, totalMonths)
  
    // Future Value of monthly contributions
    const fvContributions =
      input.monthlyContribution *
      ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn)
  
    const totalSavings = fvCurrent + fvContributions
  
    // Adjust for inflation
    const inflationAdjustedSavings =
      totalSavings / Math.pow(1 + input.inflationRate / 100, yearsToRetirement)
  
    // Estimate annual retirement income (simple approach)
    const annualRetirementIncome = inflationAdjustedSavings * (input.annualReturnRate / 100)
  
    // Assuming a fixed number of years in retirement (e.g., 30 years)
    const yearsInRetirement = 30
  
    // Generate detailed yearly savings data for visualization
    const detailedYearlySavings: { year: number; savings: number }[] = []
    let savings = input.currentSavings
    for (let year = 1; year <= yearsToRetirement; year++) {
      for (let month = 1; month <= 12; month++) {
        savings = savings * (1 + monthlyReturn) + input.monthlyContribution
      }
      detailedYearlySavings.push({ year, savings: parseFloat(savings.toFixed(2)) })
    }
  
    return {
      totalSavings: parseFloat(inflationAdjustedSavings.toFixed(2)),
      annualRetirementIncome: parseFloat(annualRetirementIncome.toFixed(2)),
      yearsInRetirement,
      detailedYearlySavings,
    }
  }
  