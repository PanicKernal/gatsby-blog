import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../static/favicon.ico"

const Head = ({ title }) => {
    return (
        <>
            <Helmet
                defaultTitle="Default Title | My Blog"
                title={ title }
                titleTemplate="%s | My Blog"
            >
                <link rel="icon" href={ favicon } />
            </Helmet>
        </>
    )
}

export default Head;