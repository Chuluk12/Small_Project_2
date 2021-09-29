import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { CartFill, Grid3x3GapFill } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { getProductById, addToCartById } from '../../states/commerce/action'

const Component = props => {
	const { getProductById, product, addToCartById } = props;
	const { match } = useRouter();

	useEffect(() => {
		getProductById(match.params.id);
	}, [match.params.id, getProductById]);

	const onAddToCart = () => {
		addToCartById(match.params.id);
        console.log(onAddToCart)
	};

	return (
		<>
        <div className="container-2">
                <div className="color">
                    <div className="image">
                        <div className="mySlides fade">
                            <img 
                            src={product.image}>
                            </img>
                        </div>
                    </div>    
                    <div className="sliding">
                        <a className="prev">&#10094;</a>
                        <a className="next">&#10095;</a>
                    </div>
                </div>
                <div className="box">
                    <div className="awesome">
                    <CartFill className="cart"/>
                        <h5 className="logo"> {product.qty} </h5>
                        <div className="goback">
                            <h1>GO BACK</h1>
                        </div>
                    </div>
                    <div className="text1">
                        <div className="name">
                            <h1> {product.color} </h1>
                            <span> {product.brand} </span>
                        </div>
                        <div className="harga">
                            <p> Rp. {product.price} </p>
                            <span>Rp.70.000</span>
                        </div> 
                        <div className="paragraph">
                            <p>Kacamata tampan dan berani</p> <br/>
                            <p>{product.description}</p>
                        </div>
                        <div className="size">
                            <p> Size : </p> 
                            <select> 
                                <option>Medium</option>
                                <option>Small</option>
                                <option>Big</option>
                            </select>
                        </div>
                        <div className="mens">
                            <p>Pria<br/>100% Cotton</p>
                        </div>
                        <div className="add">
                        <Button onClick={onAddToCart}> ADD TO CART </Button>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="footer">
                <Grid3x3GapFill />
            </div> 
		</>
	);
};

const mapStateToProps = state => ({
	product: state.shop.product,
});

const mapDispatchToProps = dispatch => ({
	getProductById: id => dispatch(getProductById(id)),
	addToCartById: id => dispatch(addToCartById(id)),
});

const DetailShop = connect(mapStateToProps, mapDispatchToProps)(Component);

export { DetailShop };