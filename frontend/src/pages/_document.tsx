import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}