import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/pokemon/:id" element={<PokemonPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
