/**
 * @format
 */

import AppRegistry from 'react-native';
import App from './App';
import * as appName from './app.json';

AppRegistry.registerComponent(appName?.name, () => App);
