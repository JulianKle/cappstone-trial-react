// SearchAssessment.js
import React from "react";
import styled from "styled-components";

const StyledSearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: #61dafb;
`;

const SearchField = styled.div`
  flex: 0 0 48%; /* Zwei Elemente nebeneinander */
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

const SearchButton = styled.button`
  flex: 0 0 48%; /* Zwei Elemente nebeneinander */
  margin-top: 16px;
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

const BackToOverviewButton = styled.button`
  width: 100%;
  margin-top: 16px;
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

export function SearchAssessment({ onFilter, onSearch, onOverview }) {
  function filterName(event) {
    event.preventDefault();
    onFilter(event.target.elements.search.value);
  }

  return (
    <StyledSearchForm onSubmit={filterName}>
      <SearchField>
        <label htmlFor="search">Search for Assessment Title:</label>
        <input type="text" name="search" />
      </SearchField>

      <SearchButton type="submit" onClick={onSearch}>
        Search
      </SearchButton>
      <BackToOverviewButton onClick={onOverview}>
        Back to overview
      </BackToOverviewButton>
    </StyledSearchForm>
  );
}
