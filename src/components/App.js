import React, { useMemo, useState } from "react";
import Skill from "./skills";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, []);

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  function expensiveCalculation(num) {
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }

  const handleAddSkills = () => {
    setSkills([...skills, newSkill]);
  };

  return (
    <>
      <h1>My todos</h1>
      <p>{text}</p>
      <button onClick={() => setText("New Todo")}>Add Todo</button>
      <hr />

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <h1>Expensive Calculation</h1>
      <p>{calculation}</p>
      <hr />

      <h1>React.memo</h1>
      <input onInput={(e) => setNewSkill(e.target.value)} />
      <button onClick={handleAddSkills}>Add Skill</button>

      <div>{<Skill allSkills={skills} />}</div>
    </>
  );
}

export default App;
