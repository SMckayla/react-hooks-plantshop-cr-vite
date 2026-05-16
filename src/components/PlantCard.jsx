import React from "react";

function PlantCard({plant, toggleStock}) {
   const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image}alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      
      {true ? (
        <button onClick={() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
