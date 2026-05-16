import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

   function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((newPlant) => {
        addPlant(newPlant);
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );


export default NewPlantForm;
