import React, { useState } from "react";
import { Grid, Card, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SaveIcon from "@mui/icons-material/Save";

function FuelCalculator() {

    // State Management
    const [fuelValues, setFuelValues] = useState({
        distance: null,
        fuelPrice: null,
        vehicleMileage: null,
        recordTitle: "",
        recordStartLocation: "",
        recordEndLocation: "",
        fuelQuantityEst: 0,
        fuelCostEst: 0
    })
    const [emptyFieldsValidator, setemptyFieldsValidator] = useState(false);

    // State Updating
    const handleFuelValues = (name: string, value: string | number) => {
        setFuelValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Calculations
    const handleCostQtyCalculations = async () => {
        if (fuelValues.distance !== null && fuelValues.fuelPrice !== null && fuelValues.vehicleMileage !== null) {
            // Quantity calculation
            let quantityOfFuel = await (Number(fuelValues.distance) / Number(fuelValues.vehicleMileage)).toFixed(3)
            // Cost calculation
            let costOfFuel = await (Number(fuelValues.fuelPrice) * Number(quantityOfFuel)).toFixed(3)
            // Setting State
            await handleFuelValues("fuelQuantityEst", Number(quantityOfFuel))
            await handleFuelValues("fuelCostEst", Number(costOfFuel))
            await setemptyFieldsValidator(false)
        } else {
            await setemptyFieldsValidator(true)
        }
    }

    // Save Records On Localstorage
    const handleRecordsStorage = async () => {
        try {
            const existingRecordsString = localStorage.getItem("fuelRecords");
            const existingRecords = existingRecordsString ? JSON.parse(existingRecordsString) : [];
            const updatedRecords = [...existingRecords, fuelValues];
            await localStorage.setItem("fuelRecords", JSON.stringify(updatedRecords));
            await handleRecordCalcDialog();
            await setFuelValues({
                distance: null,
                fuelPrice: null,
                vehicleMileage: null,
                recordTitle: "",
                recordStartLocation: "",
                recordEndLocation: "",
                fuelQuantityEst: 0,
                fuelCostEst: 0
            })
        } catch (error) {
            console.error(error);
        }
    }

    // Record Estimations Dialog
    const [recordCalcDialog, setRecordCalcDialog] = useState(false);
    const handleRecordCalcDialog = async () => {
        await handleCostQtyCalculations()
        await setRecordCalcDialog(!recordCalcDialog);
    }

    return (
        <React.Fragment>
            <Card sx={{ paddingY: "25px" }}>
                <Grid container item xs={12} justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={11}>
                        <Typography variant="h4" textAlign="center" fontWeight="bold">Fuel Calculator</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant="subtitle2" color="#6D6C7D"><b>*</b> Required</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            id="distance"
                            label="Distance in Kms"
                            fullWidth
                            type="number"
                            value={fuelValues.distance}
                            onChange={(e) => { handleFuelValues("distance", e.target.value); setemptyFieldsValidator(false) }}
                            required
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            id="fuelPrice"
                            label="Fuel Price in Rs"
                            fullWidth
                            type="number"
                            value={fuelValues.fuelPrice}
                            onChange={(e) => { handleFuelValues("fuelPrice", e.target.value); setemptyFieldsValidator(false) }}
                            required
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            id="vehicleMileage"
                            label="Vehicle Mileage in Km/L"
                            fullWidth
                            type="number"
                            value={fuelValues.vehicleMileage}
                            onChange={(e) => { handleFuelValues("vehicleMileage", e.target.value); setemptyFieldsValidator(false) }}
                            required
                        />
                    </Grid>
                    {emptyFieldsValidator &&
                        <Grid item xs={11}>
                            <Typography variant="subtitle2" color="error" textAlign="center">"All fields are mandatory"</Typography>
                        </Grid>
                    }
                    <Grid item xs={11}>
                        <Typography variant="body1">Fuel Quantity Estimated: <strong>{fuelValues.fuelQuantityEst}</strong> L </Typography>
                        <Typography variant="body1">Fuel Cost Estimated: <strong>{fuelValues.fuelCostEst}</strong> Rs </Typography>
                    </Grid>
                    <Grid container item xs={11} justifyContent="center" alignItems="center" rowGap={1}>
                        <Grid item xs={12}>
                            <Button onClick={() => { handleCostQtyCalculations() }} startIcon={<LocalGasStationIcon />} color="success" variant="contained" fullWidth>Calculate</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={() => { handleRecordCalcDialog() }} startIcon={<SaveIcon />} color="success" variant="contained" fullWidth>Save Estimations</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            {/* Record Calculations Dialog */}
            <Dialog open={recordCalcDialog} onClose={() => handleRecordCalcDialog()}>
                <DialogTitle>
                    <Typography variant="h6" fontWeight={500}>Record/Save Current Fuel Estimation</Typography>
                </DialogTitle>
                <DialogContent>
                    <div style={{ marginTop: "16px" }}></div>
                    <Grid container xs={12} justifyContent="flex-start" alignItems="center" rowGap={2} columnSpacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                id="recordTitle"
                                label="Title of the Record"
                                fullWidth
                                type="text"
                                value={fuelValues.recordTitle}
                                onChange={(e) => handleFuelValues("recordTitle", e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                id="recordStartLocation"
                                label="Start Location"
                                fullWidth
                                type="text"
                                value={fuelValues.recordStartLocation}
                                onChange={(e) => handleFuelValues("recordStartLocation", e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                id="recordEndLocation"
                                label="Destination"
                                fullWidth
                                type="text"
                                value={fuelValues.recordEndLocation}
                                onChange={(e) => handleFuelValues("recordEndLocation", e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <TextField
                                id="distance"
                                label="Distance in Kms"
                                fullWidth
                                type="number"
                                value={fuelValues.distance}
                                onChange={(e) => { handleFuelValues("distance", e.target.value) }}
                                required
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <TextField
                                id="fuelPrice"
                                label="Fuel Price in Rs"
                                fullWidth
                                type="number"
                                value={fuelValues.fuelPrice}
                                onChange={(e) => { handleFuelValues("fuelPrice", e.target.value) }}
                                required
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <TextField
                                id="vehicleMileage"
                                label="Vehicle Mileage in Km/L"
                                fullWidth
                                type="number"
                                value={fuelValues.vehicleMileage}
                                onChange={(e) => { handleFuelValues("vehicleMileage", e.target.value) }}
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography variant="body1">Fuel Quantity Estimated:</Typography>
                            <Typography variant="body1" fontWeight={600}>{fuelValues.fuelQuantityEst} L </Typography>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography variant="body1">Fuel Cost Estimated:</Typography>
                            <Typography variant="body1" fontWeight={600}>{fuelValues.fuelCostEst} Rs </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="error" variant="contained" onClick={() => handleRecordCalcDialog()}>Cancel</Button>
                    <Button color="success" variant="contained" onClick={() => handleRecordsStorage()}>Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default FuelCalculator