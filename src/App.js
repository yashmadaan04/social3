import './App.css';
import axios from "axios";


const feeds = () => {
  axios.get("https://api.linkedin.com/v2/me")
       .then((res)=> {
          feeds(res.data);
       });
}


function App() {
  return (
    <div className="App">
      

      <button className='nf' onClick={feeds}> New Feeds </button>





    </div>
  );
}

export default App;
