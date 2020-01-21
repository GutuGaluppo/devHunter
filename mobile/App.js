import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (<>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
    {/*StatusBar = estilizar todas as infos na "navBar" (batery icon, clock, wi-fi icon, etc...) */}
    <Routes />
    </>
  );
}
