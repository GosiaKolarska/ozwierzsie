import React, { useCallback, useRef } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RoundButtonStyle } from './roundButtonStyle';

export default function RoundButton({ name, size, color, onPress }) {

    const scale = useRef(new Animated.Value(1)).current;
    const animateScale = useCallback((newValue) => {
        Animated.spring(scale, {
            toValue: newValue,
            friction: 4,
            useNativeDriver: true,
        }).start();
    },
        [scale]
    );

    return (
        <TouchableWithoutFeedback
            onPressIn={() => {
                animateScale(0.8);
                onPress();
            }}
            delayPressIn={0}
            onPressOut={() => {
                animateScale(1);
                onPress();
            }}
            delayPressOut={110}>
            <Animated.View style={[RoundButtonStyle.container, { transform: [{ scale }] }]}>
                <FontAwesome name={name} size={size} color={color} />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}
