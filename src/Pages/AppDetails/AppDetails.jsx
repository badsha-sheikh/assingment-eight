import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from '../../Components/DetailsCard/DetailsCard';

const AppDetails = () => {
    const {Id} = useParams();
    const appId = parseInt(Id)
    
    const appData = useLoaderData();
//   const dataId=  appData.map(data=>data.id);
//   console.log(dataId, appId)
   const singleApp = appData.find(app=>app.id === appId);
    
   
     
    return (
        <div>
        
            <DetailsCard Id={Id}  singleApp={singleApp}></DetailsCard>
        </div>
    );
};

export default AppDetails;