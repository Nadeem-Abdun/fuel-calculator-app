import React, { useState, useEffect } from 'react';
import { Button, Card, Grid, Fab, TextField, Typography, Tooltip } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface PropTyp {
    isLoginValid?: any;
    setisLoginValid?: any;
}

function LoginPage(props: PropTyp) {

    const { setisLoginValid } = props;

    // Resposiveness Breakpoints
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    });
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));

    // State Management
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [isCredValid, setIsCredValid] = useState(true)
    const [EmailValid, setEmailValid] = useState(false);

    const loginValidationFunc = () => {
        if (loginId === 'Abc@fuel.com' && password === 'Abc123') {
            setisLoginValid(true)
            setIsCredValid(true)
        } else {
            setisLoginValid(false)
            setIsCredValid(false)
        }
    }

    useEffect(() => {
        setIsCredValid(true)
    }, [loginId, password])


    // Email Validator
    useEffect(() => {
        if (loginId !== "" && loginId !== null) {
            let validOrNot = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(loginId);
            setEmailValid(!validOrNot)
        } else {
            setEmailValid(false)
        }
    }, [loginId])

    return (
        <React.Fragment>
            <Grid container xl={4} lg={4} md={6} sm={8} xs={11} justifyContent='center' alignItems='center'>
                <Grid item xs={12}>
                    <Card sx={{ paddingY: '25px' }}>
                        <Grid container item xs={12} justifyContent='center' alignItems='center' spacing={2}>
                            <Grid item xs={11}>
                                <Typography variant='h4' textAlign='center' fontWeight='bold'>Login</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant='subtitle2' color='#6D6C7D'><b>*</b> Required</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    label='Enter Your Login Email ID'
                                    placeholder='Abc@fuel.com'
                                    fullWidth
                                    required
                                    value={loginId}
                                    onChange={(e) => { setLoginId(e.target.value) }}
                                    type='email'
                                    error={EmailValid}
                                    helperText={EmailValid ? 'Please enter a valid login id' : ''}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    label='Enter Your Password'
                                    placeholder='Abc123'
                                    fullWidth
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    type='password'
                                />
                            </Grid>
                            <Grid container item xs={11} justifyContent='space-between' alignItems='center' wrap='nowrap'>
                                <Grid container xs={10.8} item alignItems='center' spacing={isCredValid ? 0 : 1} wrap='nowrap'>
                                    {!isCredValid ?
                                        <Grid item>
                                            <Button onClick={() => { loginValidationFunc() }} variant='contained' startIcon={<LoginIcon />} color='success'>Login</Button>
                                        </Grid>
                                        :
                                        <Tooltip title='Click to Login' placement="right" arrow>
                                            <Grid item>
                                                <Button onClick={() => { loginValidationFunc() }} variant='contained' startIcon={<LoginIcon />} color='success'>Login</Button>
                                            </Grid>
                                        </Tooltip>
                                    }
                                    {!isCredValid &&
                                        <Grid item>
                                            <Typography variant='subtitle2' color='error'>Invalid Credentials!</Typography>
                                        </Grid>
                                    }
                                </Grid>
                                <Grid container xs='auto' item alignItems='center'>
                                    <Grid item>
                                        <Tooltip title='Login Bypass' placement={(isXs || isSm) ? "right" : "left"} arrow>
                                            <Fab size='small' onClick={() => { setisLoginValid(true) }} color="warning">
                                                <ErrorOutlineIcon />
                                            </Fab>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default LoginPage