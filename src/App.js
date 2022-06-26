import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CurrentWeather } from "./Components/CurrentWeather";
import { NextDaysWeather } from "./Components/NextDaysWeather";
import { LocationDate } from "./Components/LocationDate";

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
				`https://api.openweathermap.org/data/2.5/weather?q=${query}&lang=es&units=metric&APPID=7d3e3f41015bfd372c5d4d66b8aa3e51`
			)
			.then(async (response) => {
				//console.log(response.data);
				setWeather(response.data);

				await axios
					.get(
						`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data?.coord?.lat}&lon=${response.data?.coord?.lon}&cnt=5&exclude=hourly,minutely&lang=es&units=metric&APPID=7d3e3f41015bfd372c5d4d66b8aa3e51`
					)
					.then((response) => {
						//console.log(response.data);
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
					<option value="encarnacion,py">Encarnación, Paraguay</option>
					<option value="ciudad del este,py">Ciudad del Este, Paraguay</option>
					<option value="villarrica,py">Villarrica, Paraguay</option>
					<option value="fernando de la mora,py">Fernando de la Mora, Paraguay</option>
					<option value="buenos%20aires,ar">Buenos Aires, Argentina</option>
					<option value="new%20york,us">New York, Estados Unidos</option>
					<option value="washington,us">Washington, Estados Unidos</option>
					<option value="california,us">California, Estados Unidos</option>
					<option value="madrid,es">Madrid, España</option>
					<option value="beijing,cn">Beijing, China</option>
					<option value="paris,fr">París, Francia</option>
					<option value="frankfurt,de">Frankfurt, Alemania</option>
					<option value="bogota,co">Bogotá, Colombia</option>
					<option value="santiago,cl">Santiago, Chile</option>
				</select>

				<LocationDate></LocationDate>

				<CurrentWeather weather={weather}></CurrentWeather>

				<NextDaysWeather weather={weatherDaily}></NextDaysWeather>
			</main>
		</div>
	);
}

export default App;
