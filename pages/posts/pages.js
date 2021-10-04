import Head from "next/head";
import Link from "next/link";

function pages (){

    return (
    <>
        <Head>
            <title>First Post</title>
        </Head>
        <Link href="/"><a>backPage</a></Link>
    </>
    );
}
export default pages;