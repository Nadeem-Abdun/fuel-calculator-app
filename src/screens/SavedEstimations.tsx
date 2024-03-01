import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SavedEstimateCard from "../components/SavedEstimateCard/SavedEstimateCard";

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
                                    <SavedEstimateCard
                                        index={index}
                                        distance={distance}
                                        fuelPrice={fuelPrice}
                                        vehicleMileage={vehicleMileage}
                                        estimationTitle={estimationTitle}
                                        originLocation={originLocation}
                                        endLocation={endLocation}
                                        fuelQuantityEst={fuelQuantityEst}
                                        fuelCostEst={fuelCostEst}
                                        createdAt={createdAt}
                                        handleDeleteRecord={handleDeleteRecord}
                                    />
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