import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Movie from './components/Movie';
function App() {
  const [data, setData] = useState([]);
  const [toggle,setToggle] = useState(false)
  const [disp,setDisp] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='App'>   
            {!toggle &&data.map(item => (
        <div
        onClick={()=>{
          setToggle(true)
          setDisp(item)
        }} 
        key={item.show.id}>
          <Card border="secondary" >
        <Card.Header>Status : {item.show.status}</Card.Header>
        <Card.Body>
          <Card.Title>{item.show.name}</Card.Title>
          <Card.Text>Language : {item.show.language}</Card.Text>
          <Card.Text>type : {item.show.type}</Card.Text>
        </Card.Body>
      </Card>
      <br />
        </div>
      ))}{
        toggle && <Movie item={disp} back={setToggle}/>
      }
    </div>
  );
}

export default App;
