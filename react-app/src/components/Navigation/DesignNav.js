import {NavLink} from 'react-router-dom';
import pool from '../../images/types/pool.jpeg';
import castle from '../../images/types/castle.jpeg';
import country from '../../images/types/country.jpeg';
import design from '../../images/types/design.jpeg';
import iconic from '../../images/types/iconic.jpeg';
import island from '../../images/types/island.jpeg';
import lake from '../../images/types/lake.jpeg';
import luxe from '../../images/types/luxe.jpeg';
import mansion from '../../images/types/mansion.jpeg';
import vineyard from '../../images/types/vineyard.jpeg';

function DesignNav(){
  const DESIGN_IMAGE = ['AmazingPools', 'Castles', 'CountrySide', 'Design',
  'IconicCities', 'Islands', 'LakeFront', 'Luxe', 'Mansions','Vineyards'];

  const IMAGE = [pool, castle, country, design, iconic, island, lake, luxe, mansion, vineyard]

  const DESIGN_HEADER =['Amazing Pools', 'Castles', 'Country Side', 'Design',
  'Iconic Cities', 'Islands', 'Lake Front', 'Luxe', 'Mansions','Vineyards'];



  return (
    <div className="design-nav">
      {DESIGN_IMAGE.map( (design, idx) =>(
        <NavLink to={`/spots/types/${design}`}key={design}>
        <img src={IMAGE[idx]} alt={`${design}`}/>
        <p>{DESIGN_HEADER[idx]}</p>
      </NavLink>
        ))}

    </div>

  )
}

export default DesignNav;
