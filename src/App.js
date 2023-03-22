import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Products from './Products';
import Cart from './Cart';

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Wrapper>
          <TitleWrapper>
            <h1>useReducer Hook Starter Project</h1>
          </TitleWrapper>
          <LinksWrapper>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </LinksWrapper>
          <Routes>
            <Route>
              <>
                <Route exact path="/" element={<Products />} />
                <Route exact path="/cart" element={<Cart />} />
              </>
            </Route>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: 'Roboto';
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
