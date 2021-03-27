import React from 'react'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'

function Layout({children}) {
    return (
        <div>
            <Nav />
            <main>{children}</main>
        </div>
    )
}

export default Layout
