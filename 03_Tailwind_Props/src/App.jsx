import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className=" mb-4">Tailwind</h1>
      <Card userName="Ish" btnText="Don't CLick Me ->" />
      <Card userName="Gunn" btnText="CLick Me ->" />
    </>
  );
}

export default App;
