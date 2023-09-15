import { WithdrawalMethod,CardInformation, VisaDirectWithdrawal, Confirmation } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<WithdrawalMethod/>}/>
        <Route path="/cardinfo" element={<CardInformation/>}/>
        <Route path="/visadirectwithdrawal" element={<VisaDirectWithdrawal/>}/>
        <Route path="/confirmation" element={<Confirmation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
