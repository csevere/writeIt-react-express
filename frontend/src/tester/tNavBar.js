import React from 'react'
import DOM from 'react-dom'
import Autocomplete from 'react-autocomplete';
import Select from 'react-select';
import $ from 'jquery';



class tNavBar extends React.Component {
	    constructor(props) {
        super(props);
        this.state = {
            options: [
                {value: 'none', label: 'none'}
            	
                
            ]

            // nameError: null,
            // emailError: null,
            // formError: false
        }


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
    }




  render() {

  	var Select = require('react-select');

	var options = [
	  { value: 'one', label: 'One' },
	  { value: 'two', label: 'Two' }
	];

	function logChange(val) {
	  console.log("Selected: " + JSON.stringify(val));
	}

	console.log(this.state.options)

	
    return (
    	<div>
	    	<p><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
			<Select
				name="form-field-name"
				value="one"
				options={this.state.options}
				onChange={logChange}
			/>
		</div>
    )
  }
}

export default tNavBar;