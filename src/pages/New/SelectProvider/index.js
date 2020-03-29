import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '~/services/api';
import Background from '~/components/Background';
import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

export default function SelectProvider() {
  const navigation = useNavigation();

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('/providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  function navigateToSelectDateTime(provider) {
    navigation.navigate('SelectDateTime', { provider });
  }

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider onPress={() => navigateToSelectDateTime(provider)}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}
