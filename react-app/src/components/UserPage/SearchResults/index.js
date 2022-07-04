import SpotsLayout from "../../Spots/SpotsLayout";

function SearchResults({ filtered }) {

  return (
    <>
      {filtered.length ?
        <SpotsLayout spots={filtered} /> :
        <h2>There is currently no available homes. Try Again!</h2>
      }
    </>
  )
}

export default SearchResults;
