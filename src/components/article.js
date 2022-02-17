import React from 'react'
import { Link } from 'gatsby'
import {articleBox, left, right, date } from './article.module.scss'

const Article = (props) => (
    <Link to={ props.to }>
        <article className={ articleBox } key={ props.id }>
            <div className={ left }>
                <img src={'https://source.unsplash.com/150x150/?' + props.keywords} alt={ props.keywords } />
            </div>
            <div className={ right }>
                <h3>
                    { props.title }
                </h3>
                <div className={ date }>
                    { props.date }
                </div>
                <div>
                    { props.excerpt }
                </div>
            </div>
        </article>
    </Link>
)

export default Article