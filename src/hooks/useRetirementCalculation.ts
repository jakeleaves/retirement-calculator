// src/hooks/useRetirementCalculation.ts

import { useMutation } from 'convex/react';
import { api } from "../../convex/_generated/api";
import { RetirementInput, RetirementOutput } from '../utils/calculateRetirement';

export const useRetirementCalculation = () => {
  const calculateRetirement = useMutation(api.functions.calculateRetirement.calculateFIRE);

  const performCalculation = async (input: RetirementInput): Promise<RetirementOutput> => {
    const result = await calculateRetirement(input);  // No need to cast to EmptyObject if the mutation is properly typed
    return result;
  };

  return { performCalculation };
};
