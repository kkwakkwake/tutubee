import axios from 'axios';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Layout from '../components/Layout';


const HomeContainer = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns:repeat(4,1fr);

  img {
    width: 200px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;


`;

const Home = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => setData(res.data));
  }, []);

  return (
    <>
      <Layout>
        <HomeContainer>

          {data && data.map((item) =>
            <ItemWrapper key={item.id}>
              <img src='img/filming.png' alt='thumbnail' />
              <span>{item.email}</span>
              <span>{item.address.street}</span>
              <span>{item.id}</span>
            </ItemWrapper>)}

        </HomeContainer>
      </Layout>
    </>
  );
};

export default Home;