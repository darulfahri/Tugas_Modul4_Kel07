import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#ff6781' : '#ffc0cb',
            color: dark ? '#ffc0cb' : '#ff6781',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class
                    Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}