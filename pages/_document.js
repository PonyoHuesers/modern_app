import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	constructor(props) {
		super(props);

		this.state = {
			clientType: props.client_type
		};
	}

	render () {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
