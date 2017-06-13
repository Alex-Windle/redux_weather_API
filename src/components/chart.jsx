// should it be a functional or class-based component? 
// --> FUNCTIONAL - because it takes props from its parent
// and is not connected to state.
import React from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	// calculate graph average
	const length = props.data.length; 
	const total = props.data.reduce(function(acc, i) {
		return acc + i; 
	}, 0); 
	const average = (total/length).toFixed(0); 
	
	return (
		<td>
			<Sparklines data={props.data} height={100} width={180}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average} {props.unit}</div>
		</td>		
	); 
}