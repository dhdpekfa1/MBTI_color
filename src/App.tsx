import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
