import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './Loading.css'

const Loading = () => {

    return (
        <div className="loading-overlay">
            <CircularProgress color="success" />
        </div>
    )
}

export default Loading