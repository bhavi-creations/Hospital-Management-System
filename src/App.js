import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './admin/administrative-panel/Home';
import Doctors from './admin/administrative-panel/Doctors';
import Emergency from './admin/administrative-panel/Emergency';
import Lab from './admin/administrative-panel/Lab';
import Pharmacy from './admin/administrative-panel/Pharmacy';
import Staff from './admin/administrative-panel/Staff';
import HospitalInformation from './admin/administrative-panel/HospitalInformation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/HospitalInformation" element={<HospitalInformation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
