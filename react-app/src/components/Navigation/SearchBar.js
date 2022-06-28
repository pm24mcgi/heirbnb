import {BiSearchAlt} from 'react-icons/bi'

function SearchBar() {


  return (
    <div className="search-bar-container">
        <div className="search-clicker-container">
          <p> Anywhwere </p>
        </div>
        <div className="search-divider"></div>
        <div className="search-clicker-container">
          <p>Any week</p>
        </div>
        <div className="search-divider"></div>
        <div className="search-clicker-container">
          <p>Guests</p>
        </div>
        <div className="search-btn"> <BiSearchAlt /> </div>
    </div>
  )
}


export default SearchBar;
