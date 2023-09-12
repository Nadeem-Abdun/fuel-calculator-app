import React, { useState } from 'react'
import { Grid, Card, Typography, TextField, Button } from '@mui/material'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

function FuelCalculator() {
    // State Management
    const [distance, setDistance] = useState<string>("");
    const [fuelPrice, setFuelPrice] = useState<string>("");
    const [vehicleMileage, setVehicleMileage] = useState<string>("");

    const [fuelQty, setFuelQty] = useState<number>(0)
    const [fuelCost, setFuelCost] = useState<number>(0)

    // Quantity calculation function
    const QtyCal = () => {
        let quantityOfFuel = Math.floor(Number(distance) / Number(vehicleMileage))
        setFuelQty(quantityOfFuel)
    }

    // Cost calculation function
    const CostCal = () => {
        let quantityOfFuel = Math.floor(Number(distance) / Number(vehicleMileage))
        let costOfFuel = Math.floor(Number(fuelPrice) * quantityOfFuel)
        setFuelCost(costOfFuel)
    }

    // Submit function
    const handleCalSubmit = () => {
        QtyCal()
        CostCal()
    }

    return (
        <React.Fragment>
            <Grid container xl={4} lg={4} md={6} sm={8} xs={10} justifyContent='center' alignItems='center'>
                <Grid item xs={12}>
                    <Card sx={{ paddingY: '25px' }}>
                        <Grid container item xs={12} justifyContent='center' alignItems='center' spacing={2}>
                            <Grid item xs={11}>
                                <Typography variant='h4' textAlign='center' fontWeight={'bold'}>Fuel Calculator</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant='subtitle2'><b>*</b> Required</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    id='distance'
                                    label='Distance in Kms'
                                    fullWidth
                                    type='number'
                                    value={distance}
                                    onChange={(e) => setDistance(e.target.value)}
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
                                    onChange={(e) => setFuelPrice(e.target.value)}
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
                                    onChange={(e) => setVehicleMileage(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant='body1'>Fuel Quantity Estimated: <strong>{fuelQty}</strong> Liters </Typography>
                                <Typography variant='body1'>Fuel Cost Estimated: <strong>{fuelCost}</strong> Rupees </Typography>
                            </Grid>
                            <Grid container item xs={11} justifyContent='center' alignItems='center'>
                                <Grid item>
                                    <Button onClick={() => { handleCalSubmit() }} startIcon={<LocalGasStationIcon />} color='success' variant='contained'>Calculate</Button>
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