import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (event) => {
    setStep(Number(event.target.value));
  };

  return (
    <div>
      <input type="number" value={step} onChange={handleStepChange} />
      <button onClick={handleDecrement}>Decrement</button>
      <div>Count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
