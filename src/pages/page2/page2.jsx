import { Button } from 'react-bootstrap';
import React from 'react';
import { CartFill, Grid3x3GapFill, Search } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

const Component = props => {
	const { products } = props;
	const { history } = useRouter();

	return products && products.length > 0 ? (
		<>
			<div className="wrapper2">
                <div className="header3">
                    <h1>Toko Online Kaca Mata</h1>
                </div>
                <div className="cart">
                    <CartFill className="cartfill"/>
                </div>
                <div className="input">
                    <input type="text" placeholder="PRODUCT" />
                        <Search className="search"/>
                </div>
                
                <div className="container-3">
                    <div className="container-left">
                        <p>FEATURED</p>
                        <span>CATEGORY 1</span>
                        <p>CATEGORY 2</p>
                        <p>CATEGORY 3</p>
                        <p>CATEGORY 4</p>
                        <p>CATEGORY 5</p>
                    </div>
                    
                    <div className="container-center">
				        {products.map(product => {
                            return (          
                        <div className="kotak">
							<Button onClick={() => history.push(`/commerce/${product.id}`)}>
								<h1>{product.title} </h1>
                                <p>{product.name} </p> 
							</Button>
                        </div>
					        );
				        })}
                    
                    </div>
                    <div className="container-right">
                        <p>ALL</p>
                        <span>FILTER 1</span>
                        <p>FILTER 2</p>
                        <p>FILTER 3</p>
                        <p>FILTER 4</p>
                        <p>FILTER 5</p>
                    </div>
                </div>
                <div className="number">
                    <div className="nomor">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Grid3x3GapFill />
            </div> 
		</>
	) : (
		<>
			<div>todo kosong</div>
		</>
	);
};

const mapStateToProps = state => ({
	products: state.shop.products,
});

const ListShop = connect(mapStateToProps, null)(Component);

export { ListShop };