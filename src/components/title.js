import React from 'react'
import { container, title, subtitle } from './title.module.scss'

const Title = (props) => (
    <section className={ container }>
        <h1 className={ title }>{ props.text }</h1>
        <div className={ subtitle }>{ props.subtitle }</div>
    </section>
)

export default Title