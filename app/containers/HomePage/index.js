/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavigationContainer from '../../containers/NavigationContainer';
import LoginContainer from '../../containers/LoginContainer';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log('home page props', this.props);

    return (
      <div>
        <NavigationContainer />
        {this.props.children}
      </div>
    );
  }
}
