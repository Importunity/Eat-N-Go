import { Button, Card, CardContent, Divider, Typography } from '@material-ui/core';
import React from 'react';
import img2 from '../../../assets/images/img2.jpeg';
import img4 from '../../../assets/images/img4.jpeg';
import img5 from '../../../assets/images/img5.jpeg';
import img6 from '../../../assets/images/img6.jpeg';
import img7 from '../../../assets/images/img7.jpeg';

function ShopPage(props){
    const images = [img2,img4,img5,img6,img7];
    console.log(props.currentShop)
    return(
        <>
        <div className="shop-page-container">
            <div className="shop-page-header">
                <Typography variant="h4">
                    {props.currentShop.name}
                </Typography>
                <Typography variant="body1">
                    {props.currentShop.address} | {props.currentShop.state}
                </Typography>
            </div>
            <div className="shop-page-inner-container">
                <div className="shop-page-frame">
                    <div className="shop-page-frame-row">
                        {images.map((image, index) => {
                            return(
                                <div className="shop-page-frame-column" key={index}>
                                    <img src={image} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                <div className="shop-page-details">
                    <Card className="shop-card" >
                        <CardContent>
                            <Typography variant="h6">
                                Ratings and Reviews
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="shop-card shop-card-page">
                        <CardContent>
                            <Typography variant="h6">
                                Details
                            </Typography>
                            <Typography variant="overline">
                                about:
                            </Typography>
                            <Typography variant="body2">
                                {props.currentShop.description.toLowerCase()}
                            </Typography>
                            <Typography variant="overline">
                                price range:
                            </Typography>
                            <Typography variant="body2">
                                {props.currentShop.priceRange.map((price, index) => {
                                    return(
                                        <span key={price}>
                                                {index === 0? <> ${price} -  </>: <> ${price} </>}
                                        </span>
                                    )
                                })}
                            </Typography>
                            <Typography variant="overline">
                                Food Types:
                            </Typography>
                            <br />
                                {props.currentShop.tags.map((tag, index) => {
                                    return(
                                        <Typography style={{display: "inline-block"}} variant="body2" key={tag._id}>
                                            <span>
                                                {index !== props.currentShop.tags.length - 1 && props.currentShop !== undefined? <> {tag.tagName}, </>: <>{tag.tagName}</> }
                                            </span>
                                        </Typography>
                                    )
                                })}
                        </CardContent>
                    </Card>
                    <Card className="shop-card">
                        <CardContent>
                            <Typography variant="h6">
                                Location and Contact
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className="shop-page-review">
                    <Card className="default-card">
                        <div className="review-container">
                            <Button id="review-button"><Typography variant="overline">Write a review</Typography></Button>
                            <Typography className="review-item" variant="h5">Reviews</Typography>
                            <Divider className="review-item" variant="fullWidth" />
                        </div>
                    </Card>
                </div>
                <div className="shop-page-footer">
                    <Button className="default-button" variant="outlined" color="default" onClick={() => props.clearCurrentShop()}>Go back to shop listings</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopPage;