import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'
import Main from '@/components/home/main/main'


export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <>
      <Header country={country}/>
        <div className={styles.home}>
          <div className={styles.container}>
            <Main />
          </div>
        </div>
      <Footer country={country}/>
    </>
  )
}

// {
//   session ? "You are logged in" : "You are not logged in"
// }
export async function getServerSideProps() {
  let data = await axios
    .get('https://api.ipregistry.co/?key=e8k7kc2jtqzi9nwe')
    .then((res) => {
      return res.data.location.country;
    }) .catch((err) => {
      console.log(err)
    })
    return {
      props: {
        country: { name: data.name, flag: data.flag.emojitwo, countryCode: data.code }
      }
    }
}