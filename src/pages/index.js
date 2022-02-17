import React from "react"
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from "../components/article-list"
import Head from "../components/head"

export default function Home() {
    return (
        <Layout>
            <Head title="Blast!" />
            <Title text='Welcome' subtitle='This aint it' />
            <p>
                This is going to be some lorem ipsum text but I forgot exactly how that story goes. It's a good story though because it details the prominence of suffering and misery in our lives.
            </p>
            <ArticleList />
        </Layout>
    )
}

// export default function Home() {
//   return <div>Hello world!</div>
// }