import '../NavBars/TopNavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function TopNavBar() {
    return (
        <div className="top-nav-bar">
            <div className="left">
                <HomeOutlinedIcon className='logo-icon' />
                <h2>OnePlace</h2>
            </div>

            <div className="right">
                <input type="text" className='search-bar' placeholder='Search Your team Here...' />
                <SearchIcon className='search-icon' />
            </div>
        </div>
    )
}

export default TopNavBar
