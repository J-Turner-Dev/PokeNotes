import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import PokemonPage from "./pages/PokemonPage";
import PokemonListPage from "./pages/PokemonListPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/pokemon/" exact element={<PokemonListPage />} />
            <Route path="/pokemon/:id" element={<PokemonPage />} />
            <Route path="/search/" exact element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
