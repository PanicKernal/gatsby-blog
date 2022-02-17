import React from 'react'
import { container, footer } from './footer.module.scss'

export default function Footer({ children }) {
    return (
        <footer className={ container }>
            <div className={ footer }>
                { children }
            </div>
        </footer>
    )
}