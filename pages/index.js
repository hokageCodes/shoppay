import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'
import Main from '@/components/home/main/main'
import FlashDeals from '@/components/home/flashDeals'
import Category from '@/components/home/category'


export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <>
      <Header country={country}/>
        <div className={styles.home}>
          <div className={styles.container}>
            <Main />
            <FlashDeals />
            <div className={styles.home__category}>
              <Category
                header="Dresses"
                products={women_dresses}
                background="#5a31f4"
              />
              {!isMedium && (
                <Category
                  header="Shoes"
                  products={women_shoes}
                  background="#3c811f"
                />
              )}
              {isMobile && ( 
                <Category
                  header="Shoes"
                  products={women_shoes}
                  background="#3c811f"
                />
              )}
              <Category
                header="Accessories"
                products={women_accessories}
                background="#000"
              />
            </div>
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