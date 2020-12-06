import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import '../Loading.css';
import './Stats.css';
import Image from '../../components/Image';

const Stats = () => {
  const {pokeId} = useParams();
  console.log(pokeId);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.setTimeout(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
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
  }, [pokeId]);

  console.log(data);

  return (
    <div>
      {data.length === 0 ? (
        <img src={require("../../pokeball.png").default} className="spin" alt="pokeball" />
      ) : (
        <table className="table" align="center">
          <thead>
            <tr>
              <th>
                <Image src={require('../../pokeapp.png').default} alt="pokeapp" 
                       widthLoading="100px" heightLoading="100px" 
                />
              </th>
            </tr>
          </thead>
          <br />
          <tbody>
            <div align="center">
              <table className="statsRow">
                <tr className="statsRow">
                  <td className="statsCell">
                  <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
                            + pokeId + '.png'} 
                      alt={pokeId} widthLoading="214px" heightLoading="214px" widthImg="300px" heightImg="300px"
                  />
                  </td>
                </tr>
                <tr className="statsRow">
                  {data.forms.map(data => (
                    <div key={data.id}>
                      <td className="statsCell">NAME</td>
                      <td className="statsCell">{data.name.toUpperCase()}</td>
                    </div>
                  ))}
                  {data.stats.map(data => (
                    <div key={data.id}>
                      <td className="statsCell">{data.stat.name.toUpperCase()}</td>
                      <td className="statsCell">{data.base_stat}</td>
                    </div>
                  ))}
                </tr>
              </table>
              <br />
              <Link className="nav-link" to="/">
                <Image src={require("../../back_button.png").default} alt={"back_button"}
                      widthLoading="100px" heightLoading="100px" 
                />
              </Link>
            </div>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Stats;
