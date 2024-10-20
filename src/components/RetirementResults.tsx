// src/components/RetirementResults.tsx

import React from 'react';

interface RetirementResultsProps {
  output: any; 
  error: string | null;
}

const RetirementResults: React.FC<RetirementResultsProps> = ({ output, error }) => {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg"> {/* Set dark background */}
      <h2 className="text-xl font-semibold mb-6 text-gray-100">Your FIRE Results</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {output ? (
        <div className="text-center space-y-6 text-gray-100">
          <div>
            <p className="text-2xl font-bold">FIRE Number</p>
            <p className="text-3xl text-green-500 font-extrabold">
              ${output.fireNumber.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">FIRE Age</p>
            <p className="text-3xl text-green-500 font-extrabold">{output.fireAge.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Years Until FIRE</p>
            <p className="text-3xl text-green-500 font-extrabold">
              {output.yearsUntilFire.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-300">Enter your details and press "Calculate FIRE" to see results.</p>
      )}
    </div>
  );
};

export default RetirementResults;
