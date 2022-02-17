import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { container, row, link, button, buttonTwitter, buttonLinkedin, buttonGithub } from './header.module.scss'

// HeaderLink component
const HeaderLink = props => (
    <Link className={ link } to={ props.to }>{ props.text }</Link>
)

// HomeButton component
const HomeButton = props => (
    <Link to={ props.to }>
        <div className={ button }>{ props.text }</div>
    </Link>
)

// SocialButton component
const SocialButton = (props) => {
    let style = '';
    let url = '';

    if (props.site === 'twitter') {
        style = buttonTwitter;
        url = "https://www.twitter.com/" + props.username;
    }
    else if (props.site === 'linkedin') {
        style = buttonLinkedin;
        url = "https://www.linkedin.com/in/" + props.username;
    }
    else if (props.site === 'github') {
        style = buttonGithub;
        url = "https://www.github.com/" + props.username;
    }

    return (
        <a href={ url } target="_blank" rel="noopener noreferrer">
            <div className={ style }>{ props.children }&nbsp;</div>
        </a>
    )
}

export default function Header() {
    return (
        <StaticQuery
            query = { graphql`
                query {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }`

            }
            render = { data => (
                <header className={ container }>
                    <div className={ row }>
                        <HomeButton to='/' text={ data.site.siteMetadata.title } />
                        <SocialButton site="github" username="evangeloper"></SocialButton>
                        <SocialButton site="linkedin" username="evangeloper"></SocialButton>
                        <SocialButton site="twitter" username="evangeloper"></SocialButton>
                    </div>

                    <div className={ row }>
                        <HeaderLink to='/' text='BLOG' />
                        <HeaderLink to='/about' text='ABOUT' />
                    </div>
                </header>
            )}
        />
    )
}