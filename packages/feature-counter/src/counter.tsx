import React, { useState } from 'react';
import { Button } from '@repo/ui';

interface CounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  step = 1,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  className = ''
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prev => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount(prev => Math.max(prev - step, min));
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className="text-4xl font-bold text-gray-900">{count}</div>
      <div className="flex items-center space-x-2">
        <Button 
          onClick={decrement}
          disabled={count <= min}
          size="sm"
          className="bg-red-500 hover:bg-red-600"
        >
          -
        </Button>
        <Button 
          onClick={reset}
          size="sm"
          className="bg-gray-500 hover:bg-gray-600"
        >
          Reset
        </Button>
        <Button 
          onClick={increment}
          disabled={count >= max}
          size="sm"
          className="bg-green-500 hover:bg-green-600"
        >
          +
        </Button>
      </div>
      {(min > Number.MIN_SAFE_INTEGER || max < Number.MAX_SAFE_INTEGER) && (
        <div className="text-sm text-gray-500">
          Range: {min} to {max}
        </div>
      )}
    </div>
  );
};
