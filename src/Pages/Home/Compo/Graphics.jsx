import React from 'react';
import Getdata from '../../../Hook/Getdata';
import ComponentsOne from '../Components/ComponentsOne';

const Graphics = () => {
    const [components, loading] = Getdata();

    const cpuu = components.filter(item => item.categories === 'graphics')


    if (loading) {

        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>

    }
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
                <ComponentsOne item={cpuu}></ComponentsOne>
            </div>
        </div>
    );
};

export default Graphics;