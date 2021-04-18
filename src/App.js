import './css/App.css'
import Row from './Components/Row'
import request from './request'
import Banner from './Components/Banner'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="app">
      {/* NAV BAR */}
      <Nav />
      {/* BANNER */}
      <Banner />
      {/* ROWS OF THE APP */}
     <Row 
      title="NETFLIX ORIGINALS" 
      fetchURL={request.fetchNetflixOriginals}
      isLargeRow   // by default it take the value to true 
      />
     <Row title="Trending Now" fetchURL={request.fetchTrending}/>
     <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
     <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>
     <Row title="Documentaires" fetchURL={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
