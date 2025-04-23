import React from 'react'
import Profile from './components/Profile'
import Languages from './components/Languages'
import Tools from './components/Tools'
import "./App.css"

const App = () => {
    return (
        <>
            <Profile />
            <hr/>
            <Languages/>
            <hr/>
            <Tools/>
        </>
    )
}

export default App