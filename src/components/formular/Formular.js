// Formular.js
import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: #61dafb;
`;

const FormField = styled.div`
  margin-bottom: 24px;

  label {
    margin-bottom: 8px;
    font-size: 18px;
    display: block;
  }

  .group-label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
    border-bottom: 2px solid #61dafb;
    padding-bottom: 8px;
  }

  .checkbox-group {
    margin-bottom: 16px;
  }

  .checkbox-items {
    display: flex;
    flex-wrap: wrap;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  input[type="checkbox"] {
    width: auto;
    margin-right: 8px;
  }

  .checkbox-label {
    font-size: 16px;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 2px solid #61dafb;
    border-radius: 4px;
    background-color: #282c34;
    color: #61dafb;
    outline: none;

    .group-label {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
      border-bottom: 2px solid #61dafb;
      padding-bottom: 8px;
    }

    &:focus {
      border-color: #38a169;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  font-size: 18px;
  background-color: #61dafb;
  color: #282c34;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #38a169;
  }
`;

export function Formular({ handleNewAssessment }) {
  const [handleCheckBox, setHandleCheckbox] = useState({
    cognitiveBehavior: false,
    socialScoring: false,
    biometricIdentification: false,
    useUnderSafetyRegulation: false,
    useInCertainArea: false,
    useGenAI: false,
    noneAboveApplies: false,
  });

  function handleCheckboxChange(checkboxName) {
    setHandleCheckbox({
      ...handleCheckBox,
      [checkboxName]: !handleCheckBox[checkboxName],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const updatedData = {
      ...data,
      cognitiveBehavior: handleCheckBox.cognitiveBehavior,
      socialScoring: handleCheckBox.socialScoring,
      biometricIdentification: handleCheckBox.biometricIdentification,
      useUnderSafetyRegulation: handleCheckBox.useUnderSafetyRegulation,
      useInCertainArea: handleCheckBox.useInCertainArea,
      useGenAI: handleCheckBox.useGenAI,
      noneAboveApplies: handleCheckBox.noneAboveApplies,
    };

    handleNewAssessment(updatedData);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormField>
        <label htmlFor="title">Assessment Title:</label>
        <input type="text" name="title" />
      </FormField>
      <FormField>
        <label htmlFor="editor">Editor:</label>
        <input type="text" name="editor" />
      </FormField>
      <FormField>
        <label htmlFor="company">Company:</label>
        <input type="text" name="company" />
      </FormField>
      <FormField>
        <label htmlFor="status">Status:</label>
        <input type="text" name="status" />
      </FormField>

      <FormField>
        <div>
          <div className="group-label">Unacceptable Risk</div>
          <label htmlFor="cognitiveBehavior">
            Is the system capable of cognitive behavioral manipulation of
            individuals or certain vulnerable groups (e.g. children)?
          </label>
          <input
            id="cognitiveBehavior"
            name="cognitiveBehavior"
            type="checkbox"
            checked={handleCheckBox.cognitiveBehavior}
            onChange={() => handleCheckboxChange("cognitiveBehavior")}
          />
          <label htmlFor="socialScoring">
            Is the system able to classify people on the basis of behavior,
            socio-economic status and personal characteristics (social scoring)?
          </label>
          <input
            id="socialScoring"
            name="socialScoring"
            type="checkbox"
            checked={handleCheckBox.socialScoring}
            onChange={() => handleCheckboxChange("socialScoring")}
          />
          <label htmlFor="biometricIdentification">
            Is the system capable of performing real-time remote biometric
            identification systems, for example facial recognition?
          </label>
          <input
            id="biometricIdentification"
            name="biometricIdentification"
            type="checkbox"
            checked={handleCheckBox.biometricIdentification}
            onChange={() => handleCheckboxChange("biometricIdentification")}
          />
        </div>

        <div>
          <div className="group-label">High Risk</div>
          <label htmlFor="useUnderSafetyRegulation">
            Will the system be used in products that fall under EU product
            safety regulations? This includes toys, aviation, vehicles, medical
            devices and elevators.
          </label>
          <input
            id="useUnderSafetyRegulation"
            name="useUnderSafetyRegulation"
            type="checkbox"
            checked={handleCheckBox.useUnderSafetyRegulation}
            onChange={() => handleCheckboxChange("useUnderSafetyRegulation")}
          />{" "}
          <label htmlFor="useInCertainArea">
            Is the system used in one of the following areas? - Biometric
            identification and categorization of natural persons; - management
            and operation of critical infrastructure; - Education and training;
            - Employment, management of employees and access to self-employment;
            - access to and use of essential private and public services and
            benefits; - Law enforcement; - Migration, asylum and border control
            management; - Support in the interpretation and application of laws.
          </label>
          <input
            id="useInCertainArea"
            name="useInCertainArea"
            type="checkbox"
            checked={handleCheckBox.useInCertainArea}
            onChange={() => handleCheckboxChange("useInCertainArea")}
          />{" "}
        </div>

        <div>
          <div className="group-label">GenAI</div>
          <label htmlFor="useGenAI">
            Will the system use or be based on Generative Foundation models such
            as ChatGPT?
          </label>
          <input
            id="useGenAI"
            name="useGenAI"
            type="checkbox"
            checked={handleCheckBox.useGenAI}
            onChange={() => handleCheckboxChange("useGenAI")}
          />{" "}
        </div>

        <div>
          <div className="group-label">Low Risk</div>
          <label htmlFor="noneAboveApplies">None of the above applies.</label>
          <input
            id="noneAboveApplies"
            name="noneAboveApplies"
            type="checkbox"
            checked={handleCheckBox.noneAboveApplies}
            onChange={() => handleCheckboxChange("noneAboveApplies")}
          />{" "}
        </div>
      </FormField>
      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  );
}
