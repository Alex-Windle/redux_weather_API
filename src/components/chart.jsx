// should it be a functional or class-based component? 
// --> FUNCTIONAL - because it takes props from its parent
// and is not connected to state.
import React from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	return (
		<td>
			<Sparklines data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="mean" />
			</Sparklines>
		</td>		
	); 
}