import LeftmMenu from '@/components/LeftMenu'
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/MainStyle.module.scss'
import Dashboard from './_dashboard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirPlay - DashBoard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <LeftmMenu/>
        <Dashboard/>
      </div>
    </div>
  )
}
