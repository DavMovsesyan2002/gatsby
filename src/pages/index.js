import * as React from "react"
import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Porsche from "../images/porsche.jpg"
import Mercedes from "../images/mercedes.webp"
// import Audi from "../images/audi.webp"

import "../components/style.scss"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <div className='container'>
      <Seo title="Home" />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/e0kA27Wlc6w" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
      <h1>Cosmos</h1>
      <p>Welcome to your new Gatsby site.</p>
      <div className='container-images'>
        <div className='column-image'>
          <img src={Porsche} alt="Porsche" />
        </div>
        <div className='column-image'>
          <img src={Mercedes} alt="Mercedes" />
        </div>
        <div className='column-image'>
          {/*<img src={Audi} alt="Mercedes" />*/}
        </div>
      </div>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
      {
        nodes.map(post => {
          const { category, title, url } = post.frontmatter;
          return  <Link to={`/${category}/${url}`} key={post.id}>{title}</Link>
        })
      }
    </div>
  )
}
export default IndexPage

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
        }
        id
      }
    }
  }
`
