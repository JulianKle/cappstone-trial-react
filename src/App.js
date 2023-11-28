import { useState } from "react";
import { Formular } from "./components/formular/Formular.js";
import { Card } from "./components/card/Card.js";
import { uid } from "uid";
import { SearchAssessment } from "./components/searchAssessment/SearchAssessment";
import { Checkbox } from "./components/RiskAssessment/RiskAssessment.js";

function App() {
  const [assessments, setAssessments] = useState([]);
  const [filteredAssessment, setFilteredAssessments] = useState([]);
  const [filterNoYes, setFilterNoYes] = useState(true);

  function handleNewAssessment(newAssessment) {
    const updatedAssessment = [{ id: uid(), ...newAssessment }, ...assessments];
    setAssessments(updatedAssessment);
  }

  function handleDeleteAssessment(id) {
    setAssessments(
      assessments.filter((assessment) => {
        return assessment.id !== id;
      })
    );
  }

  function filterAssessment(filterFor) {
    setFilteredAssessments(
      assessments.filter((assessment) => {
        return assessment.title === filterFor;
      })
    );
  }

  function noFilterFalse() {
    setFilterNoYes(false);
  }

  function noFilterTrue() {
    setFilterNoYes(true);
  }

  return (
    <>
      <SearchAssessment
        onFilter={filterAssessment}
        onSearch={noFilterFalse}
        onOverview={noFilterTrue}
      />
      <Formular handleNewAssessment={handleNewAssessment} />
      {filterNoYes ? (
        <Card
          assessments={assessments}
          onDeleteAssessment={handleDeleteAssessment}
        />
      ) : (
        filteredAssessment.map((searchedAssessment) => (
          <Card
            key={searchedAssessment.id}
            assessments={[searchedAssessment]}
            onDeleteAssessment={handleDeleteAssessment}
          />
        ))
      )}
    </>
  );
}

export default App;
