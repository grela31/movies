import { Container } from "@mui/system";
import Carrusel from "../components/Carrusel";

function Inicio() {

    return <Container>
<html>
<div className="body">
<div className="container">
  <div className="row">
    <div className="col-sm-8">
      <br></br>   
<Carrusel></Carrusel>
    </div>
    <div className="col-sm-4">
    <br></br>
    <img src="../imagenes/logo.png"  width="400" height="200"></img>
    <hr></hr>
      <p>En GrelaFilms encontraras una gran lista de peliculas, podras agregar si no estan y eliminar las que esten mal,
        las 10 mejores peliculas segun nuestro criterio y mucho mas a que esperas para unirte a la familia de cinefilos! 
      </p>

      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>

</ul>
      <hr></hr>
    </div>
  </div>
</div>
</div>




        </html>
    </Container>
}

export default Inicio;