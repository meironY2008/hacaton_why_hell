import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <TopBar />
      <div style={{ marginTop: 120 }}>
        <NavBar value={value}setValue={setValue} />
        {value == 1 ? <Form /> : <Login />}
      </div>
    </>
  );
}

export default App;
