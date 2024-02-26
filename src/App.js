import FileArea from "./components/fileArea";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<FileArea />} />
      </Routes>
    </Router>
  );
}

export default App;
