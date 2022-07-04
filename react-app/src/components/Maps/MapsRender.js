import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGMapKey } from '../../store/maps';
import Maps from './Maps';
import './maps.css'

const MapsRender = () => {
  const key = useSelector((state) => state.map.googleAPIKey);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getGMapKey());
      console.log(key)
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }

  return (
    <Maps GMapKey={key} />
  );

};

export default MapsRender;
