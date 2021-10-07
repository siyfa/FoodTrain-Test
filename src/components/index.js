import { useState } from "react";
//helpers
import {
  matchString,
  hasSpace,
  notNumber,
  testSemester,
  printSemester,
} from "../helper";
//components
import Output from "./output";

export default function Work() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});
  const [error, setError] = useState("");

  //check input data handler
  const checkHandler = () => {
    //Confirm input is not empty
    if (input.length < 1) {
      setError("Please input your data");
    } else {
      //destructuring into outputs and limit them to four
      let [output1, output2, output3, output4] = matchString(input, 4);
      //ensuring each output isn't undefined
      if (typeof output1 === "undefined") {
        setError("No Department number is given");
      } else if (typeof output2 === "undefined") {
        setError("No course number is given");
      } else if (typeof output3 === "undefined") {
        setError("No year number is given");
      } else if (typeof output4 === "undefined") {
        setError("No semester input is given");
      }
      // ensuring output is the data type of the data needed
      else if (!notNumber(output1)) {
        setError("Department code must be alpabets");
      } else if (notNumber(output2)) {
        setError("Course number must be digits");
      } else if (
        !notNumber(output3) &&
        output3.length !== 4 &&
        output3.length !== 2
      ) {
        setError("Year input must be two or four digits (E.g 19, 2019)");
      } else if (
        !notNumber(output4) &&
        output4.length !== 4 &&
        output4.length !== 2
      ) {
        setError("Year input must be two or four digits (E.g 19, 2019)");
      } else if (!notNumber(output3) && !notNumber(output4)) {
        setError("Semester input must be in alphabets");
      }
      //checking for white space in string
      else if (!hasSpace(input)) {
        setError("A space is needed after the course number");
      } else {
        //saving semester to a variable then validate
        let semesterOutput = !notNumber(output4) ? output3 : output4;
        if (!testSemester(semesterOutput)) {
          setError(
            "Ensure you input the correct semester season (E.g f,fall,Winter,S)"
          );
        } else {
          const outputs = {
            department: output1,
            courseNumber: output2,
            year: isNaN(output3) ? output4 : output3,
            semester: printSemester(semesterOutput)
              ? printSemester(semesterOutput)
              : semesterOutput,
          };
          setResult(outputs);
          setError("");
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="errorMessage">{error && <p>{error}</p>}</div>
      <div className="inputData">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your course code"
        />
        <button onClick={checkHandler}>Check</button>
      </div>
      <div className="output">
        <h3>Course Details</h3>
        <div className="display">
          <Output result={result} />
        </div>
      </div>
    </div>
  );
}
