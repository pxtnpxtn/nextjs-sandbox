import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>NextJS Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content='learn next, web development' />
      </Head>

      <ArticleList articles={articles} />
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}