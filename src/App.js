import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

//paths

import Home from './admin/administrative-panel/Home';
import AdminPanel from './admin/administrative-panel/AdminPanel';
import AccountsPanel from './admin/administrative-panel/AccountsPanel';
import NursePanel from './admin/administrative-panel/NursePanel';
import DoctorsPanel from './admin/administrative-panel/DoctorsPanel';
import StaffPanel from './admin/administrative-panel/StaffPanel';
import StockPanel from './admin/administrative-panel/StockPanel';

//paths


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/AdminPanel" element={<AdminPanel/>} />
        <Route path="/AccountsPanel" element={<AccountsPanel/>} />
        <Route path="/NursePanel" element={<NursePanel/>} />
        <Route path="/DoctorsPanel" element={<DoctorsPanel />} />
        <Route path="/StaffPanel" element={<StaffPanel/>} />
        <Route path="/StockPanel" element={<StockPanel/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
