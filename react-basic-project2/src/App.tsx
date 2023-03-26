import styled from '@emotion/styled/macro';
import axios from 'axios';
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import Carousel from './components/Carousel';
import Modal from './components/Modal/Modal';
import Pagination from './components/Pagination';
import Skeleton from './components/Skeleton';
import useIntersectionObserver from './hooks/useInfiniteScroll';

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

interface Props {
  isLastItem: boolean;
  onFetchMorePassengers: () => void;
  children?: ReactNode | ReactNode[];
}

interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

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
  airline: Airline;
  __v: number;
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

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ModalButton = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 12px;
  color: #fff;
  background-color: #3d6afe;
  margin: 0;
  border: none;
  font-size: 24px;
  &:active {
    opacity: 0.8;
  }
`;

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
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

const Item2: React.FC<Props> = ({ children, isLastItem, onFetchMorePassengers }) => {
  const ref = useRef<HTMLDivElement | null>(null); // 감시할 엘리먼트
  const entry = useIntersectionObserver(ref, {});
  const isIntersecting = !!entry?.isIntersecting; // 겹치는 영역이 존재하는 지 여부

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMorePassengers(); // 목록의 마지막에 도달했을 때, 리스트를 더 불러오도록 요청한다.
  }, [isLastItem, isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        border: '1px dashed #000',
      }}
    >
      <div style={{ margin: 'auto' }}>{children}</div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState<Array<Passenger>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [page2, setPage2] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);

  const getPassengers = async () => {
    const params = { page2, size: 5 };

    try {
      const response = await axios.get('https://api.instantwebtools.net/v1/passenger', { params });

      const passengers = response.data.data;
      const isLast = response.data.totalPages === page2;

      setPassengers(prev => [...prev, ...passengers]);
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    !isLast && getPassengers();
  }, [page2]);

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
      {/* Infinite Scroll */}
      {
        passengers.map((passenger, idx) => (
          <Item2
            key={passenger._id}
            isLastItem={passengers.length - 1 === idx}
            onFetchMorePassengers={() => setPage(prev => prev + 1)}
          >{passenger.name}</Item2>
        ))
      }
      
      {/* Modal */}
      <ModalContainer>
        <ModalButton onClick={handleOpen}>OPEN</ModalButton>
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalBody>
            <h2>Text in a modal</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </ModalBody>
        </Modal>
      </ModalContainer>

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