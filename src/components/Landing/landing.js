import Header from './Header/header';
import Home from './Home/home';
import About from './About/about';
import Team from './Team/team';
import Footer from './Footer/footer';
const Landing = function() {
    // JSX:
    return (
        <main>
            <Header></Header>
            <Home></Home>
            <About></About> 
            <Team></Team>
            <Footer></Footer>
        </main>
    );
};
export default Landing;
