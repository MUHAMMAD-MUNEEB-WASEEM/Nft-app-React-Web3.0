import './Header.css'
import punkLogo from '../../assets/header/cryptopunk-logo.png'
import searchIcon from '../../assets/header/search.png'
import themeSwitchIcon from '../../assets/header/theme-switch.png'

function Header() {
    return (
        <div className="header">
            
            <div className='logoContainer'>
                <img className='punkLogo' src={punkLogo} alt="logo"/>
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt="search icon"/>
                </div>
                <input className='searchInput' placeholder='Collection, item or user...' />
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='thmeSwitchContainer'>
                    <img src={themeSwitchIcon} alt="theme switch"/>
                </div>
            </div>

            <div className='loginButton'>
                GET IN
            </div>

        </div>
    )
}

export default Header
