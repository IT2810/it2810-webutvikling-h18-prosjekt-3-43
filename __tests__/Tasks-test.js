import React from 'react';
import Tasks from '../src/components/Tasks';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Tasks />).toJSON();
  expect(tree).toMatchSnapshot();
});