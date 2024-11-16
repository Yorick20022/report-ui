import '../index.css'
import React from 'react'
import { Card } from "../components/ui/card"
import { ReportSidebar } from "../components/report-sidebar"
import { ReportCard } from "../components/report-card"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const NewReport = () => {

  return (
    <Router>
      <div className="dark h-screen w-full flex items-center justify-center">
        <Card className="w-3/6 h-3/5 relative flex overflow-hidden">
          <ReportSidebar />
          <Routes>
            <Route path='/new-report' element={<ReportCard />}>
            </Route>
          </Routes>
        </Card>
      </div>
    </Router>
  )
};

export default NewReport;