import { Button, Divider, TextField, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import img2 from '../../../assets/images/img2.jpeg'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import useOutsideClick from '../../util/useClickOutside';



const ReviewPage = (props) => {
    const[info, setInfo] = useState({overall: 3, title: '', review: '', service: null, food: null, value: null})
    const infoChange = (event) => {
        setInfo({...info, [event.target.name]: isNaN(event.target.value)? event.target.value : parseInt(event.target.value)})
    }

    const submitForm = (event) => {
        event.preventDefault();
        const formData = formData();
        formData.append("overall",info.overall);
        formData.append("overall",info.title);
        formData.append("overall",info.review);
        formData.append("rating[0][service]", info.service)
        
    }
    return(
        <div id="review-page-container">
            <div className="reviews" >
                <div className="inner-review-page">
                    <Typography className="default-text" variant="h3">
                        {props.currentShop.name}
                    </Typography>
                    <Typography className="default-text" variant="caption">
                        {props.currentShop.address}
                    </Typography>
                    <br></br>
                    <img className="shop-media" alt="" src={img2} />
                    <Typography className="default-text" variant="h6">Your first-hand experiences really help other eaters. Thanks!</Typography>
                    <Divider ></Divider>
                    <Typography variant="subtitle2">Overall Rating</Typography>
                    <Rating name="overall" precision={1} defaultValue={info.overall} icon={<FiberManualRecordIcon fontSize="large"/>} onChange={infoChange} />
                    <div className="default-input">
                        <input name="title" className="input universal-input" placeholder="Title" onChange={infoChange} />
                        <textarea name="description" className="input universal-input" placeholder="Review" style={{resize: "none"}} rows="5" onChange={infoChange}></textarea>
                    </div>
                    <Typography className="default-text universal-input" variant="subtitle2">Click to select a rating</Typography>
                    <Divider></Divider>
                    <Typography className="universal-input" variant="body2">FOOD:</Typography>
                    <Rating name="food" value={info.food}  icon={<FastfoodIcon />} onChange={infoChange} />
                    <Typography  className="universal-input" variant="body2">SERVICE: </Typography>
                    <Rating name="service" value={info.service} icon={<RoomServiceIcon />} onChange={infoChange} />
                    <Typography className="universal-input" variant="body2">VALUE: </Typography>
                    <Rating name="value" value={info.value} icon={<AttachMoneyIcon />} onChange={infoChange} />
                    <Typography>Do you have photos to share? (optional)</Typography>
                    <Divider></Divider>
                    <input className="universal-input" type="file" multiple />
                    <br></br>
                    <Button id="review-page-btn" className="review-button" ><Typography variant="body1">Submit your review</Typography></Button>
                </div>
            </div>
            <div className="create">
                <div>
                    <Typography variant="subtitle2">
                        Recent Reviews
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default ReviewPage;