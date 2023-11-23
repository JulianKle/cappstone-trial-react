// Formular.js
import React from "react";
import styled from "styled-components";

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
  flex: 0 0 48%; /* Zwei Eingabefelder nebeneinander */
  margin-bottom: 16px;

  label {
    margin-bottom: 8px;
    font-size: 18px;
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
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleNewAssessment(data);
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

      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  );
}
