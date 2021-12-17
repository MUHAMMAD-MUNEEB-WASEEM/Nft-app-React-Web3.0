import './App.css';
import CollectionCard from './components/CollectionCard/CollectionCard';
import Header from './components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PunkList from './components/PunkList/PunkList';


function App() {

  const [punkListData, setPunkListData] = useState([])

  useEffect(()=>{
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x8Dd856216f973B9D1E1e764514Fc7B6c714DFED1&order_direction=asc')
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }

    return getMyNfts()
  }, [])



  return (
    <div className='app'>
      <Header/>
      <PunkList punkListData={punkListData}/>
    </div>
  );
}

export default App;
