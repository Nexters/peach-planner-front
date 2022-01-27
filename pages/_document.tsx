import Header from "lib/pages/components/Header";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
    // for styled-component
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App { ...props } />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        { initialProps.styles }
                        { sheet.getStyleElement() }
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." />
                    <meta name="robots" content="ALL" />
                    <meta name="robots" content="웨딩플래너,웨딩업체,결혼준비,결혼,웨딩플래너업체" />
                    <meta name="author" content="피치플래너" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="웨딩플래너 비교서비스, 피치플래너" />
                    <meta property="og:description" content="한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." />
                    <meta property="og:image" content="/og_img.png" />
                    <meta property="og:url" content="http://peachplanner.com/" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}
