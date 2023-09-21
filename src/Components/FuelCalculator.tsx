import React, { useState } from 'react'
import { Grid, Card, Typography, TextField, Button, Tooltip } from '@mui/material'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LogoutIcon from '@mui/icons-material/Logout';

interface PropTyp {
    isLoginValid?: any;
    setisLoginValid?: any;
    setIsLoading?: any;
}

function FuelCalculator(props: PropTyp) {

    const { setisLoginValid, setIsLoading } = props

    // State Management
    const [distance, setDistance] = useState<string>("");
    const [fuelPrice, setFuelPrice] = useState<string>("");
    const [vehicleMileage, setVehicleMileage] = useState<string>("");

    const [fuelQty, setFuelQty] = useState<number>(0)
    const [fuelCost, setFuelCost] = useState<number>(0)

    const [emptyFieldsValidator, setemptyFieldsValidator] = useState(false);

    // Quantity calculation function
    const QtyCal = () => {
        let quantityOfFuel = (Number(distance) / Number(vehicleMileage)).toFixed(3)
        setFuelQty(Number(quantityOfFuel))
    }

    // Cost calculation function
    const CostCal = () => {
        let quantityOfFuel = (Number(distance) / Number(vehicleMileage)).toFixed(3)
        let costOfFuel = (Number(fuelPrice) * Number(quantityOfFuel)).toFixed(3)
        setFuelCost(Number(costOfFuel))
    }

    // Submit function
    const handleCalSubmit = () => {
        if (distance !== "" && fuelPrice !== "" && vehicleMileage !== "") {
            QtyCal()
            CostCal()
            setemptyFieldsValidator(false)
        }
        else {
            setemptyFieldsValidator(true)
        }
    }

    return (
        <React.Fragment>
            <Grid container xl={4} lg={4} md={6} sm={8} xs={10} justifyContent='center' alignItems='center'>
                <Grid item xs={12}>
                    <Card sx={{ paddingY: '25px' }}>
                        <Grid container item xs={12} justifyContent='center' alignItems='center' spacing={2}>
                            <Grid item xs={11}>
                                <Typography variant='h4' textAlign='center' fontWeight='bold'>Fuel Calculator</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant='subtitle2' color='#6D6C7D'><b>*</b> Required</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    id='distance'
                                    label='Distance in Kms'
                                    fullWidth
                                    type='number'
                                    value={distance}
                                    onChange={(e) => { setDistance(e.target.value); setemptyFieldsValidator(false) }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    id='fuelPrice'
                                    label='Fuel Price in Rs'
                                    fullWidth
                                    type='number'
                                    value={fuelPrice}
                                    onChange={(e) => { setFuelPrice(e.target.value); setemptyFieldsValidator(false) }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    id='vehicleMileage'
                                    label='Vehicle Mileage in Km/L'
                                    fullWidth
                                    type='number'
                                    value={vehicleMileage}
                                    onChange={(e) => { setVehicleMileage(e.target.value); setemptyFieldsValidator(false) }}
                                    required
                                />
                            </Grid>
                            {emptyFieldsValidator &&
                                <Grid item xs={11}>
                                    <Typography variant='subtitle2' color='error' textAlign='center'>"All fields are mandatory"</Typography>
                                </Grid>
                            }
                            <Grid item xs={11}>
                                <Typography variant='body1'>Fuel Quantity Estimated: <strong>{fuelQty}</strong> L </Typography>
                                <Typography variant='body1'>Fuel Cost Estimated: <strong>{fuelCost}</strong> Rs </Typography>
                            </Grid>
                            <Grid container item xs={11} justifyContent='space-between' alignItems='center' spacing={1}>
                                <Grid item>
                                    <Tooltip title='Click to Calculate' placement="right" arrow>
                                        <Button onClick={() => { handleCalSubmit() }} startIcon={<LocalGasStationIcon />} color='success' variant='contained'>Calculate</Button>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title='Click to Logout' placement="left" arrow>
                                        <Button onClick={() => { setisLoginValid(false); setIsLoading(true) }} startIcon={<LogoutIcon />} color='error' variant='contained'>Logout</Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default FuelCalculator