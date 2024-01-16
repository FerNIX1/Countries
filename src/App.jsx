import { AllCountryes } from "./components/AllCountryes"
import { Routes, Route } from 'react-router-dom';
  function App() {
   
    return (
      <Routes>
        <Route path="/" element={<AllCountryes/>} />
      </Routes>
    )
  }

  export default App
