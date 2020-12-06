import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import '../pages/Loading.css'

const Image = (props) => {
    const [data, setData] = useState([]);
    let src = props.src;

    useEffect(() => {
        setTimeout(() => {
          axios.get(`${src}`)
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
    }, [src]);

    console.log(data);

    return (
        <div>
            {data.length === 0 ? (
                <img src={require('../pokeball.png').default} className="spin" alt="pokeball" 
                     width={props.widthLoading} height={props.heightLoading} />
            ) : (
                <img src={src} alt={props.alt} width={props.widthImg} height={props.heightImg} />
            )}
        </div>
    );
}

export default Image;