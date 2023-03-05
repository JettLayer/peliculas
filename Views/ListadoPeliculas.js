import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const totalPorPagina = 7;

  useEffect(() => {
    buscarPeliculas();
  }, []);


  const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json'

    var response = await fetch(url, {
      "method" : "GET",
      "mode" : "no-cors",
      "headers" : {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*"
      }
    });

    var json = await response.json();

    setPeliculas(json);
  }



  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / totalPorPagina);
  }

  let peliculasPorPagina = peliculas.slice((paginaActual - 1) * 
  totalPorPagina, paginaActual * totalPorPagina);
  
  return(
    <PageWrapper>

      <button onClick={buscarPeliculas}>Test</button>

      {peliculasPorPagina.map(pelicula => 
        <Pelicula
          img={pelicula.img}
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          time={pelicula.time}
          age={pelicula.age}
          release={pelicula.release}
        >
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />
    
    </PageWrapper>
  );
}

export default ListadoPeliculas;
