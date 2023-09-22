import React from 'react'
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider } from '@mui/material'

interface PropTyp {
    popUpOpen?: any;
    popUpClose?: any;
    errorPopUpHeading?: any;
    errorPopUpMessage?: any;
    errorPopUpButtonText?: any;
}

const ErrorPopup = (props: PropTyp) => {

    const { popUpOpen, popUpClose, errorPopUpHeading, errorPopUpMessage, errorPopUpButtonText } = props

    return (
        <React.Fragment>
            <Dialog open={popUpOpen} onClose={popUpClose}>
                <DialogTitle>
                    <Typography variant='h5' fontWeight='bold' textAlign='center'>{errorPopUpHeading}!</Typography>
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <Typography variant='body1' fontWeight='light' textAlign='center'>{errorPopUpMessage}</Typography>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={() => { popUpClose() }} variant='text' color='success' fullWidth>
                        <Typography variant='body2' fontWeight='bold' textAlign='center' textTransform='none'>{errorPopUpButtonText}!</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default ErrorPopup