import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image,StyleSheet } from 'react-native';

const SignUpForm = props => {

    return (
            <>
            <Image source={require('../assets/images/chat.png')}style={styles.signupImage} />
                <Input
                    label="First name"
                    icon="user-o"
                    iconPack={FontAwesome} />

                <Input
                    label="Last name"
                    icon="user-o"
                    iconPack={FontAwesome} />

                <Input
                    label="Email"
                    icon="mail"
                    iconPack={Feather} />

                <Input
                    label="Password"
                    icon="lock"
                    iconPack={Feather} />
                
                <SubmitButton
                    title="Sign up"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}/>
            </>
    )
};
const styles = StyleSheet.create({
    signupImage: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
        alignSelf: 'center',
    }
})
export default SignUpForm;