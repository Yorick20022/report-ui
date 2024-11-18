import { useLocation } from "react-router-dom";
import {useEffect} from "react"

export function DebugRoutes() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current Location:", location);
  }, [location]);

  return null; // This component doesn't render anything
}