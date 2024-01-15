import React from 'react';
import ComponentsOne from '../Components/ComponentsOne';
import Getdata from '../../../Hook/Getdata';

const Ram = () => {

    const [components, loading] = Getdata();

    const ram = components.filter(item => item.categories === 'ram')


    if (loading) {

        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>

    }
    return (
        <div>
             <div className='max-w-screen-xl mx-auto'>
            <ComponentsOne  item={ram}></ComponentsOne>
        </div>
        </div>
    );
};

export default Ram;