import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function SearchResults() {

    let params = useParams();
    let searchterm = params.searchterm;

    const [Results, setResults] = useState([]);

    const getResults = async ( searchterm ) =>{

        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchterm}`);
        const data = response.data;

        
        setResults(data.results);
        
        
    }

    useEffect(() =>{
        getResults(searchterm);
    }, [searchterm]);

  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        {Results.map((item) =>{
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

export default SearchResults;