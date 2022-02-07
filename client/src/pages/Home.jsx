import React from 'react';
import Card from '../components/Card/Card';
import Carousel from '../components/Carousel/Carousel';
import SearchBar from '../components/SearchBar/SearchBar';

const Home = () => {

  const data = {
      tittle: 'Titulo',
      text: 'Texto',
      id: '61b21e5a960f9baae8e3ab80',
  };
    return (
        <>
            <Carousel />
            <SearchBar />
        <Card data={data}/>
        </>
    );
};

export default Home;
