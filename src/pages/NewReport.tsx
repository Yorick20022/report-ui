import '../index.css'
import { Card } from "../components/ui/card"
import { ReportSidebar } from "../components/report-sidebar"
import { ReportCard } from "../components/report-card"
import { useState, useCallback, useEffect } from 'react';
import { useNuiEvent } from "../utils/useNuiEvents";
import { fetchNui } from '../utils/fetchNui';

export const NewReport = () => {

  const [nui, setNui] = useState(false) // This makes sure that the NUI is false on startup of the resource

  useNuiEvent("setOpen", setNui)

  const escFunction = useCallback((event: { key: string; }) => {
    if (event.key === "Escape") {
      setNui(false)
      fetchNui("closeMenu")
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return nui? (
      <div className="dark h-screen w-full flex items-center justify-center">
        <Card className="w-3/6 h-3/5 relative flex overflow-hidden">
          <ReportSidebar />
          <ReportCard />
        </Card>
      </div>
  ): null
};