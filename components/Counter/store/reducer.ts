import { CounterType, COUNTER_INCREMENT, COUNTER_DECREMENT } from './actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export default function counterRouter(state = initialState, action: CounterType) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
