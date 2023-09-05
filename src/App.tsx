import { useState } from 'react'
import Nav from './components/Nav/Nav'
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState<number>(1)

  const setSection = (id: number) => {
    setActiveSection(id);
  };

  return (
    <>
      <Nav activeSection={activeSection} setSection={setSection} />
    </>
  );
}

export default App;
