function MovieCard(props) {
  return (
    <div
      className="cardContainer"
      style={{ backgroundImage: props.movieImg.imgm }}
    >
      <div className="moviedetails">
        <div className="movieDetailsText">
          <div>
            <img src={props.movieImg.imgm} alt="no" className="movieImg" />
          </div>
          <div>
            <h2 className="h2tag">{props.movieName.name}</h2>
            <p className="p1tag">
              {props.movieRelease.release},{props.movieHero.hero}
            </p>
            <div className="h4tag"><h4 >{props.movieduration.duration}</h4>
            {props.movieType.type}</div>
          </div>
        </div>
        <div className="movieAbout">
          <p className="p3tag">{props.movieAbout.about}</p>
        </div>
      </div>
      <div className="feedbackBtns">
        <button>share</button>
        <button>like</button>
        <button>comment</button>
      </div>
    </div>
  );
}

export default MovieCard;
