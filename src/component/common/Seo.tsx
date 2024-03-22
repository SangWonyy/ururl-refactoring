import Head from "next/head";

interface ISeoProps {
  tabTitle: string;
  title: string;
  description?: string;
  image?: string;
}

const Seo = ({ tabTitle, title, description, image }: ISeoProps) => {
  return (
    <Head>
      <title>{tabTitle}</title>
      <meta name="og:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:app:name:iphone" content="URURL" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="naver-site-verification" content="80e5aa29b8c44c29b2bcc4e4df281400a1c3476f" />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && <meta name="og:image" content={image} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};

export default Seo;
