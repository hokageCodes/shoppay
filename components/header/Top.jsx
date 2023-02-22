/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from './styles.module.scss';
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'
import Link from 'next/link';
import UserMenu from './UserMenu';
import { useSession } from 'next-auth/react';

export default function Top({ country }) {
    console.log(country)
    const { data: session } = useSession();
    // const [loggedIn, setLoggedIn] = useState(true);
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.li}>
                        <img src={country?.flag.emojitwo} alt='Nigeria' />
                        <span>{country?.name} / {country?.code}</span>
                    </li>
                    <li className={styles.li}>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.li}>
                        <span>Customer Service</span>
                    </li>
                    <li className={styles.li}>
                        <span>Help</span>
                    </li>
                    <li className={styles.li}>
                        <BsSuitHeart />
                        <Link style={{
                            color: 'inherit'                      }} 
                            href="/profile/wishlist">
                            <span>Wishlist</span>
                        </Link>
                    </li>
                    <li className={styles.li} 
                        onMouseOver={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        {session ? (
                            <li className={styles.li}>
                                <div className={styles.flex}>
                                    <img src={session.user.image} alt="profile" />
                                    <span>{session.user.name}</span>
                                    <RiArrowDropDownFill />
                                </div>
                            </li>
                        ) : (
                            <li className={styles.li}>
                                <div className={styles.flex}>
                                    <RiAccountPinCircleLine />
                                    <span>Account</span>
                                    <RiArrowDropDownFill />
                                </div>
                            </li>
                        )}
                        {
                            visible && <UserMenu session={session}/>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
