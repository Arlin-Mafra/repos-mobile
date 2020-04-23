import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from '../../globals/styles';
import api from '../../services/api';

import {
  Owner,
  Profile,
  Avatar,
  List,
  Name,
  Bio,
  OwnerProfile,
  OwnerName,
  OwnerAvatar,
  Stars,
} from './styles';

export default class User extends Component {
  state = {
    stars: [],
  };
  async componentDidMount() {
    const { route } = this.props;
    const user = route.params.user;
    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({ stars: response.data });
  }
  render() {
    const { stars } = this.state;
    const { route } = this.props;
    const user = route.params.user;
    return (
      <Container>
        <Profile>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Profile>

        <Stars>Meus Favoritos</Stars>

        <List
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({ item }) => (
            <OwnerProfile>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <OwnerName>{item.name}</OwnerName>
            </OwnerProfile>
          )}
        />
      </Container>
    );
  }
}
