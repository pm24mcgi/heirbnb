import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../../store/spots";

const SpotsList = () => {
    // return <h1>Spots</h1>
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state => state.spot))
    console.log(spots);
    // const spots = Object.values(useSelector(state => state.spots))
    // const spots = useSelector((state) => Object.values(state.spots));

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    if (!spots) {
        return (
            <h1>No Spots are being shown</h1>
        )
    } else {
        return (
            <div>
                <h2>Spots</h2>
                {spots.map(spot => {
                    return (
                        <div key={spot.id}>
                            <div>{spot.description}</div>
                            <div>{spot.host.username}</div>
                            <div>{spot.bedrooms}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SpotsList;