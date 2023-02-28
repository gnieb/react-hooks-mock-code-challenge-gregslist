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

function handleSearch(searchInput) {
  
  const updatedListings = listings.filter((listing) => {
  if (listing.description.toLowerCase().includes(searchInput.toLowerCase())) {
    return true
  } else {
    return false
  }
}
);
  setListings(updatedListings);
}

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer removeListingFromState= {removeListingFromState} 
      listings={listings}/>
    </div>
  );
}

export default App;
