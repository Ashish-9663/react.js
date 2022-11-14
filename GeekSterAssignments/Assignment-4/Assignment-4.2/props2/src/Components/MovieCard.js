function MovieCard(props) {
  return (
    <>
    <div className="cardContainer" style={{ backgroundImage: props.movieImg.imgm }}
    >
      <div className="moviedetails">
        <div className="movieDetailsText">
          <div className="imageLogo">
            <img src={props.movieImg.imgm} alt="no" className="movieImg" />
          </div>
          <div className="details">
            <h2 className="h2tag">{props.movieName.name}</h2>
            <p className="p1tag">
              {props.movieRelease.release},{props.movieHero.hero}
            </p>
            <div className="timetype">
              <h4 className="h4tag">{props.movieduration.duration}</h4>
              <p className="ptag">{props.movieType.type}</p>
            </div>
          </div>
        </div>
        <div className="movieAbout">
          <p className="p3tag">{props.movieAbout.about}</p>
        </div>
      </div>
      <div className="feedbackBtns">
        <button className="bottomButtons"><i class="fa-solid fa-thumbs-up"></i></button >
        <button className="bottomButtons"><i class="fa-solid fa-comment"></i></button >
        <button className="bottomButtons"><i class="fa-solid fa-share-nodes"></i></button >
      </div>
      <div className="rightBackgroungImage">
      <img src={props.movieImg.imgm} alt="no"  />
    </div>
    </div>
    
    </>
  );
}

export default MovieCard;
