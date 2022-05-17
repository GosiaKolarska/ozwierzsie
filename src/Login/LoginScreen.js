import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native';
// import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    // const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation();
    return (
        <View>
            <Text>{loading ? "Loading..." : "Login to the app"}</Text>
            // <Button title="login" onPress={signInWithGoogle} />
        </View>
    )
}

export default LoginScreen