import React from "react";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre
          disabled
          style={{
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            width: "89%",
            margin: "10px",
            height: "200px",
            flexWrap: "wrap'",
            borderRadius: "5px",
          }}
        >
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre
          disabled
          style={{
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            width: "89%",
            margin: "10px",
            height: "200px",
            flexWrap: "wrap'",
            borderRadius: "5px",
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            wordWrap: "break-word"
          }}
        >
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre
          disabled
          style={{
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            width: "89%",
            margin: "10px",
            height: "200px",
            flexWrap: "wrap'",
            borderRadius: "5px",
          }}
        >
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre
          disabled
          style={{
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            width: "89%",
            margin: "10px",
            height: "200px",
            flexWrap: "wrap'",
            borderRadius: "5px",
          }}
        >
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <div>
      <h3 style={{ margin: "10px" }}>Output</h3>
      <div>
        {outputDetails ? (
          <>{getOutput()}</>
        ) : (
          <pre
            disabled
            style={{
              border: "1px solid black",
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              width: "89%",
              margin: "10px",
              height: "200px",
              flexWrap: "wrap'",
              borderRadius: "5px",
            }}
          >
            
          </pre>
        )}
      </div>
    </div>
  );
};

export default OutputWindow;
