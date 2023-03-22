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
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
