import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'


export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <>
      <Header country={country}/>
      {
        session ? "You are logged in" : "You are not logged in"
      }
      <Footer country={country}/>
    </>
  )
}

export async function getServerSideProps() {
  let data = await axios
    .get('https://api.ipregistry.co/?key=2a1ojtqado1b1on7')
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