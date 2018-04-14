import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div className="footer">
				<div className="message">
					<h3>Message</h3>
					<p>To get in touch, leave us a message and we'll get back to you as soon as possible</p>
					<textarea></textarea>
					<a href="#">Send</a>
				</div>
				<div className="legal">
					<h3>Legal</h3>
					<a href="#">Terms of Use</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Security</a>
				</div>
				<div className="account">
					<h3>Account</h3>
					<a href="#">My Account</a>
					<a href="#">Watchlist</a>
					<a href="#">Collections</a>
				</div>
			</div>
		);
	}
}

export default Footer;