import React, { useState } from 'react';
import { Grid } from '@mui/material';
import FuelCalculator from './screens/FuelCalculator';

function App() {
  return (
    <Grid container xs={12} justifyContent="center" alignItems="center" sx={{ background: "linear-gradient(to right, #733872, #ca4c7c)", height: "100dvh" }}>
      <Grid item xl={4} lg={4} md={6} sm={8} xs={11}>
        <FuelCalculator />
      </Grid>
    </Grid>
  )
}

export default App;