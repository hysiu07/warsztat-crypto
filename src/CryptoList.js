import React from 'react';
import './CryptoList.css';

function CryptoList(props) {
	return (
		<div className='CryptoList'>
			<ul className='TheList'>
				<li>
					<span className='CryptoLabel'>Last rate: </span>
					<span className='CryptoRate green'>999&uarr; </span>
					<span className='CurrencyTicker'>USD </span>
					<span className='CurrencySymbol'>$ </span>
				</li>
				<li>
					<span className='CryptoLabel'>Last rate: </span>
					<span className='CryptoRate red'>777&darr; </span>
					<span className='CurrencyTicker'>GBP </span>
					<span className='CurrencySymbol'>&pound;</span>
				</li>
			</ul>
		</div>
	);
}

export default CryptoList;
