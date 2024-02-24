import React from "react";
import { Grid, Card, Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function SavedEstimations() {
    return (
        <Card sx={{ paddingY: "25px", minHeight: "457px" }}>
            <Grid container item xs={12} justifyContent="center" alignItems="center" rowGap={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center" fontWeight="bold">Saved Estimations</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center" alignItems="flex-start" sx={{ maxHeight: "400px", overflowY: "auto" }}>
                    <Grid item xs={12}>
                        <Card sx={{ marginX: "5px", paddingX: "5px", paddingY: "3px", minHeight: "85px", background: "linear-gradient(to right, #d2d2d2, #d4d4d4)" }}>
                            <Grid container xs={12} justifyContent="center" alignItems="center" rowGap={1}>

                                <Grid container item xs={12} justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" fontWeight={600}>Estimation Title</Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton size="small"><DeleteForeverIcon color="error" /></IconButton>
                                    </Grid>
                                </Grid>

                                <Grid container item xs={12}>
                                    <Grid container item xs={10}>
                                        <Grid item xs={12}>
                                            <Typography variant="body1">From Location</Typography>
                                            <Typography variant="body1">To</Typography>
                                            <Typography variant="body1">To Location</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">Created @ {Date.now().toPrecision()}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h6" fontWeight={600}>0.7 L</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2" fontWeight={400}>Qty. Req.</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h6" fontWeight={600}>30 Rs</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2" fontWeight={400}>Cost. Est.</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    )
}

export default SavedEstimations