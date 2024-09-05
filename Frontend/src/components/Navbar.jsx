import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCartState } from './ContexReducer';

function Navbar() {
    const data = useCartState();
    const [cartview, setCartview] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <>
            <nav
                id='navbar'
                className='navbar navbar-expand-lg navbar-dark'
                style={{ backgroundColor: '#03fc03', position: 'fixed', top: 0, zIndex: 5, width: '100%' }}
            >
                <div className='container-fluid'>
                    <NavLink className='navbar-brand' style={{ fontFamily: 'cursive', fontSize: '24px' }} to='/'>
                        CraveCart
                    </NavLink>
                    <button
                        className='navbar-toggler'
                        type='button'
                        onClick={handleNavCollapse}
                        aria-controls='navbarNav'
                        aria-expanded={!isNavCollapsed}
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
                        id='navbarNav'
                        style={{ justifyContent: 'space-between' }}
                    >
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink
                                    className='nav-link active'
                                    aria-current='page'
                                    to='/'
                                    style={{ color: '#001a36', fontWeight: 'bold', fontFamily: 'Poppins' }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            {localStorage.getItem('authToken') && (
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link active'
                                        aria-current='page'
                                        to='/myOrder'
                                        style={{ color: '#001a36', fontWeight: 'bold', fontFamily: 'Poppins' }}
                                    >
                                        My Orders
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                        {!localStorage.getItem('authToken') ? (
                            <div className='d-flex'>
                                <NavLink className='btn bg-white nav-link mx-2' style={{ color: 'black' }} to='/login'>
                                    Log In
                                </NavLink>
                                <NavLink className='btn bg-white nav-link' style={{ color: '#001a36' }} to='/signup'>
                                    Sign up
                                </NavLink>
                            </div>
                        ) : (
                            <div className='d-flex'>
                                <div>
                                    <div
                                        className='btn bg-info mx-1 text-white'
                                        onClick={() => setCartview(true)}
                                    >
                                        My Cart
                                        <Badge className='mx-1' pill bg='warning'>
                                            {data.length}
                                        </Badge>
                                    </div>
                                    <div>
                                        {cartview && (
                                            <Modal onClose={() => setCartview(false)}>
                                                <Cart />
                                            </Modal>
                                        )}
                                    </div>
                                </div>
                                <div className='btn bg-danger text-white' onClick={handleLogout}>
                                    Log Out
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
