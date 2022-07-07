import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.less';

const FeatureList = [
  {
    title: '成长',
    Svg: require('../../static/img/leap.svg').default,
    description: (
      <>
        共同学习与你共同成长。
      </>
    ),
  },
  {
    title: '探索',
    Svg: require('../../static/img/lookup.svg').default,
    description: (
      <>
        发布具有价值的新闻咨询。
      </>
    ),
  },
  {
    title: '启迪',
    Svg: require('../../static/img/reflection.svg').default,
    description: (
      <>
        期望我的文章能够帮助到你。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
