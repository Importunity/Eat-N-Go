import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import '../../../styles/shop.css';
import img2 from '../../../assets/images/img2.jpeg';
import ShopPage from './ShopPage';



function Shop(props){
    const[shops, setShops] = useState(null);
    const[currentShop, setCurrentShop] = useState(null);
    useEffect(() => {
        setShops(props.shops);
        props.changeNavColor("white")
    }, [props.shops])


    const clickedShop = (shop) => {
        setCurrentShop(shop);
    }

    const clearCurrentShop = () => {
        setCurrentShop(null);
    }
    return(
        <>
        {currentShop === null?
            <div className="container-fluid">
                <>
                    {shops !== null? (
                        <div className="shop-container">
                            {shops.map((shop, index) => {
                                return(
                                    <div key={shop._id}>
                                        <Card className="shop-card mb-3 container" onClick={() => clickedShop(shop)}>
                                            <CardHeader 
                                                title={<Typography variant="h5">{shop.name}</Typography>} 
                                                subheader={<Typography variant="subtitle2">{shop.state}</Typography>}
                                            />
                                            <img className="shop-media" alt="" src={img2} />
                                            <CardContent>
                                                <Typography>
                                                    {shop.description !== undefined? <>{shop.description.substring(0,200).toLowerCase()}</> : null}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}
                    </> 
            </div> : <ShopPage clearCurrentShop={clearCurrentShop} currentShop={currentShop} /> }
        </>
    )
}

export default Shop;