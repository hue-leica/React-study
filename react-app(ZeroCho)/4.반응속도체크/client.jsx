import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

//import NumberBaseball from './NumberBaseball';
import ResponseCheck from './ResponseCheck-hooks';

//const Hot = hot(NumberBaseball);
const Hot = hot(ResponseCheck);

ReactDOM.render(<Hot />, document.querySelector('#root'));
