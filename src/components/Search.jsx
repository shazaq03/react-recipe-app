import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [Value,setValue] = useState("");
    const Navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        setValue("");
        Navigate("/search/" + Value);
    }

  return (
    <Formstyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input type="text" value={Value} onChange={(e) =>{setValue(e.target.value)}}/>
        </div>
    </Formstyle>
  )
}


const Formstyle = styled.form`
    margin: 0rem 20rem;
    width:50%;
    transform: translate(-25%, 0%);
    
    div{
        width:100%;
        position:relative;

    }
   

    input{
        border:none;
        outline:none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color:#f5f5dc;
        padding:1rem 3rem;
        border-radius: 1rem;
        width:100%;
    }
    svg{
        position: absolute;
        top:50%;
        left:0%;
        transform: translate(100%, -50%);
        color: #f5f5dc;
    }

`;

export default Search;