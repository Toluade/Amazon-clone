import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import previewImage from "../../public/Amazon-clone.png";

const currentURL = "https://amazon-toluade.vercel.app/";
const siteName = "Amazon Clone by ToluAde";
const pageTitle = "Amazon Clone";
const description = "Next.js | Tailwind CSS | Redux | Firebase | NextAuth";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>Amazon Clone - ToluAde</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
        {/* <p>{products}</p> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
