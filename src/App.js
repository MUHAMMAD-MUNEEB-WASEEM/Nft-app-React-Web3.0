import './App.css';
import CollectionCard from './components/CollectionCard/CollectionCard';
import Header from './components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [punkListData, setPunkListData] = useState([])

  useEffect(()=>{
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xe50eCC20ED475db70b5C320352524830BE65865B')
    }
  }, [])



  return (
    <div className='app'>
      <Header/>
      <CollectionCard id={0} name='Bandana Punk' traits={[{'value':7}]} image='https://ipfs.thirdweb.com/ipfs/bafybeiedqim46toomijrnua3xp45yh7jhas5cwf3k276yf3epyulrrrhey'/>
    </div>
  );
}

export default App;
