import React, { useMemo, useEffect } from 'react'
import './cardlist.css'

import { useProducts } from '../../productContext'
import Card from '../card/Card'
import debounce from 'lodash.debounce';


function Cardlist() {
  const { allproducts, currentCategory, categorizedproduct, searchquery, handlesearchChange } = useProducts();

  const mainproducts = (currentCategory && currentCategory !== 'all cate') ? categorizedproduct : allproducts;
  let displaying = mainproducts;

  if (searchquery !== "") {
    displaying = mainproducts?.filter((product) => {
      return product?.title?.toLowerCase().includes(searchquery);
    });
  }

  const debouncedResults = useMemo(() => {
    return debounce(handlesearchChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className='cards-containers'>
      {displaying && displaying.map(((pro, idx) => (
        <Card key={idx} product={pro} />
      )))}
    </div>
  )
}

export default Cardlist
