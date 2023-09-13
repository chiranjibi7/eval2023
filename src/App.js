import { WithdrawalMethod,CardInformation } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<WithdrawalMethod/>}/>
        <Route path="/cardinfo" element={<CardInformation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
