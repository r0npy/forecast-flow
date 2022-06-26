import "../App.css";
import React from "react";
import { getShortDay, getShortDate } from "../Helpers/Dates";

export function NextDaysWeather(props) {
	console.log(props.weather);
	return (
		<React.Fragment>
			<div className="next-5-days">
				<h2 className="next-5-days__heading">Siguientes 5 días</h2>
				<div className="next-5-days__container">
					{props.weather.daily?.slice(0, 5).map((wd, index) => (
						<div className="next-5-days__row" key={index}>
							<div className="next-5-days__date">
								{getShortDay(index + 1)}
								<div className="next-5-days__label">
									{getShortDate(index + 1)}
								</div>
							</div>

							<div className="next-5-days__Min">
								{wd.temp.min.toFixed(1)}&deg;
								<div className="next-5-days__label">Min</div>
							</div>

							<div className="next-5-days__Max">
								{wd.temp.max.toFixed(1)}&deg;
								<div className="next-5-days__label">Max</div>
							</div>

							<div className="next-5-days__icon">
								<img
									src={
										props.weather
											? `http://openweathermap.org/img/wn/${wd.weather[0].icon}@2x.png`
											: ""
									}
									alt={wd.weather[0].description}
								/>
							</div>

							<div className="next-5-days__Lluvia">
								{wd.humidity.toFixed(0)}%
								<div className="next-5-days__label">Humedad</div>
							</div>

							<div className="next-5-days__Viento">
								{wd.wind_speed.toFixed(0)}kmh
								<div className="next-5-days__label">Viento</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
}