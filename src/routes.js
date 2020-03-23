import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <stack.Screen name="SignIn" component={SignIn} />
        <stack.Screen name="SignUp" component={SignUp} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
