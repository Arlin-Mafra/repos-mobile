import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Profile = styled.View`
  background: #000;
  margin: 20px 20px 30px;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;
export const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;
export const Bio = styled.Text`
  font-size: 15px;
  color: #999;
  text-align: center;
  margin: 10px;
`;

export const ProfileButton = styled(RectButton)`
  background: #0099ff;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
