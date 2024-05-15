import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Giving joy',
    Svg: require('@site/static/img/flowers1.svg').default,
    description: (
      <>
        Flowers spread joy with their vibrant colors and delicate beauty, 
        lifting spirits and brightening days with their enchanting presence.
      </>
    ),
  },
  {
    title: 'Inspire',
    Svg: require('@site/static/img/flowers2.svg').default,
    description: (
      <>
        Flowers inspire people through their beauty and resilience, igniting creativity and symbolizing hope.
        Their rich symbolism and ability to bloom amidst challenges evoke emotions and connect individuals
        to deeper meanings, fostering reflection and inspiration.
      </>
    ),
  },
  {
    title: 'Brightrn up everyday life',
    Svg: require('@site/static/img/flowers3.svg').default,
    description: (
      <>
         Their presence uplifts moods, creates a peaceful ambiance, 
         and reminds us to appreciate the simple joys found in nature, 
         ultimately enhancing our overall well-being and happiness.

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
