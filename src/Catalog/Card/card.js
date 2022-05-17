import React, { useCallback } from "react";
import { Animated } from "react-native";

import {
  Container,
  Name,
  Gradient,
  CardInner,
  Image,
  Like,
  Nope,
  CardDetailInfo,
  Overview,
  Gender,
  Age,
} from "./cardStyle";
import { ACTION_OFFSET } from "../../../utilis/constants";

export default function Card({
  source,
  isFirst,
  swipe,
  tiltSign,
  name,
  gender,
  age,
  overview,
  onAction,
  ...rest
}) {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -25],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate: rotate }],
  };

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            { opacity: likeOpacity },
          ]}
        >
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            { opacity: nopeOpacity },
          ]}
        >
          <Choice type="nope" />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Container
      onTouchEnd={onAction}
      as={Animated.View}
      style={isFirst && animatedCardStyle}
      {...rest}
    >
      <Image source={source} />
      <CardInner>
        <Gradient />

        <CardDetailInfo>
          <Name>{name}, </Name>
          <Age>{age}</Age>
          <Gender source={gender} />
        </CardDetailInfo>
        <Overview>{overview}</Overview>
      </CardInner>
      {isFirst && (
        <>
          <Like type="like" style={{ opacity: likeOpacity }} />
          <Nope type="nope" style={{ opacity: nopeOpacity }} />
        </>
      )}
    </Container>
  );
}
