import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VaccancyPage } from "./components/VaccancyPage";
import { VaccancyDetails } from "./components/VaccancyDetails";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<VaccancyPage />}></Route>
          <Route path="/vaccancy-details/:id" element={<VaccancyDetails />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;