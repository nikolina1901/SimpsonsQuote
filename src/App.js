import "./App.css";
import axios from "axios";
import React from "react";
function App() {
  const [simpsonsQote, setSimpsonsQuote] = React.useState({});
  function getSimpsonsQuote() {
    // Make a request for a user with a given ID
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(function (response) {
        // handle success
        setSimpsonsQuote(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <div className="App">
      <button onClick={getSimpsonsQuote}>Quote Card</button>
      <img src={simpsonsQote.image} alt={simpsonsQote.character} />
      <h1>{simpsonsQote.quote}</h1>
      <p>{simpsonsQote.character}</p>
    </div>
  );
}

export default App;
