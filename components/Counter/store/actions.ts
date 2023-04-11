export const COUNTER_INCREMENT = 'counter/INCREMENT';
export const COUNTER_DECREMENT = 'counter/DECREMENT';
export const COUNTER_INCREMENT_ASYNC = 'counter/INCREMENT_ASYNC';
export const COUNTER_DECREMENT_ASYNC = 'counter/DECREMENT_ASYNC';

export const handleIncrement = () => ({
  type: COUNTER_INCREMENT,
});

export const handleDecrement = () => ({
  type: COUNTER_DECREMENT,
});

export const handleIncrementAsync = () => ({
  type: COUNTER_INCREMENT_ASYNC,
});

export const handleDecrementAsync = () => ({
  type: COUNTER_DECREMENT_ASYNC,
});

export type CounterType =
  | ReturnType<typeof handleIncrement>
  | ReturnType<typeof handleDecrement>
  | ReturnType<typeof handleIncrementAsync>
  | ReturnType<typeof handleDecrementAsync>;
