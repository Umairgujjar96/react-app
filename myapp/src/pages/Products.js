import React from 'react';
import product from './data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
  return (
    <div className='container'>
      <h3 className='text-center'>Products Page</h3>
      <div className='row'>
        {product.map((item, i) => (
          <div key={i} className='col-md-4 col-sm-6 col-lg-3 p-3'>
            <Card className='mx-1' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button className='' variant="primary">Let's go</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
