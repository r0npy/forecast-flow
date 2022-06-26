import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CurrentWeather } from "./Components/CurrentWeather";

function App() {
	const [weather, setWeather] = useState([]);
	const [weatherDaily, setWeatherDaily] = useState([]);

	useEffect(() => {
		getWheater(
			document.getElementById("slcCity").options[
				document.getElementById("slcCity").selectedIndex
			].value
		);
	}, []);

	async function getWheater(query) {
		await axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${query}&lang=es&units=metric&APPID=7d3e3f41015bfd372c5d4d66b8aa3e51`
			)
			.then(async (response) => {
				console.log(response.data);
				setWeather(response.data);

				await axios
					.get(
						`http://api.openweathermap.org/data/2.5/onecall?lat=${response.data?.coord?.lat}&lon=${response.data?.coord?.lon}&cnt=5&exclude=hourly,minutely&lang=es&units=metric&APPID=7d3e3f41015bfd372c5d4d66b8aa3e51`
					)
					.then((response) => {
						console.log(response.data);
						setWeatherDaily(response.data);
					})
					.catch((error) => {
						console.error(error);
					});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	function getDate() {
		const date = new Date();
		return `${date.toLocaleDateString("es-ES", {
			weekday: "long",
			month: "long",
			day: "numeric",
		})}`;
	}

	function getShortDay(addDays) {
		const date = new Date();
		date.setDate(date.getDate() + addDays);
		return `${date
			.toLocaleDateString("es-ES", {
				weekday: "long",
			})
			.slice(0, 3)}`;
	}

	function getShortDate(addDays) {
		const date = new Date();
		date.setDate(date.getDate() + addDays);
		return `${date.toLocaleDateString("es-ES", {
			month: "numeric",
			day: "numeric",
		})}`;
	}

	return (
		<div className="App container">
			<main className="main-container">
				<select
					id="slcCity"
					className="form-select form-select-lg mb-3"
					aria-label=".form-select-lg example"
					onChange={(e) => getWheater(e.target.value)}
				>
					<option value="asuncion,py">Asunción, Paraguay</option>
					<option value="buenos%20aires,ar">Buenos Aires, Argentina</option>
					<option value="new%20york,us">New York, Estados Unidos</option>
					<option value="madrid,es">Madrid, España</option>
					<option value="beijing,cn">Beijing, China</option>
				</select>

				<div className="location-and-date">
					<div>{getDate()}</div>
				</div>

				<CurrentWeather weather={weather}></CurrentWeather>

				<div className="next-5-days">
					<h2 className="next-5-days__heading">Siguientes 5 días</h2>
					<div className="next-5-days__container">
						{weatherDaily?.daily?.slice(0, 5).map((wd, index) => (
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
											weather.weather
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
			</main>
		</div>
	);
}

export default App;
