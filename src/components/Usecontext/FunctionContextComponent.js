import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#3BFF00 ' : '#0035FF',
        color: darkTheme ? '#0035FF' : '#3BFF00 ',
        padding: '2rem',
        margin: '2rem'
    }
    return ( <
        >
        <
        div className = "nama"
        style = { themeStyles } > List Nama Mobil <
        div className = "btn" >
        <
        button onClick = { toggleTheme } >
        <
        div className = "btntext" >
        Change color <
        /div> <
        /button> <
        /div>  <
        /div> <
        />
    )
}