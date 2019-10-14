import * as React from 'react';
import * as ReactDom from 'react-dom';
import {WelcomeScreen} from './components/welcome-screen/welcome-screen.jsx';

const settings = {
  welcomeMessage: `Hello React`
};

ReactDom.render(
    <WelcomeScreen
      welcomeMessage={settings.welcomeMessage}
    />,
    document.getElementById(`root`)
);
