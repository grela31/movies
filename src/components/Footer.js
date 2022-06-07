import React,{Component} from 'react';

class Footer extends Component{

render() {
 return (
     <div className="footer">
<br></br>
<footer className="bg-light text-center text-lg-start">
  
  <div className="container p-4">
    
    <div className="row">
    <div className="imagenfooter"><img src="../imagenes/logopagina.png"></img></div>
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
      <br></br>
      <div className='textofooter'>
        <p>
          Grela Films es una plataforma web en la que podras visualizar tus peliculas favoritas y leer una pequeña descripcion de estas, en el caso que no este 
          puedes agregarla!
        </p>
        </div>
      </div>
    
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase"> Redes Sociales</h5>
        <br></br>
        <ul className="iconosfooter">
          <li>
          <img src="../imagenes/instagram.png" width="15" height="15"></img><a href="#!" className="text-dark">Grela_Films</a>
          </li>
          <li>
          <img src="../imagenes/twitter.png" width="15" height="15"></img><a href="https://twitter.com/home" className="text-dark">Grela_Films</a>
          </li>
          <li>
          <img src="../imagenes/youtube.png" width="18" height="18"></img><a href="https://www.youtube.com/" className="text-dark">Grela Films</a>
          </li>
        </ul>
      </div>
   
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <div class="media border p-3">
  <div class="media-body">
    <h5>Jesus Varela Grela<small><br></br><i>Creador de GrelaFilms</i></small></h5>
    <p>Un espacio para compartir tus peliculas favoritas</p>
    </div> 
  </div>
</div>
     
    </div>
    
  </div>
 
  <div className="text-center p-3">
  aqui iria privacidad y esas cosas
  </div>
  
</footer>
     </div>
 );
}
}

export default Footer;