// import DocumentApp from 'next/document';
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

export default function Document(): JSX.Element {
  // async function getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  //   const initialProps = await DocumentApp.getInitialProps(ctx);
  //   return { ...initialProps };
  // }
  return (
    <Html lang="en">
      <Head>
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
