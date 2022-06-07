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
      <br></br>
      <img src="../imagenes/unete.png" width="300" height="100"></img>
      <br></br>
      <div class="d-inline-flex p-3 bg-secondary text-white">
  <div class="p-2 bg-primary"><button type="button" class="btn btn-primary btn-lg btn-block">Login</button></div>
  &nbsp;
  <div class="p-2 bg-primary"><button type="button" class="btn btn-primary btn-lg btn-block">Register</button></div>
</div>
    </div>
  </div>
</div>
</div>




        </html>
    </Container>
}

export default Inicio;