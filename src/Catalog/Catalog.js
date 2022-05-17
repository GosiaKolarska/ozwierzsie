import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, PanResponder, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CARD, ACTION_OFFSET, VERTICAL_MARGIN } from "../../utilis/constants";
import Card from "./Card/card";
import Footer from "./Footer/footer";
import { pets as petsObj } from "./data";
import { Container, Logo, Filters, Header } from "./CatalogStyle";

export default function Catalog({route}) {
  const navigation = useNavigation();

  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;
  const [pets, setPets] = useState(petsObj);
  const [petOnScreen, setPetOnScreen] = useState();
  const [swipeDirect, setSwipeDirect] = useState();

  // zmienic - dodac widok, ze nie ma wiecej kotow o wybranych filtrach, czy chcesz kontynuowac:
  // a.ze wszystkimi
  // b. przejsc do wyszukiwarki
  // c. przejsc do ulubionych
  useEffect(() => {
    if (pets.length === 0) {
      setPets(petsObj);
    }
    setPetOnScreen(pets[0]);
  }, [pets]);

  useEffect(()=>{
    const {params} = route
    console.log(params)
if(params?.ldStat){
handleChoise(params.sign, params.datap)
}
  },[route])

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, { dx, dy, y0 }) => {
        tiltSign.setValue(y0 > CARD.CARD_HEIGHT / 2 ? 1 : -1);
        swipe.setValue({ x: dx, y: dy });
        setSwipeDirect(Math.sign(dx))
      },
      onPanResponderRelease: (e, { dx, dy }) => {
        const direction = Math.sign(dx);
        const userAction = Math.abs(dx) > ACTION_OFFSET;

        if (userAction) {
          //   addToFavourite(direction);
          Animated.timing(swipe, {
            duration: 200,
            toValue: {
              x: direction * CARD.CARD_OUT_WIDTH,
              y: dy,
            },
            useNativeDriver: true,
          }).start(transitionNext);
        } else {
          Animated.spring(swipe, {
            friction: 5,
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const transitionNext = useCallback(() => {
    setPets((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleChoise = useCallback(
    (sign, data) => {
      Animated.timing(swipe.x, {
        duration: 500,
        toValue: sign * CARD.CARD_OUT_WIDTH,
        useNativeDriver: true,
      }).start(transitionNext);
      addToFavourite(sign, data);
    },
    [swipe.x, transitionNext]
  );



  const addToFavourite = async (sign, data) => {
    console.log(sign, data);
    let localFav = await AsyncStorage.getItem("favList");
    
    const currentFav = JSON.parse(localFav || "[]");
    // console.log(pets[0], "HERE IS DIFF", petOnScreen);
    if (data && sign === 1) {
      if (!currentFav?.some((e) => e.id === data.id)) {
        let favs = [...currentFav, data];
        console.log(favs, "FAVOURITES");
        await AsyncStorage.setItem("favList", JSON.stringify(favs));
      }
    }
  };

  //   useEffect(() => {
  //     console.log(petOnScreen, "SCREEN PET STATE");
  //     addToFavourite()
  //   }, [pets]);

  return (
    <SafeAreaView>
      <Header>
        <Logo source={require("../../assets/ozwierzsie_logo.png")} />
        <Filters
          source={require("../../assets/icons_PNG/icon__filter.png")}
          onPress={() => navigation.navigate("Search")}
        />
      </Header>
      <Container>
        <View
          style={{
            height: CARD.CARD_HEIGHT + VERTICAL_MARGIN,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pets
            .map(({ id, name, source, gender, age, overview }, index) => {
              const isFirst = index === 0;
              const panHandlers = isFirst ? panResponder.panHandlers : {};

              return (
                <Card
                  key={name}
                  name={name}
                  gender={gender}
                  age={age}
                  onAction={()=> addToFavourite(swipeDirect,petOnScreen)}
                  overview={overview}
                  source={source}
                  isFirst={isFirst}
                  swipe={swipe}
                  tiltSign={tiltSign}
                  {...panHandlers}
                />
              );
            })
            .reverse()}
        </View>
        <View style={{ marginTop: 5 }}>
          {petOnScreen && (
            <Footer
              handleLike={(e) => handleChoise(1, petOnScreen)}
              handleCenter={()=> navigation.navigate('CardExtended', {datap:petOnScreen})}
              handleNo={(e) => handleChoise(-1, petOnScreen)}
            />
          )}
        </View>
      </Container>
    </SafeAreaView>
  );
}
