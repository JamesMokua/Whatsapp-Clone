
import { validateEmail, validatePassword, validateString } from '../validationConstraints';
export const validateInput = (inputId, InputValue) => {
  if (inputId === "firstName" || inputId === "lastName") {
    return validateString(inputId, InputValue);
  } else if (inputId === "email") {
    return validateEmail(inputId, InputValue);
  } else if (inputId === "password") {
    return validatePassword(inputId, InputValue);
  }
};
