import styled from 'styled-components';
import useShop from './context/ShopContext';
import ProductCard from './ProductCard';

const Cart = () => {
  const { products, total } = useShop();

  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      {products.map((product, index) => (
        <ProductCard {...product} />
      ))}
    </>
  );
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
