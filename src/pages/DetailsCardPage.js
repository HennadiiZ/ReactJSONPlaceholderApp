import { useParams } from 'react-router-dom';
import CardDetails from '../components/cardDetails/CardDetails'; 
import React from 'react'

const DetailsCityPage = () => {
  const params = useParams();

  return (
    <section>
      <div>
        <CardDetails cityId={params.cityId}/>
      </div>
    </section>
  );
};

export default DetailsCityPage;