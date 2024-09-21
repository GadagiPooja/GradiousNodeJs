import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddRecord from './components/AddRecord';
import EditRecord from './components/EditRecord';
import ViewRecord from './components/ViewRecord';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecord />} />
        <Route path="/edit/:id" element={<EditRecord />} />
        <Route path="/view/:id" element={<ViewRecord />} />
      </Routes>
    </Router>
  );
}

export default App;
// export default App;
