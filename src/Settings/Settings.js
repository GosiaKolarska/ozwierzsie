import React, {useContext} from 'react';
import { View, Text,Button } from 'react-native';
import {List} from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo, Header } from '../Catalog/CatalogStyle';
import AddPet from '../AddPet/addpet';
import PetsList from '../AddPet/PetsList';

export default function Settings({navigation}) {
    return (
        <SafeAreaView>
            <Header>
                <Logo source={require("../../assets/ozwierzsie_logo.png")} />
            </Header>
            <Text style={{fontSize: 30, textAlign: 'left', paddingTop: 60, paddingBottom: 20, paddingHorizontal: 20}}>Cześć Gosia</Text>
            <List.Section>
                <List.Item 
                style={{padding: 16}}
                title="Find pet"
                // title="Znajdź zwierzaka"
                left={props => <List.Icon {...props} icon={require('../../assets/icons_PNG/icon__search.png')} />}
                onPress={() => navigation.navigate('Catalog')}
                />
                <List.Item 
                style={{padding: 16}}
                title="Add pet"
                // title="Dodaj zwierzaka"
                // description="Masz zwierzaka do adopcji? Dodaj go tutaj!"
                left={props => <List.Icon {...props} icon={require('../../assets/icons_PNG/icon__plus.png')} />}
                onPress={() => navigation.navigate('AddPet')}
                />
                <List.Item 
                style={{padding: 16}}
                // title="Twoje zwierzaki dodane do adopcji"
                title="Your pets to adoption"
                // description="Zmień ustawienia lub usuń zaadoptowanego zwierzaka tutaj!"
                left={props => <List.Icon {...props} icon={require('../../assets/icons_PNG/icon__photos.png')} />}
                onPress={() => navigation.navigate('PetsList')}
                />
                <List.Item 
                style={{padding: 16}}
                title="Lorem"
                // title="Regulamin adopcji"
                left={props => <List.Icon {...props} icon={require('../../assets/icons_PNG/icon__regulamin.png')} />}
                />
                <List.Item 
                style={{padding: 16}}
                title="Account Settings"
                left={props => <List.Icon {...props} icon={require('../../assets/icons_PNG/icon__profile.png')} />}
                />
                <List.Item 
                style={{padding: 16}}
                title="Logout"
                left={props => <List.Icon {...props} icon={require('../../assets/icons_PNG/icon__logout.png')} />}
                />
            </List.Section>
        </SafeAreaView>
    )
}