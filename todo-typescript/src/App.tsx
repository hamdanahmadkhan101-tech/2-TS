import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <h1>Todo React + Typescript</h1>
        <AddTodo />
        <Todos />
      </main>
    </>
  );
}

export default App;
