import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="theme-color" content="#0faa8a"/>
                    <meta name='apple-mobile-web-app-capable' content='yes'/>
                    <meta name='apple-mobile-web-app-status-bar-style' content='default'/>
                    <meta name='format-detection' content='telephone=no'/>
                    <meta name='mobile-web-app-capable' content='yes'/>
                </Head>
                <body className="dx-viewport">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
