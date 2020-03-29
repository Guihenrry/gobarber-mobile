import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import New from '~/pages/New';

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

function SignedRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255, 255, 255, .6)',
        keyboardHidesTabBar: true,
        style: {
          borderTopColor: 'transparent',
          backgroundColor: '#8D41A8',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Agendamentos',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <Icon name="event" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          title: 'Agendar',
          tabBarVisible: false,
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Meu Perfil',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const { signed } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {signed ? (
          <stack.Screen name="Dashboard" component={SignedRoutes} />
        ) : (
          <>
            <stack.Screen name="SignIn" component={SignIn} />
            <stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
}
