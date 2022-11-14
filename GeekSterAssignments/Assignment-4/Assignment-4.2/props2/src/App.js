import './App.css';
import MovieCard from './Components/MovieCard'; 
import imge1 from "./assets/m1.jpg";


function App() {
  const m1 = {
    imgm:imge1,
    name:"Bright",
    hero:"David Ayer",
    release:"2017",
    duration:"117 min",
    type:"Action, Crime, Fantacy",
    about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum quos aliquid! Totam, minus odit molestiae quia magnam assumenda perspiciatis vitae consectetur provident tempore, aperiam, suscipit voluptas. Maxime impedit saepe error blanditiis quam voluptatibus aut excepturi. Asperiores recusandae quas beatae distinctio modi cupiditate voluptatem, quis ut magni inventore. Fuga, voluptatum?"
  };
  return (
    <div className="container">
        <i class="fa-regular fa-thumbs-up"></i>
       <MovieCard movieImg={m1} movieName={m1} movieHero={m1} movieRelease={m1} movieduration={m1} movieType={m1} movieAbout={m1}/>
       <MovieCard movieImg={m1} movieName={m1} movieHero={m1} movieRelease={m1} movieduration={m1} movieType={m1} movieAbout={m1}/>
       <MovieCard movieImg={m1} movieName={m1} movieHero={m1} movieRelease={m1} movieduration={m1} movieType={m1} movieAbout={m1}/>
       <MovieCard movieImg={m1} movieName={m1} movieHero={m1} movieRelease={m1} movieduration={m1} movieType={m1} movieAbout={m1}/>
       <MovieCard movieImg={m1} movieName={m1} movieHero={m1} movieRelease={m1} movieduration={m1} movieType={m1} movieAbout={m1}/>
      
    </div>
  );
}

export default App;
