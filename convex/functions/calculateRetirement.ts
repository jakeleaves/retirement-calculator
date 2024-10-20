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
    retirementAge: v.number(),
    monthlySavings: v.number(),
    retirementAnnualSpending: v.number(),
    currentNetWorth: v.number(),
    endAge: v.number(),
    expectedReturnRate: v.number(),
  },
  handler: async (ctx, input: RetirementInput): Promise<RetirementOutput> => {
    const {
      age,
      retirementAge,
      monthlySavings,
      retirementAnnualSpending,
      currentNetWorth,
      endAge,
      expectedReturnRate,
    } = input;

    // Additional Validation (Optional)
    if (
      age < 0 ||
      retirementAge <= age ||
      monthlySavings < 0 ||
      retirementAnnualSpending < 0 ||
      currentNetWorth < 0 ||
      endAge <= retirementAge ||
      expectedReturnRate < 0 ||
      expectedReturnRate > 100 // Assuming a logical upper limit
    ) {
      throw new Error("Invalid input values. Please check your entries.");
    }

    // Perform the retirement calculation using your utility function
    const output: RetirementOutput = calculateRetirement(input);

    return output;
  },
});
