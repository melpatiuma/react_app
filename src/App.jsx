import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <myContext.Provider value={{ store, setStore }}>
        <Home />
      </myContext.Provider>
    </>
  );
}

export default App;
