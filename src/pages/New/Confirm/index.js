import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '~/services/api';

import Background from '~/components/Background';
import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm() {
  const route = useRoute();
  const navigation = useNavigation();
  const { provider, time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppoitment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.push('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />

        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppoitment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}
