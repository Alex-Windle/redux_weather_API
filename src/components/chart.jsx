// should it be a functional or class-based component? 
// --> FUNCTIONAL - because it takes props from its parent
// and is not connected to state.
import React from 'react'; 
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
	return (
			<tr key={props.key}>
				<td>{props.city}</td>
				<td>
					<Sparklines data={[...props.temps]}>
						<SparklinesLine color="orange" />
					</Sparklines>
				</td>
				<td>
					<Sparklines data={[...props.pressure]}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>
				<td>
					<Sparklines data={[...props.humidity]}>
						<SparklinesLine color="blue" />
					</Sparklines>
				</td>
			</tr>
	); 
}

export default Chart;