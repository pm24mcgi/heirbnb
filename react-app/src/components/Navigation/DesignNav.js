import {NavLink} from 'react-router-dom';


function DesignNav(){
  const DESIGN_IMAGE = ['AmazingPools', 'Castles', 'CountrySide', 'Design',
  'IconicCities', 'Islands', 'LakeFront', 'Luxe', 'Mansions','Vineyards'];

  const DESIGN_HEADER =['Amazing Pools', 'Castles', 'Country Side', 'Design',
  'Iconic Cities', 'Islands', 'Lake Front', 'Luxe', 'Mansions','Vineyards'];

  const DESIGN_URL =['Amazing_Pools', 'Castles', 'Country_Side', 'Design',
  'Iconic_Cities', 'Islands', 'Lake_Front', 'Luxe', 'Mansions','Vineyards'];

  return (
    <div className="design-nav">
      {DESIGN_IMAGE.map( (design, idx) =>(
        <NavLink to={`/spots/types/${DESIGN_URL[idx]}`}key={design}>
        <img src={`/images/types/${design}.jpeg`} alt={`${design}`}/>
        <p>{DESIGN_HEADER[idx]}</p>
      </NavLink>
        ))}

    </div>

  )
}

export default DesignNav;
