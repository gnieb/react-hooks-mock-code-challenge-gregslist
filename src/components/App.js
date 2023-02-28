import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listings, setListings] = useState ([]);
const [searchString, setSearchString] = useState('')


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

function handleSearch(aNewString) {
setSearchString(aNewString.toLowerCase())
}
const searchedListings = listings.filter (listingObj => {
  if (listingObj.description.toLowerCase().includes (searchString)) {
    return true
  }
})
  
 

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer removeListingFromState= {removeListingFromState} 
      listings={searchedListings}/>
    </div>
  );
}

export default App;
