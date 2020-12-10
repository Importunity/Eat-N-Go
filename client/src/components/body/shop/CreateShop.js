import { Backdrop, Button, Fade, InputAdornment, makeStyles, Modal, TextField, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import { addShop } from '../../../flux/actions/shop';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AddBoxIcon from '@material-ui/icons/AddBox';
import '../../../styles/shop.css';
import uuid from 'uuid';



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
    const[info, setInfo] = useState({name: '', description: '', link: '', state: '', address: '', tags: []})
    const[tag, setTag] = useState('');
    const[tags, setTags] = useState([])
    const classes = useStyles();
    const {auth} = props;
    const submitShop = (event) => {
        event.preventDefault();
        setInfo({tags: tags})
        props.addShop(info, auth.user._id);

        event.target.reset();
    }

    const tagChange = (event) => {
        setTag(event.target.value);
    }

    const addTag = () => {
        setTags([...tags,{tagName: tag}]);
    }




    const handleChange = (event) => {
        setInfo({...info, [event.target.name]: event.target.value})
    }
    return(
        <Modal className={classes.modal} open={props.open} onClose={props.handleCloseModal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
            <Fade in={props.open}>
                <div className={classes.paper}>
                    <form id="create-shop-form" onSubmit={submitShop}>
                        <TextField name="name" className="universal-input" fullWidth placeholder="name" onChange={handleChange}/>
                        <TextField name="description" className="universal-input" fullWidth placeholder="description" onChange={handleChange}/>
                        <TextField name="link" className="universal-input" fullWidth placeholder="link" onChange={handleChange}/>
                        <TextField name="state" select className="universal-input" fullWidth placeholder="state"  value={info.state} SelectProps={{native: true}} onChange={handleChange}>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </TextField>
                        <TextField name="address" className="universal-input" fullWidth placeholder="address" onChange={handleChange} />
                        <TextField id="tags" className="universal-input" variant="outlined" placeholder="type in a food tag (example: banh mi)" fullWidth 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment className="universal-icon" position="start">
                                        <Button className="default-button" type={"button"} onClick={addTag}>
                                            <Tooltip title="Add Tag">
                                                <AddBoxIcon />
                                            </Tooltip>
                                        </Button>
                                    </InputAdornment>)}} 
                            onChange={tagChange}
                        />
                        <Button className="universal-input default-button" style={{float: "right"}} form="create-shop-form" type="submit" variant="outlined">Create Shop</Button>
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