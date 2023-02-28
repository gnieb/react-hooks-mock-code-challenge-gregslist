import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listings, setListings] = useState ([])


useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then(r => r.json())
  .then(listingData => {
    setListings(listings => listingData)
  })
}, ([]))

const removeListingFromState = (doomedListing) => {
  const updatedListings = listings.filter((listing) => listing.id !== doomedListing.id);
  setListings(updatedListings);
}

  return (
    <div className="app">
      <Header />
      <ListingsContainer removeListingFromState= {removeListingFromState} 
      listings={listings}/>
    </div>
  );
}

export default App;
