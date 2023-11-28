import React, { useState } from "react";

export function Checkbox() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    });
  };

  console.log(checkboxes);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          checked={checkboxes.checkbox1}
          onChange={() => handleCheckboxChange("checkbox1")}
        />
        Checkbox 1
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={checkboxes.checkbox2}
          onChange={() => handleCheckboxChange("checkbox2")}
        />
        Checkbox 2
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={checkboxes.checkbox3}
          onChange={() => handleCheckboxChange("checkbox3")}
        />
        Checkbox 3
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={checkboxes.checkbox4}
          onChange={() => handleCheckboxChange("checkbox4")}
        />
        Checkbox 4
      </label>
    </form>
  );
}
