import React from 'react';
import ReactDOM from 'react-dom';

const div = (
  React.createElement('div', null,
    React.createElement('p', null,
      React.createElement('span', null, 'hi')))
)

console.log(div) // 虚拟的 element


ReactDOM.render(div, document.getElementById('root'))
// document.body.appendChild(div)



