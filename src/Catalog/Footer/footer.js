import React from 'react';
import CardExtended from '../Card/cardExtended';
import { Container, RoundButton, RoundButtonProfile, IconX, IconHeart, IconProfile } from './footerStyle';
import { useNavigation } from '@react-navigation/native';

export default function Footer({ handleLike, handleNo, handleCenter }) {
    return (
        <Container>
            <RoundButton onPress={handleNo}>
                <IconX />
            </RoundButton>
            <RoundButtonProfile 
            onPress={handleCenter}>
                <IconProfile />
            </RoundButtonProfile>
            <RoundButton onPress={handleLike}>
                <IconHeart />
            </RoundButton>
        </Container>
    );
}