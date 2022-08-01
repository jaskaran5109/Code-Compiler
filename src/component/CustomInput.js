import React from "react";

export const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <div>
      <textarea
        style={{
          margin: '10px',
          width: '89%',
          padding:'10px',
          height: '70px',
          flexWrap: 'wrap',
          border:"2px solid black",
          boxShadow: '5px 6px',
          borderRadius:'5px'
        }}
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
      ></textarea>
    </div>
  );
};
