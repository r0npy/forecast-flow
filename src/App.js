import "./App.css";
import mostlySunny from "./icons/mostly-sunny.svg";
import sunny from "./icons/sunny.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [weather, setWeather] = useState([]);

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
			.then((response) => {
				console.log(response.data);
				setWeather(response.data);
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

	function convertTimestampToHour(timestamp) {
		let date = new Date(timestamp * 1000);
		let hours = "0" + date.getHours();
		let minutes = "0" + date.getMinutes();

		return hours.substr(-2) + ":" + minutes.substr(-2);
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

				<div className="current-temperature">
					<div className="current-temperature__icon-container">
						<img
							src={mostlySunny}
							className="current-temperature__icon"
							alt=""
						/>
					</div>
					<div className="current-temperature__content-container">
						<div className="current-temperature__value">{weather.main?.temp.toFixed(1)}&deg;</div>
						<div className="current-temperature__summary">
							{weather.weather[0]?.description}
						</div>
					</div>
				</div>

				<div className="current-stats">
					<div>
						<div className="current-stats__value">
							{weather.main?.temp_max.toFixed(1)}&deg;
						</div>
						<div className="current-stats__label">Max</div>
						<div className="current-stats__value">
							{weather.main?.temp_min.toFixed(1)}&deg;
						</div>
						<div className="current-stats__label">Min</div>
					</div>
					<div>
						<div className="current-stats__value">
							{weather.wind?.speed.toFixed(0)}kmh
						</div>
						<div className="current-stats__label">Viento</div>
						<div className="current-stats__value">{weather.main?.humidity.toFixed(0)}%</div>
						<div className="current-stats__label">Humedad</div>
					</div>
					<div>
						<div className="current-stats__value">
							{convertTimestampToHour(weather.sys?.sunrise)}
						</div>
						<div className="current-stats__label">Amanecer</div>
						<div className="current-stats__value">
							{convertTimestampToHour(weather.sys?.sunset)}
						</div>
						<div className="current-stats__label">Ocaso</div>
					</div>
				</div>

				<div className="weather-by-hour">
					<h2 className="weather-by-hour__heading">Clima de Hoy</h2>
					<div className="weather-by-hour__container">
						<div className="weather-by-hour__item">
							<div className="weather-by-hour__hour">3am</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>14&deg;</div>
						</div>
						<div className="weather-by-hour__item">
							<div className="weather-by-hour__hour">6am</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>16&deg;</div>
						</div>
						<div className="weather-by-hour__item">
							<div className="weather-by-hour__hour">9am</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>17&deg;</div>
						</div>
						<div className="weather-by-hour__item">
							<div className="weather-by-hour__hour">12pm</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>19&deg;</div>
						</div>
						<div className="weather-by-hour__item">
							<div className="weather-by-hour__hour">3pm</div>
							<img src={sunny} alt="Sunny" />
							<div>21&deg;</div>
						</div>
						<div className="weather-by-hour__item">
							<div className="weather-by-hour__hour">6pm</div>
							<img src={sunny} alt="Sunny" />
							<div>20&deg;</div>
						</div>
						<div className="weather-by-hour__item">
							<div className="weather-by-hour__hour">9pm</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>18&deg;</div>
						</div>
					</div>
				</div>

				<div className="next-5-days">
					<h2 className="next-5-days__heading">Siguientes 5 días</h2>
					<div className="next-5-days__container">
						<div className="next-5-days__row">
							<div className="next-5-days__date">
								Lun
								<div className="next-5-days__label">30/7</div>
							</div>

							<div className="next-5-days__Min">
								10&deg;
								<div className="next-5-days__label">Min</div>
							</div>

							<div className="next-5-days__Max">
								21&deg;
								<div className="next-5-days__label">Max</div>
							</div>

							<div className="next-5-days__icon">
								<img src={sunny} alt="Sunny" />
							</div>

							<div className="next-5-days__Lluvia">
								0%
								<div className="next-5-days__label">Lluvia</div>
							</div>

							<div className="next-5-days__Viento">
								12mph
								<div className="next-5-days__label">Viento</div>
							</div>
						</div>
						<div className="next-5-days__row">
							<div className="next-5-days__date">
								Mar
								<div className="next-5-days__label">31/7</div>
							</div>

							<div className="next-5-days__Min">
								9&deg;
								<div className="next-5-days__label">Min</div>
							</div>

							<div className="next-5-days__Max">
								18&deg;
								<div className="next-5-days__label">Max</div>
							</div>

							<div className="next-5-days__icon">
								<img src={mostlySunny} alt="Mayormente Soleado" />
							</div>

							<div className="next-5-days__Lluvia">
								3%
								<div className="next-5-days__label">Lluvia</div>
							</div>

							<div className="next-5-days__Viento">
								7mph
								<div className="next-5-days__label">Viento</div>
							</div>
						</div>
						<div className="next-5-days__row">
							<div className="next-5-days__date">
								Mie
								<div className="next-5-days__label">1/8</div>
							</div>

							<div className="next-5-days__Min">
								7&deg;
								<div className="next-5-days__label">Min</div>
							</div>

							<div className="next-5-days__Max">
								15&deg;
								<div className="next-5-days__label">Max</div>
							</div>

							<div className="next-5-days__icon">
								<img src={mostlySunny} alt="Mayormente Soleado" />
							</div>

							<div className="next-5-days__Lluvia">
								75%
								<div className="next-5-days__label">Lluvia</div>
							</div>

							<div className="next-5-days__Viento">
								11mph
								<div className="next-5-days__label">Viento</div>
							</div>
						</div>
						<div className="next-5-days__row">
							<div className="next-5-days__date">
								Jue
								<div className="next-5-days__label">2/8</div>
							</div>

							<div className="next-5-days__Min">
								12&deg;
								<div className="next-5-days__label">Min</div>
							</div>

							<div className="next-5-days__Max">
								24&deg;
								<div className="next-5-days__label">Max</div>
							</div>

							<div className="next-5-days__icon">
								<img src={sunny} alt="Sunny" />
							</div>

							<div className="next-5-days__Lluvia">
								2%
								<div className="next-5-days__label">Lluvia</div>
							</div>

							<div className="next-5-days__Viento">
								8mph
								<div className="next-5-days__label">Viento</div>
							</div>
						</div>
						<div className="next-5-days__row">
							<div className="next-5-days__date">
								Vie
								<div className="next-5-days__label">30/7</div>
							</div>

							<div className="next-5-days__Min">
								10&deg;
								<div className="next-5-days__label">Min</div>
							</div>

							<div className="next-5-days__Max">
								21&deg;
								<div className="next-5-days__label">Max</div>
							</div>

							<div className="next-5-days__icon">
								<img src={mostlySunny} alt="Mayormente Soleado" />
							</div>

							<div className="next-5-days__Lluvia">
								0%
								<div className="next-5-days__label">Lluvia</div>
							</div>

							<div className="next-5-days__Viento">
								12mph
								<div className="next-5-days__label">Viento</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
