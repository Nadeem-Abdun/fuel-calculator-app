import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, IconButton, Button } from "@mui/material";
import { ExitToApp, DeleteForever } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SavedEstimations() {

    const history = useNavigate();

    const [fuelRecords, setFuelRecords] = useState([]);

    const handleDeleteRecord = (index: any) => {
        const updatedRecords = [...fuelRecords];
        updatedRecords.splice(index, 1); // Remove the record at the given index
        setFuelRecords(updatedRecords); // Update the state
        localStorage.setItem("fuelRecords", JSON.stringify(updatedRecords)); // Update local storage
    };

    const navigateToFuelCalculator = () => {
        history("/")
    }

    useEffect(() => {
        const savedFuelRecords = localStorage.getItem("fuelRecords");
        if (savedFuelRecords) {
            setFuelRecords(JSON.parse(savedFuelRecords));
        }
    }, [])

    return (
        <Card sx={{ paddingY: "25px", minHeight: "457px" }}>
            <Grid container item xs={12} justifyContent="center" alignItems="center" rowGap={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center" fontWeight="bold">Saved Estimations</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center" alignItems="flex-start" sx={{ maxHeight: "400px", overflowY: "auto" }}>
                    {fuelRecords.length !== 0 ?
                        fuelRecords && fuelRecords.map((record, index) => {
                            const { distance, fuelPrice, vehicleMileage, estimationTitle, originLocation, endLocation, fuelQuantityEst, fuelCostEst, createdAt } = record;
                            return (
                                <Grid item xs={12} key={index}>
                                    <Card sx={{ marginX: "5px", paddingX: "5px", paddingY: "3px", minHeight: "85px", background: "linear-gradient(to right, #d2d2d2, #d4d4d4)" }}>
                                        <Grid container xs={12} justifyContent="center" alignItems="center">
                                            <Grid container item xs={12} justifyContent="space-between" alignItems="center">
                                                <Grid item>
                                                    <Typography variant="h6" fontWeight={600}>{estimationTitle}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton size="small" onClick={() => handleDeleteRecord(index)}><DeleteForever color="error" fontSize="small" /></IconButton>
                                                </Grid>
                                            </Grid>
                                            <Grid container item xs={12}>
                                                <Grid container item xs={10}>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" fontWeight={400}>Location: <strong>{originLocation}</strong>  - <strong>{endLocation}</strong></Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" fontWeight={400}>Given Distance: <strong>{distance}kms</strong></Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" fontWeight={400}>Given Fuel Price: <strong>{fuelPrice}rs</strong></Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" fontWeight={400}>Given Mileage: <strong>{vehicleMileage}km/l</strong></Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="caption" fontWeight={400}>Saved At {createdAt}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container item xs={2}>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body1" fontWeight={600}>{fuelQuantityEst}L</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" fontWeight={400}>Required Quantity</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body1" fontWeight={600}>{fuelCostEst}Rs</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" fontWeight={400}>Estimated Cost</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            )
                        })
                        :
                        <Grid item xs={12}>
                            <Typography variant="h6" textAlign="center">No Records Found</Typography>
                        </Grid>
                    }
                </Grid>
                <Grid item xs={11}>
                    <Button onClick={() => { navigateToFuelCalculator() }} startIcon={<ExitToApp />} color="success" variant="contained" fullWidth>Go To Fuel Calculator</Button>
                </Grid>
            </Grid>
        </Card >
    )
}

export default SavedEstimations