import React, { Component } from 'react';

class Error extends Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return {
			statusCode,
		};
	}

	getErrorMesage = () => {
		const { statusCode } = this.props;
		switch (parseInt(statusCode, 10)) {
		case 503:
			return {
				title: '503 Error',
				description: ['Sorry about that.', 'the server is unavailable.']
			};
		case 501:
			return {
				title: '501 Error',
				description: ['Sorry about that.', 'Your page is not implemented.']
			}
		case 404:
			return {
				title: 'Oops!',
				description: [`Sorry, we couldn't find the page you were looking for.`],
				isOneLine: true,
			}
		case 401:
			return {
				title: 'Oops! Error occurred',
				description: [`Sorry, something went wrong.`]
			}			
		default:
			return {
				title: 'Oops! Error occurred',
				description: [`Sorry, something went wrong.`]
			}
		}
	}

	render() {
		return (
			<div className="main-content errors-content">
				<div className="container info-container">
					{this.getErrorMesage()}
				</div>
				<style global jsx>{`	
          header {background: none;}
          .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before { background-color: #0c6; }
				`}</style>
			</div>
		);
	}
}


export default Error;
