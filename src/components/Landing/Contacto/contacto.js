// CSS:
import './contacto.css';
import google from 'images/google-app.png';
import app from 'images/app-store.png';
import smartphone from 'images/smartphone.png';

const Contacto = () => (
  <div>
    <section className="rutinas" id="rutinas">
      <div className="row pt-5">
        <h1 className="col-12 text-center pb-5">Rutinas</h1>
      </div>
      <div className="container-fluid px-0">
        <div id="carousel1" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel1" data-slide-to={0} className="active" />
            <li data-target="#carousel1" data-slide-to={1} />
            <li data-target="#carousel1" data-slide-to={2} />
          </ol>
          <div className="carousel-inner bg-info video" role="listbox">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/AlNcwYie7bI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/INvBch6PTVo" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/ZyaqjkuWYYU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/STypt0Idtvw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/nuMlM9L_PP4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bg-info rounded-circle p-2 shadow d-block" aria-hidden="true" />
          </a>
          <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
            <span className="carousel-control-next-icon bg-info rounded-circle p-2 shadow d-block" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
    <section className="app" id="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 order-last content-app">
            <img src={smartphone} className="img-fluid" alt="smartphone" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 content-app">
            <h1>DOWNLOAD OUR APP</h1>
            <p>Si prefieres tenernos siempre a mano, descarga nuestra app desde la cual podrás acceder
              a tus rutinas y podrás conseguir puntos diarios que serán canjeables en futuras compras.
              ¡No te lo pierdas!</p>
            <a href="https://play.google.com"><img src={google} alt="google-app" /></a>
            <a href="https://www.apple.com"><img src={app} alt="app-store" /></a>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-form" id="contact">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h1>Contacto</h1>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 right">
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" placeholder="tucorreo@gmail.com" />
              </div>
              <div className="form-group">
                <textarea className="form-control form-control-lg"/>
              </div>
              <input type="submit" className="btn btn-secondary btn-block" defaultValue="Enviar" />
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>

);
export default Contacto;