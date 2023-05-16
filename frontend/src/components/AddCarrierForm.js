import React, { useState } from "react";
import axios from "axios";
import './AddForm.css';

function AddCarrierForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stream, setStream] = useState("");
  const [interest, setInterest] = useState("");
  const [link, setLink] = useState("");
  const [more, setMore] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, description, stream, interest, link, more };
    await axios.post("http://localhost:8000/api/carrier/add", data);
    setName("");
    setDescription("");
    setStream("");
    setInterest("");
    setLink("");
    setMore("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "10px" }}>

      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Stream:
        <input type="text" value={stream} onChange={(e) => setStream(e.target.value)} />
      </label>
      <br />
      <label>
        Interest:
        <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
      </label>
      <br />
      <label>
        Link:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <br />
      <label>
        More:
        <textarea value={more} onChange={(e) => setMore(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Carrier</button>
    </form>
  );
}

export default AddCarrierForm;
