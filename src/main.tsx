import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NewReport } from "./pages/NewReport";
import { Dashboard } from "./pages/Dashboard";
import { History } from "./pages/History";
import { Admin } from "./pages/Admin";

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<NewReport />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<div>That page does not exist</div>} />
    </Routes> 
  </HashRouter>
);
