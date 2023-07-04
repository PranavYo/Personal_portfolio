import React, { useState } from 'react'
import AlertContext from './AlertContext'

function AlertState(props) {

    const [alert, setAlert] = useState(null)
    const showAlert = (message, type, title) => {
        setAlert({
            msg: message,
            type: type,
            title: title
        })
        setTimeout(() => {
            setAlert(null);
        }, 4000);
    }

  return (
    <AlertContext.Provider value={ {alert, showAlert} }>
        {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
