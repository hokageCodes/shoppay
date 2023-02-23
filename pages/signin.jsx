/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import styles from '../styles/signin.module.scss';
import Footer from '../components/footer'
import Header from '../components/header'
import {BiLeftArrowAlt} from 'react-icons/bi'
import Link from 'next/link'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import LoginInput from '../components/inputs/loinInput/loginInput';
import CircledIconBtn from '../components/buttons/circledIconBtn';
import { getProviders, signIn } from 'next-auth/react';

const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  confirm_password: "",
}

export default function signin({ providers }) {
  console.log(providers)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState(initialvalues);
  const { login_email, login_password, name, email, password, confirm_password } = user;
  console.log(user);

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required")
      .email("Please enter a valid email address"),
    login_password: Yup.string().required("Please enter a valid password")
  })

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your name ?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),

    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),

    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),

    confirm_password: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });


  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value})
  }
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>Please Join Us !</span> <Link href="/">Go to Sore</Link>
          </div>
          <div className={styles.login__form}>
            <h1>Sign In</h1>
            <p>Get access to the best fashion online store</p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {
                (form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="login_email"
                      placeholder="Email Address"
                      icon="email"
                      onChange={handleChange}
                    />

                    <LoginInput
                      type="password"
                      name="login_password"
                      placeholder="Password"
                      icon="password"
                      onChange={handleChange}
                    />
                    <CircledIconBtn 
                      text="Sign In"
                      type="submit" 
                    />
                    <div className={styles.forgot}>
                      <Link href="/">Forgot Password?</Link>
                    </div>
                  </Form>
                )
              }
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or Continue with</span>
              <div className={styles.login__socials_wrap}>
              {
                providers.map((provider) => (
                  <div key={provider.name}>
                      <button
                        className={styles.social__btn}
                        onClick={() => signIn(provider.id)}
                      >
                        <img src={`../../icons/${provider.name}.png`} alt="" />
                        Sign in with {provider.name}
                      </button>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign Up</h1>
            <p>Get access to one of the best Eshopping services in the world.</p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email, 
                password, 
                confirm_password
              }}
              validationSchema={registerValidation}
            >
              {
                (form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      icon="user"
                      onChange={handleChange}
                    />
                    <LoginInput
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      icon="email"
                      onChange={handleChange}
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      icon="password"
                      onChange={handleChange}
                    />
                    <LoginInput
                      type="password"
                      name="confirm_pasword"
                      placeholder="Confirm Password"
                      icon="password"
                      onChange={handleChange}
                    />
                    <CircledIconBtn 
                      text="Sign Up"
                      type="submit" 
                    />
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="Nigeria" />
    </>
  )
}


export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: {
      providers
    }
  }
}
