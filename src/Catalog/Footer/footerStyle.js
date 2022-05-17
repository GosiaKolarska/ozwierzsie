import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { VERTICAL_MARGIN } from '../../../utilis/constants';

export const Container = styled.View`
  flex-direction: row;
  /*position: absolute;
  bottom: -660px;*/
  z-index: -1;
`;

export const RoundButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: white;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 200px;
  margin: 0 10px;
  elevation: 5;
`;
export const RoundButtonProfile = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  margin: 0 10px;
  elevation: 5;
`;

export const IconX = styled(FontAwesome).attrs({
  name: 'times',
  size: 40,
})`
  color: #ff006f;
`;

export const IconHeart = styled(FontAwesome).attrs({
  name: 'heart',
  size: 34,
})`
  margin-top: 3px;
  color: #00ffa6;
`;

export const IconProfile = styled(FontAwesome).attrs({
  name: 'angle-double-down',
  size: 26,
})`
  margin-top: 3px;
  color: #ff9a00;
`;