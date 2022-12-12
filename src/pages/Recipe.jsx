import React from 'react';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function Recipe() {

  let params = useParams();
  let recipeId = params.id;

  const [recipe, setrecipe] = useState([]);
  const [activeTab, setactiveTab] = useState("instructions");


    useEffect(() =>{
        getrecipe(recipeId);
        
    },[recipeId]);

  const getrecipe = async (recipeId) =>{

      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = response.data;

      
      setrecipe(data);
      

  }

  return (
    <DetailWrapper
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <SButton className={activeTab === "instructions" ? "active" : ""} 
          onClick={() => {setactiveTab("instructions")}}>
            Instructions
        </SButton>
        <SButton className={activeTab === "ingredients" ? "active" : ""}
        onClick={() => {setactiveTab("ingredients")}}>
          Ingredients
        </SButton>
        {activeTab === "instructions" && (
          <div>
            
            <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}>
            </h3>
          </div>

        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((item) =>{
              return <li key={item.id}> {item.original} </li>
            })}
          </ul>

        )}
      
        </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled(motion.div)`
  // margin-top:10rem;
  margin-bottom: 5rem;
  display:grid;
  grid-template-column: 1fr 1fr 3fr;
  gap:1rem;
  
  h2{
    margin-bottom: 2rem;
  }
  
  .active{
    background:linear-gradient(35deg, #494949, #313131);
    color:#f5f5dc;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top: 2rem;
  }

`;

const SButton = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #333;
  margin-right:1rem;
  font-weight: 600;
  cursor:pointer;

  

`;

const Info = styled.div`
  // display:flex;
  // align-items:center;
  // justify-content: space-around;
  
`;

export default Recipe;