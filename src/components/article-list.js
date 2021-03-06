import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from './article'

export default function ArticleList() {
    return (
        <StaticQuery
            query = { graphql `query {
                allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                    totalCount
                    edges {
                      node {
                        fields {
                            slug
                        }
                        id
                        frontmatter {
                            date(formatString: "MMMM DD YYYY")
                            image
                            title
                            keywords
                        }
                        excerpt
                      }
                    }
                  }
                }`
            }
            render = { data => (
                <div>
                    { data.allMarkdownRemark.edges.map(({ node }) => (
                        <Article
                            id={ node.id }
                            to={ node.fields.slug }
                            keywords={ node.frontmatter.keywords }
                            title={ node.frontmatter.title }
                            date={ node.frontmatter.date }
                            excerpt={ node.excerpt }
                        />
                    ))}
                </div>
            )}
        />
    )
}