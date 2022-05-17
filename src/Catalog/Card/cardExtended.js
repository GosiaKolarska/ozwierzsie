import React, { useCallback } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardInnerExtended, CardDetailInfo } from './cardStyle';
import {
  CardExtendedContent,
  HealthyComments,
  Image,
  Gradient,
  SiblingsWrapper,
  SiblingsTitle,
  SiblingCard,
  SiblingCardDetailInfo,
  SiblingCardImage,
  SiblingCardName,
  SiblingCardAge,
  SiblingCardGender,
  HealthyCommentsTitle,
  HealthyCommentsWrapper,
  FullOverview,
  Name,
  Gender,
  Age,
  BadgePetage,
  BadgeColor,
  BadgeHair,
  BadgePurebread,
  BadgeSocial,
  BadgeCompany,
  BadgeCastrated,
  BadgeWrapper,
  LinkGradient,
} from './cardExtendedStyle';
import { ACTION_OFFSET } from '../../../utilis/constants';
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { Logo, Header } from '../CatalogStyle';
import Footer from '../Footer/footer';
const screenHeight = Dimensions.get('screen').height;
export default function CardExtended({
  source,
  isFirst,
  swipe,
  tiltSign,
  name,
  gender,
  age,
  overview,
  route, 
  navigation,
  ...rest
}) {
const {datap} = route.params;
console.log(datap);
const handleChoise = (n)=>{
  if(n===1){
navigation.navigate('Catalog',{ldStat:true,sign:1, datap})
  }
  if(n===-1){
navigation.navigate('Catalog', {ldStat:true,sign:-1, datap})
  }
  if(n===0){
    navigation.goBack()
  }
}

const addToFavourite = async (data) => {
    let localFav = await AsyncStorage.getItem("favList");
    
    const currentFav = JSON.parse(localFav || "[]");
    // console.log(pets[0], "HERE IS DIFF", petOnScreen);

        let favs = [...currentFav, data];
        await AsyncStorage.setItem("favList", JSON.stringify(favs));
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={datap?.source} />
        <CardExtendedContent>
          <CardInnerExtended>
            <CardDetailInfo>
              <Name>{datap?.name || ''}, </Name>
              <Age>{datap?.age || ''}</Age>
              <Gender source={datap?.gender || ''} />
            </CardDetailInfo>
            <BadgeWrapper>
              <BadgePetage>KITTY</BadgePetage>
              <BadgeColor>RED</BadgeColor>
              <BadgeHair>SHORT HAIR</BadgeHair>
              <BadgePurebread>PUREBREAD</BadgePurebread>
              <BadgeSocial>LIKES CHILDREN</BadgeSocial>
              <BadgeCompany>LIKES OTHER PETS</BadgeCompany>
              <BadgeCastrated>CASTRATED</BadgeCastrated>
            </BadgeWrapper>
            <FullOverview>
              {datap?.overview || ''}
               {datap?.overview || ''}
                {datap?.overview || ''}
                 {datap?.overview || ''}
                 {datap?.overview || ''}
               {datap?.overview || ''}
                {datap?.overview || ''}
                 {datap?.overview || ''}
            </FullOverview>
            <HealthyCommentsWrapper>
              <HealthyCommentsTitle>HEALTHY COMMENTS:</HealthyCommentsTitle>
              <HealthyComments>The are not healthy comments.</HealthyComments>
            </HealthyCommentsWrapper>
            <SiblingsWrapper>
              <SiblingsTitle>I HAVE SIBLINGS:</SiblingsTitle>
              <SiblingCard>
                <SiblingCardImage
                  source={require('./../../../assets/IMG_2847.jpeg')}
                />
                <Gradient />
                <SiblingCardDetailInfo>
                  <SiblingCardName>Placek, </SiblingCardName>
                  <SiblingCardAge>4 miesiące</SiblingCardAge>
                  <SiblingCardGender source={gender} />
                </SiblingCardDetailInfo>
              </SiblingCard>
            </SiblingsWrapper>
          </CardInnerExtended>
        </CardExtendedContent>
      </ScrollView>
      <View
        style={{
          width: '100%',
          paddingBottom:15,
          position: 'absolute',
          left: 0,
          right: 0,
          top: screenHeight-100,
          bottom: 0,
          justifyContent:'center',
          alignItems:'center',
          zIndex:9
        }}>
        <Footer
          handleLike={() => handleChoise(1)}
          handleCenter={()=> handleChoise(0)}
          handleNo={() => handleChoise(-1)}
        />
         <LinkGradient />
      </View>
    </View>
  );
}
