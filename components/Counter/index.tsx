import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { handleIncrement, handleDecrement, handleIncrementAsync, handleDecrementAsync } from './store/actions';

interface CounterPropTypes {
  value: number;
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
  handleDecrement: MouseEventHandler<HTMLButtonElement>;
  handleIncrementAsync: MouseEventHandler<HTMLButtonElement>;
  handleDecrementAsync: MouseEventHandler<HTMLButtonElement>;
}

interface CounterStateTypes {
  counter: CounterPropTypes;
}

const Counter = (props: CounterPropTypes) => {
  const { value, handleDecrement, handleIncrement, handleIncrementAsync, handleDecrementAsync } = props;

  return (
    <div>
      <div>
        <a>Counter: </a>
        <span>{value}</span>
      </div>
      <div>
        <span>actions</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <span>sagas</span>
        <button onClick={handleIncrementAsync}>+</button>
        <button onClick={handleDecrementAsync}>-</button>
      </div>
    </div>
  );
};

Counter.defaultProps = {};
Counter.propTypes = {};

function mapStateToProps(state: CounterStateTypes) {
  return {
    value: state.counter.value,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleIncrement() {
      dispatch(handleIncrement());
    },
    handleDecrement() {
      dispatch(handleDecrement());
    },
    handleIncrementAsync() {
      dispatch(handleIncrementAsync());
    },
    handleDecrementAsync() {
      dispatch(handleDecrementAsync());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
