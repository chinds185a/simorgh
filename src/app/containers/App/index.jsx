/* eslint-disable */
/*
 * © Jordan Tart https://github.com/jtart
 * https://github.com/jtart/react-universal-app
 */
import React from 'react';
import { NaviProvider, View } from 'react-navi';
import compose from 'ramda/src/compose';
import withContexts from '../PageHandlers/withContexts';
import withPageWrapper from '../PageHandlers/withPageWrapper';

const App = ({ navigation }) => {
  return (
    <NaviProvider navigation={navigation}>
      <View />
    </NaviProvider>
  );
};

const EnhancedApp = compose(
  withContexts,
  withPageWrapper,
)(App);

export default EnhancedApp;
