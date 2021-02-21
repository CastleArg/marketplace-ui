import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [marketplaces, setMarketPlaces] = useState([])
  useEffect(() => {
    // when the component loads, make an http request and get some data.
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/api/marketplaces`);
      const themarketplacejson = await response.json()

      // store data in the marketplaces variable declared above
      setMarketPlaces(themarketplacejson)
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <h1> my marketplaces!!</h1>
      <h2>you have {marketplaces.length} marketplaces</h2>
      {/* loop through the data and return a div */}
      {marketplaces.map(m => <div>hi I'm a div, my name is {m.name}, I have {m.admins.length} admins</div>)}
    </div>
  );
}

export default App;
