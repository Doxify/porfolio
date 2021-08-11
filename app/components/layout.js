import styles from './layout.module.css'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

import { useState, useEffect } from "react";

export default function Layout({ children }) {

  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <Head>
        <title>Andrei Georgescu - Software Engineer</title>
      </Head>
      <Navigation />
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
      <Footer />
    </div>
  )
}
