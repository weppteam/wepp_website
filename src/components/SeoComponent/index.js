import React from "react";
import Head from "next/head";

const SeoComponent = ({ title, url, desc, index, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="wepp" />
      <meta name="keywords" content={keywords}/>
      <meta name="description" content={desc} />
      <meta
        property="og:image"
        content="https://wepp.vercel.app/favicon.ico"
      />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image:alt" content="wepp image" />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content="wepp" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="article:author" content="wepp" />
      <meta name="robots" content={index || "index,follow"} />
      <meta name="googlebot" content={index || "index,follow"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
  );
};

export default SeoComponent;
