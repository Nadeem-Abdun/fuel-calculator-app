import React from "react";
import { Grid } from "@mui/material";
import FuelCalculator from "./screens/FuelCalculator";
import SavedEstimations from "./screens/SavedEstimations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import packageJson from "../package.json";


function App() {

  const basename = packageJson.homepage ? new URL(packageJson.homepage).pathname : '/';

  return (
    <BrowserRouter basename={basename}>
      <Grid container xs={12} justifyContent="center" alignItems="center" sx={{ background: "linear-gradient(to right, #733872, #ca4c7c)", height: "100dvh" }}>
        <Grid item xl={4} lg={4} md={6} sm={8} xs={11}>
          <Routes>
            <Route path="/" element={<FuelCalculator />} />
            <Route path="/saved-estimations" element={<SavedEstimations />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App