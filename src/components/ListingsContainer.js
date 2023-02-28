import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListingFromState}) {
  
  const displayListing = listings.map(listing => {
      return (
        <ListingCard 
        {...listing} key={listing.id} 
        removeListingFromState={removeListingFromState} />
      )
    })
    
    return (
    <main>
      <ul className="cards">
        {displayListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
