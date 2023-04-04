import { useParams } from 'react-router-dom';
import CardDetails from '../components/cardDetails/CardDetails'; 
import React from 'react'

const DetailsCardPage = () => {
  const params = useParams();

  console.log('params', params)

  return (
    <section>
      <div>
        <CardDetails cardId={params.cardId}/>
      </div>
    </section>
  );
};

export default DetailsCardPage;



// import { useParams } from 'react-router-dom';
// import CardDetails from '../components/cardDetails/CardDetails'; 
// import React from 'react'

// const DetailsCityPage = () => {
//   const params = useParams();

//   return (
//     <section>
//       <div>
//         <CardDetails cityId={params.cityId}/>
//       </div>
//     </section>
//   );
// };

// export default DetailsCityPage;