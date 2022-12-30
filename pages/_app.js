import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { initStore } from '../store';

class MyApp extends App {
	constructor(props){
		super(props);

		this.state = {
			isAndroidApp: false
		}
	}

	static async getInitialProps(ctx) {
        const { isServer, store } = ctx;

		return {};
	}

	render() {
		const { store, pageProps, Component } = this.props;

		return (
			<>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</>
		);
	}
}


export default withRedux(initStore)(withReduxSaga(MyApp));
