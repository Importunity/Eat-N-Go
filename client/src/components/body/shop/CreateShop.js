import { Backdrop, Button, Fade, InputAdornment, makeStyles, Modal, TextField, Tooltip, Typography, Slider, Chip } from '@material-ui/core';
import React, { useState } from 'react';
import { addShop } from '../../../flux/actions/shop';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AddBoxIcon from '@material-ui/icons/AddBox';
import '../../../styles/shop.css';
import { Alert } from '@material-ui/lab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



const states = [
    "Alabama - AL",
    "Alaska - AK",
    "Arizona - AZ",
    "Arkansas - AR",
    "California - CA",
    "Colorado - CO",
    "Connecticut - CT",
    "Delaware - DE",
    "Florida - FL",
    "Georgia - GA",
    "Hawaii - HI",
    "Idaho - ID",
    "Illinois - IL",
    "Indiana - IN",
    "Iowa - IA",
    "Kansas - KS",
   "Louisiana - LA",
    "Maine - ME",
    "Maryland - MD",
   " Massachusetts - MA",
    "Michigan - MI",
    "Minnesota - MN",
    "Mississippi - MS",
    "Missouri - MO",
    "Montana - MT",
    " Nevada - NV",
   " New Hampshire - NH",
    "New Jersey - NJ",
   "New York - NY",
   " North Carolina - NC",
    "North Dakota - ND",
   " Ohio - OH",
    "Oklahoma - OK",
   " Oregon - OR",
   " Pennsylvania - PA",
    "South Carolina - SC",
   "South Dakota - SD",
   " Tennessee - TN",
    "Texas - TX",
   " Vermont - VT",
   " Virginia - VA",
   " West Virginia - WV",
   " Wisconsin - WI",
   " Wyoming - WY",
]


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: 500
    }
}))

function CreateShop(props){
    const[info, setInfo] = useState({name: '', description: '', link: '', state: states[0], address: '', phoneNumber: '',email: '', tags: [{tagName: ''}], priceRange: [20,40], storeHours: {from: '', to: ''}, image: null})
    const[tag, setTag] = useState('');
    const[errors, setErrors] = useState({tagError: '', nameError: ''});
    const classes = useStyles();

    const {auth} = props;
    const clear = () => {
        setInfo({
            name: '',
            description: '',
            link: '',
            state: [0],
            address: '',
            email: '',
            tags: [],
            priceRange: [20,40],
            storeHours: {},
            image: null
        })
    }
    const submitShop = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", info.name);
        formData.append("description", info.description);
        formData.append("link", info.link);
        formData.append("state", info.state);
        formData.append("address", info.address);
        formData.append("phoneNumber", info.phoneNumber);
        formData.append("email", info.email);
        for(var j = 0; j < info.tags.length; j++){
            formData.append(`tags[${j}][tagName]`, info.tags[j].tagName);
        }
        for(var i = 0; i < info.priceRange.length; i++){
            formData.append(`priceRange[${i}]`, info.priceRange[i])
        }
        formData.append("image", info.image);
        props.addShop(formData, auth.user.id === undefined? auth.user._id : auth.user.id);
        clear();
    }

    const changeTime = (event) => {
        setInfo({...info, storeHours: {...info.storeHours, [event.target.name]: event.target.value}})
    }

    const changePriceRange = (event, newValue) => {
        setInfo({...info, priceRange: newValue})
    }

    const tagChange = (event) => {
        setTag(event.target.value);
    }



    const addTag = () => {
        // check to see if the tag exists in the tag array
        const containsTag = info.tags.some(tagg => tagg.tagName === tag)
        if(info.tags.length <= 10 && !containsTag){
            setInfo({...info, tags: [...info.tags, {tagName: tag}]});
            setErrors({...errors, tagError: ''});
        }else{
            setErrors({...errors, tagError: "there's more than 10 tags (excluding example) or the tag is a duplicate"});
        }
    }


    const deleteTag = (tagNameToDelete) => {
        setInfo({...info, tags: [...info.tags.filter(tag => tag.tagName !== tagNameToDelete)]})
    }

    const handleChange = (event) => {
        setInfo({...info, [event.target.name]: event.target.value})
    }

    const changeImage = (event) => {
        setInfo({...info, image: event.target.files[0]})
    }

    return(
        <Modal className={classes.modal} open={props.open} onClose={props.handleCloseModal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
            <Fade in={props.open}>
                <div className={classes.paper}>
                    <form id="create-shop-form" onSubmit={submitShop}>
                        <TextField name="name" label="required name" required className="universal-input" fullWidth placeholder="name of the shop" onChange={handleChange}/>
                        {errors.nameError? <Alert className="universal-input" >{errors.nameError}</Alert> : null }
                        <TextField name="description" label="required description" required className="universal-input" fullWidth placeholder="description about the shop" onChange={handleChange}/>
                        <TextField name="link" className="universal-input" fullWidth placeholder="website link" onChange={handleChange}/>
                        <TextField name="state" label="Required" select required className="universal-input" fullWidth placeholder="state"  value={info.state} SelectProps={{native: true}} onChange={handleChange}>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </TextField>
                        <TextField name="address" className="universal-input" fullWidth placeholder="address" onChange={handleChange} />
                        <TextField name="email" placeholder="email" required label="required email" className="universal-input" fullWidth onChange={handleChange} />
                        <TextField name="phoneNumber" placeholder="phone number" className="universal-input" fullWidth onChange={handleChange} />
                        <Typography className="universal-input">Store Hours</Typography>
                        <TextField placeholder="Example: 8:00 am" name="from" onChange={changeTime} />
                        <TextField placeholder="Example: 8:00 pm" name="to" style={{marginLeft: "50px"}} onChange={changeTime}/>
                        <TextField id="tags" className="universal-input" variant="outlined" placeholder="type in a food tag (example: banh mi) up to 10 tags" fullWidth 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment className="universal-icon" position="start">
                                        <Button className="default-button" type={"button"} onClick={() => addTag()}>
                                            <Tooltip title="Add Tag">
                                                <AddBoxIcon />
                                            </Tooltip>
                                        </Button>
                                    </InputAdornment>)}} 
                            onChange={tagChange}
                        />
                        <div className="chip-container">
                            <Chip className="chip" label="tag example" variant="outlined" color="primary" />
                            {info.tags.map((tag) => {
                                return(
                                    <div key={tag.tagName}>
                                        <Chip className="chip" label={tag.tagName} variant="outlined" color="primary" onDelete={() => deleteTag(tag.tagName)} />
                                    </div>
                                )
                            })}
                        </div>
                        {errors.tagError? <Alert className="universal-input" color="error">{errors.tagError}</Alert> : null }
                        <br />
                        <input className="universal-input" style={{display: "none"}} id="images" type="file" onChange={changeImage} />
                        <label className="universal-input" id="image-upload-btn" htmlFor="images" ><CloudUploadIcon style={{marginBottom: "5px"}} /> <span className="default-text">Click to upload shop image</span></label>

                        <Typography className="universal-input" gutterBottom>
                            Price Range
                        </Typography>
                        <Slider aria-labelledby="range-slider" valueLabelDisplay="auto" name="priceRange" value={info.priceRange} onChange={changePriceRange} />
                        <Button className="universal-input default-button" style={{float: "right"}} type="submit" form="create-shop-form" variant="outlined">Create Shop</Button>
                    </form>
                </div>
                
            </Fade>
        </Modal>
    )
}
CreateShop.propTypes = {
    addShop: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {addShop})(CreateShop);