import * as React from 'react';
import { statusbar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#0099ff',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="user"
          component={User}
          options={{
            title: 'Usuários',
            headerStyle: {
              backgroundColor: '#0099ff',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
