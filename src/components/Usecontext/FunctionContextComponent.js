import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#ff6781' : '#ffc0cb',
        color: darkTheme ? '#ffc0cb' : '#ff6781',
        padding: '2rem',
        margin: '2rem'
    } 
    return (
        <>
            <div className="nama" style={themeStyles}>Daftar Nama Mahasiswa
            <div className="btn">
                    <button onClick={toggleTheme}>
                        <div className="btntext">
                    Tema
                        </div>
                    </button>
                </div> 
            </div>
        </>
    )
}