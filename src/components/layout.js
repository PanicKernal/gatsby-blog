import React from 'react'
import { container, content } from './layout.module.scss'
import Header from './header.js'
import Footer from './footer.js'

export default function Layout({ children }) {
    return (
        <div className={ container }>
            <Header />
            <div className={ content }>
                { children }
            </div>
            <Footer>
                My crappy little Gatsby Blog 2022
            </Footer>
        </div>
    )
}