import './Main.css'
import instagramLogo from '../../assets/owner/instagram.png'
import twitterLogo from '../../assets/owner/twitter.png'
import moreIcon from '../../assets/owner/more.png'
import githubIcon from '../../assets/owner/github.png'
import { useEffect, useState } from 'react'

function Main({ selectedPunk, punkListData}) {

    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    return (
        <div>
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk'
                            src={activePunk.image_original_url}
                        />
                    </div>
                </div>
                <div class='punkDetails' style={{ color: '#fff' }}>
                    <div className='title'> {activePunk.name}
                        {/* <span className='itemNumber'>.#{activePunk.token_id}</span> */}
                    </div>
                    <div className='owner'>
                        <div className="ownerImageContainer">
                            <img src={activePunk.owner.profile_img_url} />
                        </div>
                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div>{activePunk.owner.address}</div>
                                <div className='ownerHandle'>
                                    {activePunk.asset_contract.name}
                                </div>
                            </div>


                            <a href="https://www.instagram.com/leadastaire/" target="_blank">
                                <div className="ownerLink">
                                    <img src={instagramLogo} alt='' />
                                </div>
                            </a>

                            <a href='https://twitter.com/leadastaire' target="_blank">
                                <div className="ownerLink">
                                    <img src={twitterLogo} alt='' />
                                </div>
                            </a>

                            <a href='https://github.com/MUHAMMAD-MUNEEB-WASEEM' target="_blank">
                                <div className="ownerLink">
                                    <img src={githubIcon} alt='' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main
