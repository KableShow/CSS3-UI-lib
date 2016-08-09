import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import App from './App';

require('./circleIndex.scss');
require('../../common/css/common.scss');



render(<App />,document.getElementById('circleApp'));
