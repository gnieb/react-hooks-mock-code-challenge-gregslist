import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listings, setListings] = useState ([])
const removeListingFromState = (doomedListing) => {
  setListings( [...listings].remove(doomedListing))
}

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then(r => r.json())
  .then(listingData => {
    setListings(listings => listingData)
  })
}, ([]))


  return (
    <div className="app">
      <Header />
      <ListingsContainer removeListingFromState= {removeListingFromState} 
      listings={listings}/>
    </div>
  );
}

export default App;
