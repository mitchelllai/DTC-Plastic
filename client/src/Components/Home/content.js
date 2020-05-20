import React, { Fragment } from 'react';
import { Grid,} from '@material-ui/core'
// import { makeStyles} from '@material-ui/core/styles';
import ContentCard from "./card"
import image0 from './turtle.jpg'
import image1 from './ocean.jpg'
import image2 from './s_use_plast.jpg'
import image3 from './replant.jpg'
import image4 from './plastics.jpg'
import image5 from './pollution.jpg'
import image6 from './compost.jpg'

const images = [image0, image1, image2, image3, image4, image5, image6];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Content () {

    return(

        <Fragment>
            <Grid item>
                <ContentCard imgid = {images[0]} day = {days[0]}></ContentCard>
            </Grid>
            <Grid item>
                <ContentCard imgid ={images[1]} day = {days[1]}></ContentCard>
            </Grid>
            <Grid item>
                <ContentCard imgid ={images[2]} day = {days[2]}></ContentCard>
            </Grid>
            <Grid item>
                <ContentCard imgid ={images[3]} day = {days[3]}></ContentCard>
            </Grid>
            <Grid item>
                <ContentCard imgid ={images[4]} day = {days[4]}></ContentCard>
            </Grid>
            <Grid item>
                <ContentCard imgid ={images[5]} day = {days[5]}></ContentCard>
            </Grid>
            <Grid item>
                <ContentCard imgid ={images[6]} day = {days[6]}></ContentCard>
            </Grid>
        </Fragment>

            // <Grid item xs = {1}>
            // </Grid>

        // </Grid>
    );
}

export default Content