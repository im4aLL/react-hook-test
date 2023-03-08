import './App.scss';
import Todo from './components/Todo/Todo';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import { Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./context/Theme.context";

function App() {
  return (
    <ThemeContextProvider>
      <h1>React test</h1>
      <Menu />
      
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
