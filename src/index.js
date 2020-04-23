import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0099ff" />
      <Routes />
    </>
  );
}
