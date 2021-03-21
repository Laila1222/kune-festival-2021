import Head from 'next/head'
import HomeHeader from '../components/header/HomeHeader'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kune festival 2021</title>
      </Head>
      <HomeHeader />
      <h1>Home</h1>
    </div>
  )
}
