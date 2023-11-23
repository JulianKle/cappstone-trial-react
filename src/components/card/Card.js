// Card.js
import React from "react";
import styled from "styled-components";

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border: 2px solid #61dafb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #282c34;
  color: #61dafb;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
    font-size: 18px;
  }

  button {
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
  }
`;

export function Card({ assessments, onDeleteAssessment }) {
  return (
    <>
      {assessments.map((assessment) => (
        <CardSection key={assessment.id}>
          <h3>{assessment.title}</h3>
          <ul>
            <li>{assessment.editor}</li>
            <li>{assessment.company}</li>
          </ul>
          <button onClick={() => onDeleteAssessment(assessment.id)}>X</button>
        </CardSection>
      ))}
    </>
  );
}

export default Card;
