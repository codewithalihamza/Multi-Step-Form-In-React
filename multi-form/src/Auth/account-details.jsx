import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormInput,FormRadioGroup } from './form-components';
import { userNameValidator, emailValidator, middleName, LastName, requiredValidator } from './validators';
import {  genders } from './data'
export const AccountDetails = <div>
    <Field key={'FirstName'} id={'FirstName'} name={'FirstName'} label={'First Name'} component={FormInput} validator={userNameValidator} />
    <Field key={'Middlename'} id={'Middlename'} name={'Middlename'} label={'Middle Name'} component={FormInput} validator={middleName} />
    <Field key={'LastName'} id={'LastName'} name={'LastName'} label={'Last Name'} component={FormInput} validator={LastName} />
    <Field key={'gender'} id={'gender'} name={'gender'} label={'Gender'} layout={'horizontal'} component={FormRadioGroup} data={genders}  validator={requiredValidator} />
    <Field key={'email'} id={'email'} name={'email'} label={'Email'} hint={'Hint: Enter your personal email address.'} type={'email'} component={FormInput} validator={emailValidator} />
  </div>;