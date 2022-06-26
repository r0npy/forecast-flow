import "../App.css";
import React from "react";
import { convertTimestampToHour } from "../Helpers/Dates";

export function CurrentWeather(props) {
	return (
		<React.Fragment>
			<div className="current-temperature animate__animated animate__bounceInDown">
				<div className="current-temperature__icon-container">
					<img
						src={
							props.weather.weather
								? `https://openweathermap.org/img/wn/${props.weather.weather[0]?.icon}@2x.png`
								: ""
						}
						className="current-temperature__icon"
						alt={
							props.weather.weather ? props.weather.weather[0]?.description : ""
						}
					/>
				</div>
				<div className="current-temperature__content-container">
					<div className="current-temperature__value">
						{props.weather.main?.temp.toFixed(1)}&deg;
					</div>
					<div className="current-temperature__summary">
						{props.weather.weather ? props.weather.weather[0]?.description : ""}
					</div>
				</div>
			</div>

			<div className="current-stats animate__animated animate__bounceInDown">
				<div>
					<div className="current-stats__value">
						{props.weather.main?.temp_max.toFixed(1)}&deg;
					</div>
					<div className="current-stats__label">Max</div>
					<div className="current-stats__value">
						{props.weather.main?.temp_min.toFixed(1)}&deg;
					</div>
					<div className="current-stats__label">Min</div>
				</div>
				<div>
					<div className="current-stats__value">
						{props.weather.wind?.speed.toFixed(0)}kmh
					</div>
					<div className="current-stats__label">Viento</div>
					<div className="current-stats__value">
						{props.weather.main?.humidity.toFixed(0)}%
					</div>
					<div className="current-stats__label">Humedad</div>
				</div>
				<div>
					<div className="current-stats__value">
						{convertTimestampToHour(props.weather.sys?.sunrise)}
					</div>
					<div className="current-stats__label">Amanecer</div>
					<div className="current-stats__value">
						{convertTimestampToHour(props.weather.sys?.sunset)}
					</div>
					<div className="current-stats__label">Ocaso</div>
				</div>
			</div>
		</React.Fragment>
	);
}
