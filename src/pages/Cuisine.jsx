import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Cuisine() {

    let params = useParams();
    let type = params.type;

    const [cuisine, setcuisine] = useState([]);

    const getCusine = async (type) =>{

        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`);
        const data = response.data;

        
        setcuisine(data.results);
        
        
    }

    useEffect(() =>{
        getCusine(type)
    }, [type]);

  return (
    <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        {cuisine.map((item) =>{
            return(
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            );
        })}
    </Grid>
  )
}



const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;

`;

const Card = styled.div`
    cursor:pointer;
    img{
        width:100%;
        border-radius:2rem;

    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding:1rem;
    }

`;


export default Cuisine