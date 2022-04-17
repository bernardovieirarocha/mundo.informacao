import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script
                    id="bootstrap-cdn"
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                ></script>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="true"
                ></link>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
