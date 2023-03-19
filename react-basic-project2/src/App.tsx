import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled/macro';
import Pagination from './components/Pagination';
import Skeleton from './components/Skeleton';
import Carousel from './components/Carousel';


interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline,
  __v: number;
}

interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Placeholder: React.FC = () => ( // <Item /> 에 대응하는 Placeholder 제작
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={220} />
    </ImageWrapper>
    <Info>
      <Skeleton width={150} height={29} rounded />
      <div style={{ height: '8px' }} />
      <Skeleton width={200} height={19} rounded />
    </Info>
  </Container>
)

const Item: React.FC = () => ( // 실제 보여줄 컨텐츠
  <Container>
    <ImageWrapper>
      <Image src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" />
    </ImageWrapper>
      <Info>
        <Title>Cat taking a nap</Title>
        <Description>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</Description>
      </Info>
  </Container>
)

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState<Array<Passenger>>([]);

  useEffect(() => {
    const fetch = async () => {
      const params = { page, size: 10 };
      const { data: { totalPages, data } } = await axios.get<Response>('https://api.instantwebtools.net/v1/passenger', { params });

      setTotalPages(totalPages);
      setItems(data)
    }

    fetch();
  }, [page]);

  useEffect(() => { // 임의로 로딩 상태 표현
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handlePageChange = (currentPage: number):void => {
    setPage(currentPage);
  }

  return (
    <>
      {/* Skeleton */}
      <Base>
        {
          loading ?  Array.from({ length: 25 }).map((_, idx) => (
            <Placeholder key={idx} />
            )) : Array.from({ length: 25 }).map((_, idx) => (
            <Item key={idx} />
            ))
          }
      </Base>

      {/* Carousel */}
      <Carousel />

      {/* Pagination */}
      <ul>
        {
          items.map((item: any) => {
            return <li key={item._id}>{item.name + '_' + item._id}</li>
          })
        }
      </ul>
      <Pagination count={totalPages} page={page} onPageChange={handlePageChange} />
    </>
  );
}

export default App;