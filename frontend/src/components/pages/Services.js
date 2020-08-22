import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../../App.css'
import CardItem from '../CardItem';


const Services = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      const fetchArticles = async () => {
          try {
              const res = await axios.get(`${process.env.REACT_APP_API_URL}/api`);
              setArticles(res.data);
          }
          catch (err) {

          }
      }

      fetchArticles();
  }, []);

  const getArticles = () => {
      let list = [];
      let result = [];

      articles.map(article => {
          return list.push(
            <CardItem
              src={article.image}
              text={article.content}
              label={article.label}
              path='/services'
            />
          );
      });

      for (let i = 0; i < list.length; i += 2) {
        result.push(
            <div key={i} className='row mb-2'>
                <div className='col-md-6'>
                    {list[i]}
                </div>
                <div className='col-md-6'>
                    {list[i+1] ? list[i+1] : null}
                </div>
            </div>
        );
      }

    return result;
  };

  return (
    <div className='mt-5'>
      {getArticles()}
    </div>
  )
};

export default Services;