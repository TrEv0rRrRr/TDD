import { useState } from "react";
import Greeting from "./components/Greeting/Greeting";
import GreetingButton from "./components/Greeting/GreetingButton";

function App() {
  const [name, setName] = useState("");

  const newName = "Trevor";

  const handleClick = () => setName(newName);

  return (
    <>
      <GreetingButton handleClick={handleClick} />
      <Greeting name={name} />
    </>
  );
}

export default App;
