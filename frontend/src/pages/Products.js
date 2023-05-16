import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './Product.css';

import "../App.css";
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");

  React.useEffect(() => {
    axios.get('http://localhost:8000/api/carriers')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleReadMoreClick = (productId) => {
  // Store the product ID in session
  sessionStorage.setItem('productId', productId);

  // Redirect the user to the new page
  window.location.href = '/services';

};


  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  if (sortBy) {
    filteredProducts.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div className="products-container">
      <div className="products-filter">
        <TextField
          id="search-bar"
          label="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          variant="outlined"
        />
        <FormControl variant="outlined" sx={{ marginLeft: '20px' }}>
          <InputLabel id="sort-by-label">Sort By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            onChange={handleSortByChange}
            label="Sort By"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="className">Price</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="products-cards">
        {filteredProducts.map(product => (
          <Card key={product.id} sx={{ width: '100%', marginBottom: '20px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
               {product.stream}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
               {product.interest}
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={() => handleReadMoreClick(product.id)}>Read More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
