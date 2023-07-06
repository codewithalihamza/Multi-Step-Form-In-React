import { getter } from '@progress/kendo-react-common';
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
export const termsValidator = value => value ? "" : "It's required to agree with Terms and Conditions.";
export const emailValidator = value => !value ? "Email field is required." : emailRegex.test(value) ? "" : "Email is not in a valid format.";
export const userNameValidator = value => !value ? "First Name is required" : value.length < 2 ? "First Name should be at least 2 characters long." : "";
export const middleName = value => !value ? "Middlename is required" : value.length < 2 ? "Middlename should be at least 2 characters long." : "";
export const LastName = value => !value ? "LastName is required" : value.length < 2 ? "LastName should be at least 2 characters long." : "";
export const address1 = value => !value ? "Address1 is required" : value.length < 2 ? "Address1 should be at least 2 characters long." : "";
export const city = value => !value ? "City Name is required" : value.length < 2 ? "City Name should be at least 2 characters long." : "";
export const zipCode = value => !value ? "Zipcode is required" : value.length < 2 ? "Zipcode should be at least 2 characters long." : "";
export const State = value => !value ? "State is required" : value.length < 2 ? "State should be at least 2 characters long." : "";
export const home = value => !value ? "Home is required" : value.length < 2 ? "Home should be at least 2 characters long." : "";
export const attorneyFirstName = value => !value ? "Attorney First Name is required" : value.length < 2 ? "Attorney First Name should be at least 2 characters long." : "";
export const attorneyLastName = value => !value ? "Attorney Last Name is required" : value.length < 2 ? "Attorney Last Name should be at least 2 characters long." : "";
export const attorneyFirmName = value => !value ? "Attorney Firm Name is required" : value.length < 2 ? "Attorney Firm Name should be at least 2 characters long." : "";

export const requiredValidator = value => value ? "" : "Error: This field is required.";
const userNameGetter = getter('username');
const emailGetter = getter('email');
export const formValidator = values => {
  const userName = userNameGetter(values);
  const emailValue = emailGetter(values);
  if (userName && emailValue && emailRegex.test(emailValue)) {
    return {};
  }
  return {
    VALIDATION_SUMMARY: 'Please fill in the following fields.',
    ['username']: !userName ? 'User Name is required.' : '',
    ['email']: emailValue && emailRegex.test(emailValue) ? '' : 'Email is required and should be in a valid format.'
  };
};