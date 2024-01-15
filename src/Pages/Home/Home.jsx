import React from 'react';

import Components from './Components/Components';
import According from './According/According';
import Banner2 from './Banner/Banner2';
import Latest from './Latest/Latest';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
         
            <Banner2></Banner2>
            <Components></Components>
            <Latest></Latest>
            <According></According>
        </div>
    );
};

export default Home;