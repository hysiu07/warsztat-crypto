import React, { Component } from 'react';
import './Crypto.css';
import CryptoList from './CryptoList';
import axios from 'axios';

class Crypto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cryptoList: [],
		};
	}

	componentDidMount() {
		this.getCryptoDate();
	}

	getCryptoDate = () => {
		axios
			.get('https://blockchain.info/ticker', {
				mode: 'cors',
			})
			.then((res) => {
				const tickers = res.data;
				console.log(tickers);

				this.setState((state) => {
					let newCryptoList = [];

					for (const [ticker, cryptoRate] of Object.entries(tickers)) {
						let newCryptoObj = {
							currency: ticker,
							symbol: cryptoRate.symbol,
							buy: cryptoRate.buy,
							sell: cryptoRate.sell,
							lastRate: cryptoRate.last,
						};

						newCryptoList.push(newCryptoObj);
					}
					return ({
						cryptoList: newCryptoList,
					});
				});
                console.log(this.state.cryptoList);
			});
	};

	render() {
		return (
			<div className='Crypto'>
				<CryptoList cryptoList={this.state.cryptoList}/>
			</div>
		);
	}
}

export default Crypto;
