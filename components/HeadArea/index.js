import Head from "next/head"

export default function HeadArea({
    title="",
    Description=""
}) {
    return(
        <Head>
            <title>{title}</title>
            <meta name="author" content="Sqwell Developers" />
            <meta name="description" content={Description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}