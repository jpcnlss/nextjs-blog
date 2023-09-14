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

<br>1. Being On Time</br>
<br>2. Making An Effort</br>
<br>3. Being High Energy</br>
<br>4. Having A Positive Attitude</br>
<br>5. Being Passionate</br>
<br>6. Using Good Body Language</br>
<br>7. Being Coachable</br>
<br>8. Doing A Little Extra</br>
<br>9. Being Prepared</br>
<br>10. Having A Strong Work Ethic.</br></p>
        
      </section>
    </Layout>
  );
}
