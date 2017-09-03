import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';

export class Welcome extends Component {
  render() {
    return (
    	<div>
    	<SimpleSlider />
      <Header as='h2' icon>
    <Icon name='settings' />
    Welcome To i7san!
    <Header.Subheader>
      Welcome To i7san!
    </Header.Subheader>
  </Header>
  </div>
    );
  }
}
export default Welcome;