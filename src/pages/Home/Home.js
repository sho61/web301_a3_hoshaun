import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../Loading.css';
import './Home.css';
import Image from '../../components/Image';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.setTimeout(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        const { data } = response;

        setData(data);
      })
      .catch((error) => {
        console.log(error.response);
      }).then(() => {
        console.log('More!');
      });
    }, 1500);
  }, []);

  console.log(data);

  return (
    <div>
      {data.length === 0 ? (
        <img src={require('../../pokeball.png').default} className="spin" alt="pokeball" />
      ) : (
        <table className="table" align="center">
          <thead>
            <tr>
              <th><Image src={require('../../pokeapp.png').default} alt="pokeapp" 
                   widthLoading="100px" heightLoading="100px" />
              </th>
            </tr>
          </thead>
          <br />
          <tbody>
            <div class="grid">
              {data.results.map(data => (
                <div key={data.id} style={{textAlign: "center", border: "1px solid black"}}>
                  <Link className="nav-link" to={"/"+data.url.replace(/\D/g, '').substring(1)+"/stats"}>
                    <Image 
                      src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
                            + data.url.replace(/\D/g, '').substring(1) + '.png'}
                      alt={data.url.replace(/\D/g, '').substring(1)}
                      widthLoading="70px" heightLoading="70px"
                    />
                    <br></br>
                    {data.name}
                  </Link>
                </div>
              ))}
            </div>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
