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
        <p>During my internship at TwistResources Inc., I had the opportunity to immerse myself in the dynamic world of networking and troubleshooting. 
	  Each day was a valuable learning experience as I delved into the intricacies of managing and optimizing network systems. Not only did I gain 
	  hands-on experience in these crucial areas, but the team at TwistResources also generously imparted their knowledge on deploying in AWS, expanding 
		  my skill set significantly. Furthermore, the internship provided a fantastic platform for networking, both in terms of forging new friendships 
			  with fellow interns and professionals within the company. These connections have not only enriched my professional network 
				  but also added a personal dimension to my internship, making it an unforgettable experience.</p>
        
      </section>
    </Layout>
  );
}
