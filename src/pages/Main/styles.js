import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Form = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  border-radius: 4px;
  background: #eee;
  padding: 0 15px;
  height: 40px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  background: #0099ff;
  padding: 0 12px;
  border-radius: 4px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 30px;
`;

export const User = styled.View`
  background: #000;
  margin: 0 20px 30px;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  border-color: #fff;
  margin-top: 10px;
`;
export const Name = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  background: #0099ff;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;
export const ProfileButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
