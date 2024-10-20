// convex/functions/calculateRetirement.ts

import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { RetirementInput, RetirementOutput } from "../../src/utils/calculateRetirement";
import { calculateRetirement } from "../../src/utils/calculateRetirement";

/**
 * Convex mutation to calculate retirement metrics.
 *
 * @param ctx - The Convex context (contains db, auth, etc.).
 * @param input - The retirement input parameters.
 * @returns The retirement output metrics.
 * @throws Will throw an error if input validation fails.
 */
export const calculateFIRE = mutation({
    args: {
      age: v.number(),
      monthlySavings: v.number(),
      retirementAnnualSpending: v.number(),
      currentNetWorth: v.number(),
      expectedReturnRate: v.number(),
      withdrawalRate: v.number(),
    },
    handler: async (ctx, input: RetirementInput): Promise<RetirementOutput> => {
      const {
        age,
        monthlySavings,
        retirementAnnualSpending,
        currentNetWorth,
        expectedReturnRate,
        withdrawalRate,
      } = input;
  
      // Additional Validation
      if (
        age < 0 ||
        monthlySavings < 0 ||
        retirementAnnualSpending < 0 ||
        currentNetWorth < 0 ||
        expectedReturnRate < 0 ||
        withdrawalRate <= 0 // Withdrawal rate must be positive
      ) {
        throw new Error("Invalid input values. Please check your entries.");
      }
  
      // Perform the retirement calculation using the utility function
      const output: RetirementOutput = calculateRetirement(input);
  
      return output;
    },
  });