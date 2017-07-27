import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
// import tWriteOptionAction from '../actions/tWriteOptionAction';


class tWriteOption extends Component{
  
	render(){
     
		return(
			<div>
				<Grid className = "write-menu-option">
          <Row>

            <Grid>
              <Row>

               <Col md = {4} className = "write-cat-left">
                  <div><h3>Write Menu Category</h3></div> 
                </Col>

                <Col md = {6} className = "col-md-offset-5 book-title">
                  <div><h1>MyBook Title</h1></div> 
                </Col>
              </Row> 
            </Grid>


            <Row>
              <Grid className = "third-row">
                <Col md = {3} className = "col-md-offset-3">
                  <Link to ="/character" className = "guided text-center"><div><h4>Guided Creation</h4></div></Link>
                </Col> 
              

                <Col md = {3}>
                  <Link to ="/character" className = "notepad">
                      <img src = "http://www.iconhot.com/icon/png/equinox/256/notepad-16.png"/>
                      <div><h4>NotePad</h4></div>
                  </Link>
                </Col>

              </Grid> 
            </Row>


            <Row>
              <Grid className = "fourth-row-left">

                <Col md = {3}>
                  <Link to = "/writeMenu" className = "return-writemenu">
                    <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                    <div>Return to Write Menu</div>
                  </Link>
                </Col> 
              
              </Grid> 
            </Row>  

            <Row>
                <Grid className = "second-row">
                  <Col md = {4} className = "col-md-offset-2 stats-right">
                    <div> dictionary component</div> 
                  </Col>
              </Grid>
            </Row>  


          </Row> 
		    </Grid>   
		  </div>

		)
	}
}


export default tWriteOption;
// export default connect(mapStateToProps,mapDispatchToProps)(tWriteOption);

