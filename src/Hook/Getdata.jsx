import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Getdata = () => {
    const [components, setcomponents] = useState([]);
    const [loading, setLoading] = useState(true);


  
    useEffect(() => {
      axios.get('http://localhost:5000/categories')
          .then(response => {
              setcomponents(response.data);
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              setLoading(false);
          });
  }, []);

      return [components,loading]


};

export default Getdata;