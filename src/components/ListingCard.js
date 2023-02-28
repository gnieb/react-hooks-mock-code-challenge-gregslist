import React, {useState} from "react";

function ListingCard({image, description, location, id, removeListingFromState, listing}) {
const [isActive, setIsActive] = useState(false)

function handleActive () {
  setIsActive(isActive => !isActive)
}

function handleDelete () {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  })
  .then(r => r.json())
  .then(() => removeListingFromState(listing))
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div  className="details">
        {isActive ? (
          <button onClick={handleActive} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleActive} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
