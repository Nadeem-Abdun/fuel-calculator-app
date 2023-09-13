import React, { useState } from 'react';
import { Box } from '@mui/material'
import FuelCalculator from './Components/FuelCalculator';
import LoginPage from './Components/LoginPage';



function App() {
  // Login Validation State
  const [isLoginValid, setisLoginValid] = useState(false)
  return (
    <>
      <Box height='100vh' width='100vw' display='flex' justifyContent='center' alignItems='center' sx={{ background: 'linear-gradient(to right, #733872, #ca4c7c)' }}>
        {!isLoginValid ?
          <LoginPage isLoginValid={isLoginValid} setisLoginValid={setisLoginValid} />
          :
          <FuelCalculator isLoginValid={isLoginValid} setisLoginValid={setisLoginValid} />
        }
      </Box>
    </>
  );
}

export default App;
