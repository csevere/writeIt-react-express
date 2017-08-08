import React from 'react'
import DOM from 'react-dom'
import Autocomplete from 'react-autocomplete';
import Select from 'react-select';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import $ from 'jquery';
import 'react-select/dist/react-select.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';



class NavBarTest extends React.Component {
	    constructor(props) {
        super(props);
        this.state = {
            options: [
                {value: 'none', label: 'none'}     
            ]
        }
        this.logChange = this.logChange.bind(this);
    }

    componentDidMount(){


    	$.getJSON(`http://localhost:5000/profiles`, (serverData)=>{
            // log the JSON response from Express
            var profilesArray = []
            console.log(serverData.profileData)
            for(let i = 0; i < serverData.profileData.length; i++){
            	profilesArray.push({value: serverData.profileData[i].username, label: serverData.profileData[i].username})
            	//profilesArray.push('1')
            }
            console.log(profilesArray);

            this.setState({
                options: profilesArray
            })
        })
        console.log(this.props)
    }

    componentWillReceiveProps(){
        $.getJSON(`http://localhost:5000/profiles`, (serverData)=>{
            // log the JSON response from Express
            var profilesArray = []
            console.log(serverData.profileData)
            for(let i = 0; i < serverData.profileData.length; i++){
                profilesArray.push({value: serverData.profileData[i].username, label: serverData.profileData[i].username})
                //profilesArray.push('1')
            }
            console.log(profilesArray);

            this.setState({
                options: profilesArray
            })
        })
        console.log(this.props)
    }


    logChange(val) {

		this.setState({
				selectVal: val.value
		});
	  	console.log(this.props);


        this.props.history.push(`/profiles?user=${val.value}`);


        
	}

    // performSearch(){
    //     console.log('called');
    //     var searchInput = document.getElementsByClassName('Select-input');
    //     console.log(searchInput)
    // }




  render() {

  	// var Select = require('react-select');
	
    return (
    	<div>
	    	
			<Select
				id='special'
				placeholder='Search users'
				name="form-field-name"
				value={this.state.selectVal}
				options={this.state.options}
				onChange={this.logChange}

			/>

            <Link classname='search-users' to='/profiles/'><img src = "images/search-icon.png"/></Link>
		</div>
    )
  }
}

function mapStateToProps(state){
    return{
        // characterResponse: state.characterReducer,
        registerResponse: state.registerReducer


    }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     resultspageAction: ResultsPageAction
//   }, dispatch)
// }


//
// export default tResultsPage;

export default connect(mapStateToProps,null)(NavBarTest);
//export default NavBarTest;