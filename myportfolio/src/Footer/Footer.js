import React from "react";
import "./Footer.css";

import logo1 from "../Image/logo1.png";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="footer__container">
			<a href="#" className="footer_logo">
				<img src={logo1} alt="Logo" className="footer-logo" />
			</a>

			<ul className="permalinks">

				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer_socials">
				<a href="https://www.instagram.com/ankeet_rimal/" target="_blank">
					<AiFillInstagram />
				</a>
				<a href="https://www.facebook.com/ankit.rimal.7468/" target="_blank">
					<BsFacebook />
				</a>
				<a href="https://www.linkedin.com/in/ankit-rimal-275908235/" target="_blank">
					<BsLinkedin />
				</a>
			</div>
			<div className="footer_copyright">
				<small>&copy; Ankit Rimal. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;