import React, { useCallback, useReducer } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image,StyleSheet } from 'react-native';
import { validateInput } from '../utils/actions/formActions';
import { formReducer } from '../utils/reducer/formReducer';

const initialState = {
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false
    },
    formIsValid: false
}
const SignUpForm = props => {
    const[formState, dispatchFormState] = useReducer(formReducer,initialState);
    const inputChangeHandler = useCallback((inputId, InputValue) => {
       const result = validateInput(inputId,InputValue);
       dispatchFormState({inputId, validationResult: result})
      }, [dispatchFormState])
    
    return (
            <>
            <Image source={require('../assets/images/chat.png')}style={styles.signupImage} />
                <Input
                    id="firstName"
                    label="First name"
                    icon="user-o"
                    autoCapitalize="none"
                    iconPack={FontAwesome}
                    errorText = {formState.inputValidities["firstName"]}
                    onInputChanged={inputChangeHandler}
                     />

                <Input
                    id="lastName"
                    label="Last name"
                    icon="user-o"
                    autoCapitalize="none"
                    iconPack={FontAwesome}
                    errorText = {formState.inputValidities["lastName"]}
                    onInputChanged={inputChangeHandler} />

                <Input
                    id="email"
                    label="Email"
                    icon="mail"
                    iconPack={Feather} 
                    keyboardType="email-address"
                    autoCapitalize="none"
                    errorText = {formState.inputValidities["email"]}
                    onInputChanged={inputChangeHandler}/>

                <Input
                    id="password"
                    label="Password"
                    icon="lock"
                    autoCapitalize="none"
                    secureTextEntry
                    iconPack={Feather}
                    errorText = {formState.inputValidities["password"]}
                    onInputChanged={inputChangeHandler} />
                
                <SubmitButton
                    title="Sign up"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20,   }}
                    disabled={!formState.formIsValid  }
                    />
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