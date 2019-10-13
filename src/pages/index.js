import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
export default ({ data }) => (
  <Layout>
    <h1>Amazing Pandas Eating Things</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          <h3
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            {node.frontmatter.title}{" "}
            <span
              css={css`
                color: #bbb;
              `}
            >
              - {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
    <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>
  </Layout>
)
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
