import React from "react"
import { content, header, errorMessage } from './404.module.scss'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function FourOhFour() {
    return (
        <Layout>
            <div className={content}>
                <h1 className={header}>404 - There is no page here</h1>
                <p className={errorMessage}>
                    You're looking for a non-existent page.
                </p>
                <Link to='/'>Home</Link>
            </div>
        </Layout>
    )
}