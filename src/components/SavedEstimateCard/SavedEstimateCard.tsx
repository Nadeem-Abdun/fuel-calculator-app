import React from "react";
import { Grid, Card, Typography, IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";

interface Props {
    index: number;
    distance: number;
    fuelPrice: number;
    vehicleMileage: number;
    estimationTitle: number;
    originLocation: number;
    endLocation: string;
    fuelQuantityEst: string;
    fuelCostEst: string;
    createdAt: string;
    handleDeleteRecord: (index: number) => void;
}

function SavedEstimateCard(props: Props) {

    const { index, distance, fuelPrice, vehicleMileage, estimationTitle, originLocation, endLocation, fuelQuantityEst, fuelCostEst, createdAt, handleDeleteRecord } = props;

    return (
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
                    <Grid container item xs={9}>
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
                            <Typography variant="caption" fontWeight={400}>Saved At: <strong>{createdAt}</strong></Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={3} rowGap={1}>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="body1" fontWeight={600}>{fuelQuantityEst}L</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" fontWeight={400}>Required Quantity</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="body1" fontWeight={600}>{fuelCostEst}Rs</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" fontWeight={400}>Estimated Cost</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default SavedEstimateCard