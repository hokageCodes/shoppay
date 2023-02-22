import Header from '../components/header'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Top from '@/components/header/Top'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}
