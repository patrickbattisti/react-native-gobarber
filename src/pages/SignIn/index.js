import React from 'react';
import { View } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <View>
      <Input />
      <Input
        icon="call"
        style={{ marginTop: 30 }}
        placeholder="Digite seu numero"
      />
      <Button>Entrar</Button>
    </View>
  );
}
