import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const emailRef = useRef(null);
  const oldPasswordRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [name, setName] = useState(profile ? profile.name : '');
  const [email, setEmail] = useState(profile ? profile.email : '');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome ompleto"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            ref={emailRef}
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            ref={oldPasswordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            ref={passwordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            ref={confirmPasswordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}
