import "./App.css";
import { useState } from "react";
import { Formular } from "./components/formular/Formular.js";
import { Card } from "./components/card/Card.js";
import { uid } from "uid";
import { SearchAssessment } from "./components/searchAssessment/SearchAssessment";

function App() {
  const [assessments, setAssessments] = useState([]);
  const [filter, setFilter] = useState([]);
  const [noFilter, setNoFilter] = useState(true);

  function handleNewAssessment(newAssessment) {
    const updatedAssessment = [{ id: uid(), ...newAssessment }, ...assessments];
    console.log(updatedAssessment);
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
    setFilter(
      assessments.filter((assessment) => {
        return assessment.title === filterFor;
      })
    );
  }

  function noFilterFalse() {
    setNoFilter(false);
  }

  function noFilterTrue() {
    setNoFilter(true);
  }

  console.log(assessments);

  return (
    <>
      <SearchAssessment
        onFilter={filterAssessment}
        onSearch={noFilterFalse}
        onOverview={noFilterTrue}
      />
      <Formular handleNewAssessment={handleNewAssessment} />
      {noFilter ? (
        <Card
          assessments={assessments}
          onDeleteAssessment={handleDeleteAssessment}
        />
      ) : (
        filter.map((filteredAssessment) => (
          <Card
            key={filteredAssessment.id}
            assessments={[filteredAssessment]}
            onDeleteAssessment={handleDeleteAssessment}
          />
        ))
      )}
    </>
  );
}

export default App;
