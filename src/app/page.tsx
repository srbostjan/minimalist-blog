import Image from 'next/image'
import React from 'react'
import styles from './home.module.css'
import messageIcon from '../assets/home/messageIcon.png'
import avatar from '../assets/home/avatar.jpeg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Link
          href={'mailto:bostjanrivera@gmail.com'}
          className={styles.mailContainer}
        >
          <button className={styles.mailButton}>
            <Image src={messageIcon} alt="message icon" width={20} height={20} />
          </button>
          <p className={styles.mailText}>bostjanrivera@gmail.com</p>
        </Link>
        <nav className={styles.nav}>
          <Link
            href={'https://www.linkedin.com/in/srbostjan'}
            target='_blank'
            prefetch={false}
            className={styles.navItem}
          >
            LinkedIn
          </Link>
          <p className={styles.navItemSeparator}>/</p>
          <Link
            href={'https://twitter.com/srbostjan'}
            target='_blank'
            prefetch={false}
            className={styles.navItem}
          >
            Twitter
          </Link>
          <p className={styles.navItemSeparator}>/</p>
          <Link
            href={'https://github.com/srbostjan'}
            target='_blank'
            prefetch={false}
            className={styles.navItem}
          >
            Github
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.avatar}>
          <Image src={avatar} alt="message icon" priority fill />
        </div>
        <p className={styles.presentation}>Hi, I’m sebastian 👋</p>
        <h2 className={styles.title}>
          Think, motivate<br />yourself and build
        </h2>
        <button className={styles.portfolioButton}>
          <p className={styles.portfolioText}>Portfolio</p>
        </button>
      </main>
    </>
  )
}
