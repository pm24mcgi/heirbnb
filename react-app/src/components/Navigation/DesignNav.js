import {NavLink} from 'react-router-dom';


function DesignNav(){
  const DESIGN_NAV = ['AmazingPools', 'Castles', 'CountrySide', 'Design',
  'IconicCities', 'Islands', 'LakeFront', 'Luxe', 'Mansions','Vineyards'];

  const DESIGN_HEADER =['Amazing Pools', 'Castles', 'Country Side', 'Design',
  'Iconic Cities', 'Islands', 'Lake Front', 'Luxe', 'Mansions','Vineyards'];

  return (
    <div className="design-nav">
      {DESIGN_NAV.map( (design, idx) =>(
        <NavLink to={`/spots/types/${design}`}key={design}>
        <img src={`/images/types/${design}.jpeg`} alt={`${design}`}/>
        <p>{DESIGN_HEADER[idx]}</p>

      </NavLink>
        ))}

    </div>

  )
}

export default DesignNav;
