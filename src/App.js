import './App.css';
import CollectionCard from './components/CollectionCard/CollectionCard';
import Header from './components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PunkList from './components/PunkList/PunkList';
import Main from './components/Main/Main';


function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(()=>{
    const getMyNfts = async () => {
      //Main Ethereum Network api
      const openSeaData = await axios.get('https://api.opensea.io/api/v1/assets?asset_contract_address=0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB&order_direction=asc')
      
      //Rinksbey testNet api
      
      // const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x8Dd856216f973B9D1E1e764514Fc7B6c714DFED1&order_direction=asc')
      
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }

    return getMyNfts()
  }, [])



  return (
    <div className='app'>
      <Header/>
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
        </>
      )}
    
    </div>
  );
}

export default App;
