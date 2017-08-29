import React from 'react';
import { mount } from 'enzyme';
import App, { Label, Button } from './App';

test('ensures number in Label is incremented when Button is clicked', () => {
  const app = mount(<App />)
  expect(app.find(Label).text()).toBe('The current number is: 0.')
  app.find(Button).simulate('click')
  expect(app.find(Label).text()).toBe('The current number is: 1.')
  app.find(Button).simulate('click')
  expect(app.find(Label).text()).toBe('The current number is: 2.')
})
