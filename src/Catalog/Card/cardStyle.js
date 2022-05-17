import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { width, height, CARD, VERTICAL_MARGIN } from '../../../utilis/constants';
import Choice from '../Choice/choice';

export const Container = styled.View`
  position: absolute;
  top: ${VERTICAL_MARGIN}px;
  
`;
export const Image = styled.Image`
  width: ${CARD.CARD_WIDTH}px;
  height: ${CARD.CARD_HEIGHT}px;
`;

export const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.5px;
  z-index: 1;
  padding-left: 12px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0, 0, 0, 0.9)'],
})`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 150px;
  `;

export const Like = styled(Choice)`
 top: ${height * 0.12}px;
 left: ${width * 0.1}px;
 transform: rotate(-30deg);
`;

export const Nope = styled(Choice)`
 top: ${height * 0.12}px;
 right: ${width * 0.1}px;
 transform: rotate(30deg);
`;

export const CardDetailInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Overview = styled.Text`
  max-width: 80%;
  color: #fff;
  z-index: 1;
  padding-left: 12px;
  font-size: 14px;
`;

export const Gender = styled.Image`
  z-index: 1;
  margin-left: 12px;
`;

export const Age = styled.Text`
  color: #fff;
  z-index: 1;
  text-transform: uppercase;
  font-size: 16px;
`;

export const CardInner = styled.View`
  position: absolute;
  bottom: 0;
  padding-bottom: 12px;
  width: 100%;
`;

export const CardInnerExtended = styled.View`
  
  width: 100%;
`;