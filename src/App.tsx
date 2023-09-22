import React, { useEffect, useState } from 'react';
import { Box, Dialog } from '@mui/material'
import FuelCalculator from './Components/FuelCalculator';
import LoginPage from './Components/LoginPage';
import Loading from './SparkComponents/Loading/Loading';


function App() {
  // Login Validation State
  const [isLoginValid, setisLoginValid] = useState(false)

  // Loading State
  const [isLoading, setIsLoading] = useState(false)

  // Loading Timeout 
  useEffect(() => {
    const fakeLoadingTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => {
      clearTimeout(fakeLoadingTimeout)
    }
  }, [isLoading])


  return (
    <>
      <Box height='100vh' width='100vw' display='flex' justifyContent='center' alignItems='center' sx={{ background: 'linear-gradient(to right, #733872, #ca4c7c)' }}>
        {!isLoginValid ?
          <LoginPage isLoginValid={isLoginValid} setisLoginValid={setisLoginValid} setIsLoading={setIsLoading} />
          :
          <FuelCalculator isLoginValid={isLoginValid} setisLoginValid={setisLoginValid} setIsLoading={setIsLoading} />
        }
      </Box>
      <Dialog open={isLoading}>
        <Loading />
      </Dialog>
    </>
  );
}

export default App;
