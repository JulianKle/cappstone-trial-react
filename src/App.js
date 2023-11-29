import { useState } from "react";
import { Formular } from "./components/formular/Formular.js";
import { Card } from "./components/card/Card.js";
import { uid } from "uid";
import { SearchAssessment } from "./components/searchAssessment/SearchAssessment";

function App() {
  const [assessments, setAssessments] = useState([]);
  const [filteredAssessment, setFilteredAssessments] = useState([]);
  const [filterNoYes, setFilterNoYes] = useState(true);
  const [editingAssessment, setEditingAssessment] = useState(null);

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
    setFilterNoYes(!filterNoYes);
  }

  function noFilterTrue() {
    setFilterNoYes(true);
  }

  function handleEditAssessment(id) {
    // Finde das zu bearbeitende Assessment anhand der ID
    const assessmentToEdit = assessments.find(
      (assessment) => assessment.id === id
    );

    // Setze das zu bearbeitende Assessment als Zustand für die Bearbeitung
    setEditingAssessment(assessmentToEdit);
  }

  function handleUpdateAssessment(updatedData) {
    // Aktualisiere das zu bearbeitende Assessment
    const updatedAssessments = assessments.map((assessment) =>
      assessment.id === editingAssessment.id
        ? { ...assessment, ...updatedData }
        : assessment
    );

    // Setze den Zustand zurück
    setEditingAssessment(null);

    // Aktualisiere den Zustand mit den neuen Daten
    setAssessments(updatedAssessments);
  }

  return (
    <>
      <SearchAssessment
        onFilter={filterAssessment}
        onSearch={noFilterFalse}
        onOverview={noFilterTrue}
      />
      {!editingAssessment && (
        <Formular handleNewAssessment={handleNewAssessment} />
      )}
      {editingAssessment ? (
        <Formular
          handleNewAssessment={handleUpdateAssessment}
          initialData={editingAssessment}
        />
      ) : filterNoYes ? (
        <Card
          assessments={assessments}
          onDeleteAssessment={handleDeleteAssessment}
          onEditAssessment={handleEditAssessment}
        />
      ) : (
        <Card
          assessments={filteredAssessment}
          onDeleteAssessment={handleDeleteAssessment}
          onEditAssessment={handleEditAssessment}
        />
      )}
    </>
  );
}

export default App;
