// CSS:
import './header.css';
import logo from 'images/logo.png';

const Header = () => (
	<header className="header fixed-top" id="header">
		<div className="container">
			<ul className="navbar" id="lista">
				<img src={logo} width={100} height={70} alt="logo" />
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#team">Equipo</a>
				<a href="#servicios">Servicios</a>
				<a href="#contact">Contacto</a>
			</ul>
		</div>
		<div>
		</div>
	</header>
);
export default Header;