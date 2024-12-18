import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'antd/dist/reset.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBag, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header style={{ display: 'flex', marginLeft: '50px', backgroundColor: '#f8f9fa', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button style={{ marginRight: '10px', backgroundColor:"lawngreen", fontWeight:"bolder", fontSize:"18px",border:"0"}}>F</Button>
        <h5 style={{ margin: 0 , border:"10px"}}>OODI</h5>
      </div>
      <nav style={{ marginTop: '15px', marginLeft: '80px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', padding: 0, margin: 0 }}>
          <li className='li'>Home</li>
          <li>Menu</li>
          <li>Services</li>
          <li>Offers</li>
          <li className='icon_'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
          <li className='icon'><FontAwesomeIcon icon={faShoppingBag} /></li>
          <li>
            <button className="cta" style={{ border: 'none', backgroundColor: 'lawngreen', color: 'white', padding: '5px 10px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Contact Us <FontAwesomeIcon icon={faPhoneVolume} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
