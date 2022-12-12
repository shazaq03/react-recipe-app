//import libraries
import styled from "styled-components";
import { Link } from "react-router-dom";

//import components
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { GiKnifeFork } from "react-icons/gi";



function App() {

  return (
    <div className="App">
      <Nav>
        <Logo to={'/'}><GiKnifeFork/>Shazaq's recipes</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: cursive;
`;

const Nav = styled.div`
  padding:4rem 0rem;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  cursor:pointer;

  svg{
    font-size:2rem;
  }
`;

export default App;
