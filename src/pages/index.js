import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main className={styles.main}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <header className={styles.heroBanner}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                查看知识库
              </Link>
            </div>
          </div>
        </header>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img className={styles.featureSvg} src='../../static/img/leap.svg' alt="成长" />
                </div>
                <div className="text--center padding-horiz--md">
                  <h3>成长</h3>
                  <p>共同学习与你共同成长。</p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img className={styles.featureSvg} src='../../static/img/lookup.svg' alt="探索" />
                </div>
                <div className="text--center padding-horiz--md">
                  <h3>探索</h3>
                  <p>发布具有价值的新闻咨询。</p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img className={styles.featureSvg} src='../../static/img/reflection.svg' alt="启迪" />
                </div>
                <div className="text--center padding-horiz--md">
                  <h3>启迪</h3>
                  <p>期望我的文章能够帮助到你。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
