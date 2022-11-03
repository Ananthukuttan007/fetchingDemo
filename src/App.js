import './App.css';
import { Posts } from './components/Posts';
import axios from 'axios'
import { useState } from 'react';
function App() {
  const [searchItem, setSearchItem] = useState("");
  const [state, setState] = useState([]);
  const fetchData = () => {
    console.log(searchItem)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(async function (response) {
        setState(response.data.filter((value) => {
          if (searchItem === "") {
            return value
          }
          else if (value.title.includes(searchItem)) {
            return value
          }
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className='container'>
        <input onChange={(e) => { setSearchItem(e.target.value) }} className='search' type="text" />
        <button onClick={fetchData} className='submit'>Search</button>
      </div>
      <Posts state={state} />
    </>
  );
}

export default App;
