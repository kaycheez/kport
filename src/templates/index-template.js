import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components/Layout'

export const IndexPageTemplate = () => {
  return (
  <Layout>
    <div>hi</div>
  </Layout>
  )
}

IndexPageTemplate.propTypes = {}

export default IndexPageTemplate

// export const pageQuery = graphql`
//   query indexTemplate {
//     allFile(filter: { relativePath: { glob: "home/*" } }) {
//       nodes {
//         id
//         name
//         childImageSharp {
//           fluid(sizes: "(max-width: 770px) calc(100vw * 3), 2000px") {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `
