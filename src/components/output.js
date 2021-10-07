export default function Output({ result }) {
  return (
    <ul>
      <li>
        Department :-{" "}
        <span style={{ textTransform: "capitalize" }}>
          {result.department ? result.department : "Nill"}
        </span>
      </li>
      <li>
        Course Number :- {result.courseNumber ? result.courseNumber : "Nill"}
      </li>
      <li>Year :- {result.year ? result.year : "Nill"}</li>
      <li>
        Semester :-{" "}
        <span style={{ textTransform: "capitalize" }}>
          {result.semester ? result.semester : "Nill"}
        </span>
      </li>
    </ul>
  );
}
