import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Nnija skills</strong>
            <p>Pre-rendering is a tradeoff between client-side and server-side rendering. Every pre-rendered page displays a skeleton template while the data waits to be rehydrated with AJAX/XHR requests. Once the page is fetched, internal routing is done dynamically to take advantage of a client-side rendered website.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Nnija skills</strong>
            <p>Pre-rendering is a tradeoff between client-side and server-side rendering. Every pre-rendered page displays a skeleton template while the data waits to be rehydrated with AJAX/XHR requests. Once the page is fetched, internal routing is done dynamically to take advantage of a client-side rendered website.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Nnija skills</strong>
            <p>Pre-rendering is a tradeoff between client-side and server-side rendering. Every pre-rendered page displays a skeleton template while the data waits to be rehydrated with AJAX/XHR requests. Once the page is fetched, internal routing is done dynamically to take advantage of a client-side rendered website.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Nnija skills</strong>
            <p>Pre-rendering is a tradeoff between client-side and server-side rendering. Every pre-rendered page displays a skeleton template while the data waits to be rehydrated with AJAX/XHR requests. Once the page is fetched, internal routing is done dynamically to take advantage of a client-side rendered website.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Nnija skills</strong>
            <p>Pre-rendering is a tradeoff between client-side and server-side rendering. Every pre-rendered page displays a skeleton template while the data waits to be rehydrated with AJAX/XHR requests. Once the page is fetched, internal routing is done dynamically to take advantage of a client-side rendered website.</p>
          </a>
        </div>
      </main>
    </>
  )
}