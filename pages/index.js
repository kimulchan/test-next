import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Link href="posts/pages">
      <a>this page</a>
    </Link>
  )
}
