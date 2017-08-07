import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
	<div className = "loading">
    	<ReactLoading type="bubbles" color= "#2e6da4" height="667" width="375" />
    </div>
    
);
 
export default Loading;