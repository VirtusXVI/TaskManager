import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [projects, setProjects] = useState<Array<object>>([
    {
      name: "Task Manager",
    },
    {
      name: "TODO List",
    },
    {
      name: "Weather",
    },
    {
      name: "Calculator",
    },
  ]);

  const setSection = (id: number) => {
    setActiveSection(id);
  };

  return (
    <>
      <Nav activeSection={activeSection} setSection={setSection} />
      <Projects projects={projects}/>
    </>
  );
}

export default App;
