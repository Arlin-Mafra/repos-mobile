import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../../globals/styles';

import {
  Profile,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default function User({ route, navigation }) {
  const { user } = route.params;
  console.tron.log(user);
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
        <ProfileButton onPress={() => navigation.goBack()}>
          <ProfileButtonText>Voltar</ProfileButtonText>
        </ProfileButton>
      </Profile>
    </Container>
  );
}
