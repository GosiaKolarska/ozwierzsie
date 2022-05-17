import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { width, height, CARD, VERTICAL_MARGIN } from '../../../utilis/constants';
import Choice from '../Choice/choice';

export const Image = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  letter-spacing: 0.5px;
  z-index: 1;
`;

export const Gender = styled.Image`
  z-index: 1;
  margin-left: 12px;
`;

export const Age = styled.Text`
  color: #000;
  z-index: 1;
  text-transform: uppercase;
  font-size: 16px;
`;

export const FullOverview = styled.Text`
  font-size: 14px;
`;

export const HealthyCommentsTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 4px;
`;

export const HealthyComments = styled.Text`
  font-size: 14px;
`;

export const HealthyCommentsWrapper = styled.View`
    padding: 24px 0 12px;
`;
export const CardExtendedContent = styled.View`
   margin-bottom:70px;
    padding:16px;
`;

export const SiblingsTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 4px;
`;

export const SiblingsWrapper = styled.View`
    padding: 12px 0;
`;

export const SiblingCard = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  /* position: relative; */
  width: 50%;
`;

export const SiblingCardImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const SiblingCardName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.5px;
  z-index: 1;
  padding-left: 12px;
`;

export const SiblingCardDetailInfo = styled.View`
 position: absolute;
 bottom: 7px;
 display: flex;
 flex-direction: row;
 align-items: baseline;
`;

export const SiblingCardGender = styled.Image`
  z-index: 1;
  margin-left: 12px;
`;

export const SiblingCardAge = styled.Text`
  color: #fff;
  z-index: 1;
  text-transform: uppercase;
  font-size: 12px;
`;
export const LinkGradient = styled(LinearGradient).attrs({
    colors: ['transparent', 'rgba(255, 255, 255, 0.9)'],
  })`
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 75px;
      z-index: -7;
    `;

export const Gradient = styled(LinearGradient).attrs({
    colors: ['transparent', 'rgba(0, 0, 0, 0.9)'],
  })`
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 75px;
    `;


export const BadgeWrapper = styled.View`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 padding: 24px 0 14px;
`;
export const BadgePetage = styled.Text`
  font-size: 12px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const BadgeColor = styled.Text`
  font-size: 12px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const BadgeHair = styled.Text`
  font-size: 12px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const BadgePurebread = styled.Text`
  font-size: 12px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const BadgeSocial = styled.Text`
  font-size: 12px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const BadgeCompany = styled.Text`
  font-size: 12px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const BadgeCastrated = styled.Text`
  font-size: 12px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;