// CSS:
//import './header.css';
//import logo from 'images/logo.png';

const Header = () => (
    <header>
        <header class="header fixed-top" id="header">
		<div class="container container2">
			<div class="row logo">
				<a class="navbar-brand" href="#home">
					<img width="90" height="70" alt="logo"/>
                
					<span>FitChallenge</span>
				</a>
		</div>
			<nav class="nav navbar-expand-lg navbar-light">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsing-navbar">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="collapsing-navbar">
					<ul class="navbar-nav" id="lista">
						<a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
						<a class="nav-item nav-link" href="#about">About</a>
						<a class="nav-item nav-link" href="#team">Equipo</a>
						<a class="nav-item nav-link" href="#servicios">Servicios</a>
						<a class="nav-item nav-link" href="#contact">Contacto</a>
	
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
								Redes Sociales
							</a>
							<div class="dropdown-menu">
								<a class="dropdown-item fab fa-instagram" href="https://www.instagram.com"></a>
								<a class="dropdown-item fab fa-facebook" href="https://www.facebook.com"></a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
	</div>

	</header>
    </header>
);
export default Header;