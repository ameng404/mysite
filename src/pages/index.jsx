import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures'
import lottie from 'lottie-web';
import styles from  "./index.module.less";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('animation'), 
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './lf20_omffcfbk.json'
    });
  },[])
  return (
    <main className={styles.home}>
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <div className={styles.banner}>
          <div className={styles.left}>
            <h1 className={styles.title}>{siteConfig.title}</h1>
            <p  className={styles.subtitle}>{siteConfig.tagline}</p>
            <div className={styles.contact}>
              <div className={styles.dy}>
                <img className={styles.icon} src="./img/douyin.png" alt="抖音" />
                <img  className={styles.qrcode} src="./img/dyqrcode.jpg" alt="抖音" />
              </div>
              <div className={styles.wx}>
                <img  className={styles.icon} src="./img/wechat.png" alt="微信" />
                <img  className={styles.qrcode} src="./img/wxqrcode.jpg" alt="微信" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div id="animation" />
          </div>
        </div>
        <HomepageFeatures />
      </Layout>
    </main>
  );
}
