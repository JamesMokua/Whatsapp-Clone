import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather } from '@expo/vector-icons';
import { Image,StyleSheet } from 'react-native';

const SignInForm = props => {

    return (
            <>
            <Image source={require('../assets/images/signin.png')}style={styles.signinImage} />
                <Input
                    label="Email"
                    icon="mail"
                    iconPack={Feather} />

                <Input
                    label="Password"
                    icon="lock"
                    iconPack={Feather} />
                
                <SubmitButton
                    title="Sign in"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}/>
            </>
    )
};
const styles = StyleSheet.create({
    signinImage: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: 50
    }
})
export default SignInForm;