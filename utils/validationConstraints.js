import { validate } from 'validate.js';
export const validateString = (  inputId, InputValue) => {
    const constraints = {
        presence: {
            allowEmpty: false
        }
    };
    if(InputValue !== "") {
         constraints.format = {
            pattern: "[a-z]+",
            flags: "i",
            message: "value can  only contain letters"
         }
    }
    const validationResult = validate({ [inputId]: InputValue}, {[inputId]: constraints})
    return validationResult && validationResult[inputId];
}
export const validateEmail  = (  inputId, InputValue) => {
    const constraints = {
        presence: {
            allowEmpty: false
        }
    };
    if(InputValue !== "") {
         constraints.email = true
    }
    const validationResult = validate({ [inputId]: InputValue}, {[inputId]: constraints})
    return validationResult && validationResult[inputId];
}
export const validatePassword  = (  inputId, InputValue) => {
    const constraints = {
        presence: {
            allowEmpty: false
        }
    };
    if(InputValue !== "") {
         constraints.length = {
            minimum: 6,
            message: "Must be at least 6 characters"
         }
    }
    const validationResult = validate({ [inputId]: InputValue}, {[inputId]: constraints})
    return validationResult && validationResult[inputId];
}
