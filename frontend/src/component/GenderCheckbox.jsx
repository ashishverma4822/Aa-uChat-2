import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label
          className={`label flex gap-2 cursor-pointer ${
            selectedGender === "male" ? "text-neon-blue" : "text-white"
          }`}
        >
          <span className="label-text">Male</span>

          <input
            type="checkbox"
            className={`checkbox border-neon-blue text-neon-blue ${
              selectedGender === "male" ? "bg-neon-blue" : ""
            }`}
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label flex gap-2 cursor-pointer ${
            selectedGender === "female" ? "text-neon-blue" : "text-white"
          }`}
        >
          <span className="label-text">Female</span>

          <input
            type="checkbox"
            className={`checkbox border-neon-blue text-neon-blue ${
              selectedGender === "female" ? "bg-neon-blue" : ""
            }`}
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;