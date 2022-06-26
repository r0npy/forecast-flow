import "../App.css";
import React from "react";
import { getDate } from "../Helpers/Dates";

export function LocationDate(props) {
	return (
		<React.Fragment>
			<div className="location-and-date">
				<div>{getDate()}</div>
			</div>
		</React.Fragment>
	);
}
