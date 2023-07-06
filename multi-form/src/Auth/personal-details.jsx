import * as React from "react";
import { Field } from "@progress/kendo-react-form";
import {
  FormInput
} from "./form-components";
import {  address1, city, zipCode, State } from "./validators";

import Home from "./Home";
export const PersonalDetails =   (

  <div>

    <Field
      key={"Address1"}
      id={"Address1"}
      name={"Address1"}
      label={"Address1"}
      component={FormInput}
      validator={address1}
    />
    <Field
      key={"Address2"}
      id={"Address2"}
      name={"Address2"}
      label={"Address2"}
      component={FormInput}
      optional={true}
    />
    <Field
      key={"City"}
      id={"City"}
      name={"City"}
      label={"City"}
      component={FormInput}
      validator={city}
    />
    <Field
      key={"Zipcode"}
      id={"Zipcode"}
      name={"Zipcode"}
      label={"Zipcode"}
      component={FormInput}
      validator={zipCode}
    />
    <Field
      key={"State"}
      id={"State"}
      name={"State"}
      label={"State"}
      component={FormInput}
      validator={State}
    />

<Home/>

    
  </div>
);
