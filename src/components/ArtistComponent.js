import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import {Card, CardImg, CardTitle, CardSubtitle,  CardText, CardBody, Button, CardImgOverlay} from 'reactstrap'
import {artists} from '../data/artists'

// Create the class and constructor for the ArtistDetails component 
class ArtistDetails extends Component {
    constructor(props){
        super(props)

        // This state is for the selectedArtist event handling
        this.state = {
            selectedArtist : null
        }

        // Props are used to pass data between two or more components (Parent and children components)
        // States are basically used to pass data to a component 
    }

    // Function for the selectArtist event being handled 
    selectArtist(artist){
        this.setState({
            selectedArtist : artist
        })
    }

    renderArtistInfo(artist){

        if (artist != null){
            return(
                <Col className = "mb-5">
                <Card>
                    <CardTitle className = "p-2">
                        {artist.name}
                    </CardTitle>
                    <hr/>
                    <CardText className = "p-3"> {artist.description} </CardText>
                </Card>
                </Col>
            )
        }

        else{
            return(
                <div>Click on Image to Show more about your favourite artist !</div>
            )
        }
    }

    // This section contains all the components that will be rendered 
    render() {

        const artistProfile = this.props.artists.map( (artist) => {
            return (
                <div key = {artist.id} className = "col-12 col-md-4">
                    {/* <Col> */}
                    <Card className = "my-3" >
                        {/* Working with event handling using the onClick method  */}
                        <CardImg top width="100%" height= "250px" src ={artist.coverImage}   alt={artist.name} />
                        {/* <CardImgOverlay>
                            <p>{artist.name}</p>
                        </CardImgOverlay> */}
                        <CardBody>
                        <CardTitle> <b>{artist.id}.</b> {artist.name} </CardTitle>
                        <hr/>
                        <CardSubtitle> <b>Genre :-</b> {artist.genre} <b>Nationality :-</b> {artist.country} </CardSubtitle>
                            <CardText> {artist.description.substr(0,300)} ...</CardText>
                                <Button   onClick= {() => this.selectArtist(artist)}  color="primary">Read more...</Button>
                        </CardBody>
                    </Card>
                    
                    {/* </Col> */}
                </div>

            )
        })

        return(

            <Container>
                <Row className="mt-5">
                    {artistProfile}
                </Row>

                <Row>
                    <div className = "artistInfo">
                        {this.renderArtistInfo(this.state.selectedArtist)}
                    </div>
                </Row>
            </Container>
        )
    }
}


export default ArtistDetails;
