import React, { useState } from "react";
import { Field } from "@progress/kendo-react-form";
import { FormTextArea, FormInput } from "./form-components";
import {
  home,
  attorneyFirstName,
  attorneyLastName,
  attorneyFirmName,
  emailValidator
} from "./validators";
function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="text-start mt-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="Home"
          checked={selectedOption === "Home"}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="Home">
          Home
        </label>
      </div>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="radio"
          value="Attorney"
          checked={selectedOption === "Attorney"}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="Attorney">
          Attorney
        </label>
      </div>

      {selectedOption === "Home" ? (
        <>
          <Field
            key={"about"}
            id={"about"}
            name={"about"}
            label={"Where in Home?"}
            validator={home}
            component={FormTextArea}
          />
        </>
      ) : selectedOption === "Attorney" ?
      (
        <>
          <Field
            key={"attorneyFirstName"}
            id={"attorneyFirstName"}
            name={"attorneyFirstName"}
            label={"Attorney's First Name"}
            validator={attorneyFirstName}
            component={FormInput}
          />
          <Field
            key={"attorneyLastName"}
            id={"attorneyLastName"}
            name={"attorneyLastName"}
            label={"Attorney's Last Name"}
            validator={attorneyLastName}
            component={FormInput}
          />
          <Field
            key={"attorneyFirmName"}
            id={"attorneyFirmName"}
            name={"attorneyFirmName"}
            label={"Attorney's Firm Name"}
            validator={attorneyFirmName}
            component={FormInput}
          />
          <Field
            key={"Email"}
            id={"Email"}
            name={"Email"}
            label={"Attorney email"}
            hint={"Hint: Enter your personal email address."}
            type={"email"}
            component={FormInput}
            validator={emailValidator}
          />
        </>
      ): (
        <>
        </>
      )
    
    }
    </div>
  );
}

export default Home;
