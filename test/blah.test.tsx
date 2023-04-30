import React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from '../stories/Avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar>Teste</Avatar>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
