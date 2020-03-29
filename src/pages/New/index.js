import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import Confirm from './Confirm';

const Stack = createStackNavigator();

export default function New() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTintColor: '#FFF',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horário',
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar agendamento',
        }}
      />
    </Stack.Navigator>
  );
}
