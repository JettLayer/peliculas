export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
            <img src={props.img} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{props.titulo}</a></h6>
                <p className="rate"><i className="ion-android-star"></i>{props.calificacion}</p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> {props.time}<span>{props.age}</span><span>{props.release}</span></p>
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Stars: <a href="#">{props.actores}</a></p>
            </div>
        </div>
    )
}