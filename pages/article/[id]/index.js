import Link from 'next/link'
import { useRouter } from 'next/router'

const article = ({article}) => {
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <div>
            <h1>{article.title}</h1>
            <h1>{article.body}</h1>
            This is article {article.id}
            <br/>
            <Link href='/'>Go Back</Link>
        </div>
    )
}

export default article

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}