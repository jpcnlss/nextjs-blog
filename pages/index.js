import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>10 Things That Require Zero Talent

1. Being On Time
2. Making An Effort
3. Being High Energy
4. Having A Positive Attitude
5. Being Passionate
6. Using Good Body Language
7. Being Coachable
8. Doing A Little Extra
9. Being Prepared
10. Having A Strong Work Ethic.</p>
        
      </section>
    </Layout>
  );
}
