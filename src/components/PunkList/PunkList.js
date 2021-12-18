import CollectionCard from "../CollectionCard/CollectionCard"
import './PunkList.css'
function PunkList({punkListData, setSelectedPunk}) {
    return (
        <div className="punkList">
            {punkListData.map((punk)=>(
            <div key={punk.token_id} onClick={()=>setSelectedPunk(punk.token_id)}>
                    <CollectionCard
                    
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    price= {punk.last_sale?.payment_token?.eth_price}
                    image={punk.image_original_url}
                    
                    />
                </div>
            ))}
        </div>
    )
}

export default PunkList
