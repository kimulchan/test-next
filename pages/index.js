import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>의찬잉</title>
      <link rel="icon" href="/favicon.ico"></link>
    </Head>
      <Link href="posts/pages">
        <a>this page</a>
      </Link>
      <Image src="/images/profile.jpg" height={144} width={144} alt="kimulcahn"></Image>
    </Layout>
  )
}
