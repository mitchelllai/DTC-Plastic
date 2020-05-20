import React from 'react';
import {Card, Typography, CardMedia, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( (theme) => ({
    card_sizing: {
        minHeight: "300px",
        minWidth: "300px",
        maxHeight: "300px",
        maxWidth: "300px"
    },

    media: {
        height: "300px",
        width: "300px",
        display: "flex"
    },

    image: {
        height: "300px",
        width: "300px",
    },

    text: {
        position: "absolute",
        color: "white",
        alignItems: "center",
        WebkitTextStrokeWidth: "2px",
        WebkitTextStrokeColor: "black",

    }


}))


function ContentCard(props){

    const classes = useStyles()
    
    return(

        <Card className = {classes.card_sizing} variant="outlined">
            <CardActionArea className = {classes.media}>
                <CardMedia
                    component = "img"
                    image = {props.imgid}
                    className = {classes.image}/>
                <Typography className = {classes.text} variant = "h3"> {props.day} </Typography>
            </CardActionArea>
        </Card>

    );

}

export default ContentCard;