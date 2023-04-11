import React from 'react';
import PropTypes from 'prop-types';

import Counter from '@components/Counter';

const App = () => {
  return (
    <div>
      <h3>Hello, Redux!!!</h3>
      <hr />
      <div>
        <Counter />
      </div>
      <hr />
    </div>
  );
};

export default App;
