import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const List = styled.FlatList`
  height: 50px;
  width: 100%;
  background: #000;
`;

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

/*

*/
export const OwnerProfile = styled.View`
  background: #999;
  flex-direction: row;
  border-radius: 5px;
  margin: 20px 20px 30px;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;
`;
export const OwnerName = styled.Text`
  color: #fff;
  font-size: 16px;
`;
export const OwnerAvatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin: 10px 10px 10px 5px;
`;

export const Stars = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
`;
