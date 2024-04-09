import React, { useContext } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AlertContext from '../context/Alerts/AlertContext';

export default function AlertComponent() {
  const {alert} = useContext(AlertContext)

  const isAlert = (alert) => {
    return !!(alert);
  }

  return (
    isAlert(alert) &&
    <Alert severity={alert.type}>
        <AlertTitle>{alert.title}</AlertTitle>
        {alert.msg}
    </Alert>
  )
}
