import React, {Component} from 'react';
import { Router } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './style.css';

class Products extends Component{

    render(){
        return(
            <div className='pro'>
                <h1>Products</h1>
                <p>Products Are Availaible Here</p>
      
  <Button variant="primary">Primary</Button>

            </div>
        )
    }
}
export default Products