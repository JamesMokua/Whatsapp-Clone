import React, { useCallback, useReducer,useState } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather } from '@expo/vector-icons';
import { Image,StyleSheet } from 'react-native';
import { validateEmail, validatePassword, validateString } from '../utils/validationConstraints';
import { validateInput } from '../utils/actions/formActions';
import { formReducer } from '../utils/reducer/formReducer';
 const initialState = {
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    }
const SignInForm = props => {
   const[password,setPassword] = useState('')
    const[formState, dispatchFormState] = useReducer(formReducer,initialState);
    const inputChangeHandler = useCallback((inputId, InputValue) => {
       const result = validateInput(inputId,InputValue);
       dispatchFormState({inputId, validationResult: result})
      }, [dispatchFormState])
    return (
            <>
            <Image source={require('../assets/images/signin.png')}style={styles.signinImage} />
                <Input
                    id="email"
                    label="Email"
                    icon="mail"
                    autoCapitalize="none"
                    keyboardType="email-address"  
                    onInputChanged={inputChangeHandler} 
                    errorText = {formState.inputValidities["email"]}
                    iconPack={Feather} />

                <Input
                    id = "password"
                    label="Password"
                    icon="lock"
                    autoCapitalize="none"
                    secureTextEntry
                    errorText = {formState.inputValidities["password"]}
                    onInputChanged={inputChangeHandler}
                    iconPack={Feather} />
                
                <SubmitButton
                    title="Sign in"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid  }
                    />
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