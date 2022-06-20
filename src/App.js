import "./App.css";
import mostlySunny from "./icons/mostly-sunny.svg";
import sunny from "./icons/sunny.svg";

function App() {
	return (
		<div className="App container">
			<main class="main-container">
				<select
					class="form-select form-select-lg mb-3"
					aria-label=".form-select-lg example"
				>
					<option selected value="0">
						Asunción, Paraguay
					</option>
					<option value="1">Buenos Aires, Argentina</option>
					<option value="2">New York, Estados Unidos</option>
					<option value="3">Madrid, España</option>
					<option value="4">Pekín, China</option>
				</select>

				<div class="location-and-date">
					<div>Domingo, 19 de Junio</div>
				</div>

				<div class="current-temperature">
					<div class="current-temperature__icon-container">
						<img src={mostlySunny} class="current-temperature__icon" alt="" />
					</div>
					<div class="current-temperature__content-container">
						<div class="current-temperature__value">21&deg;</div>
						<div class="current-temperature__summary">Mayormente Soleado</div>
					</div>
				</div>

				<div class="current-stats">
					<div>
						<div class="current-stats__value">23&deg;</div>
						<div class="current-stats__label">Max</div>
						<div class="current-stats__value">14&deg;</div>
						<div class="current-stats__label">Min</div>
					</div>
					<div>
						<div class="current-stats__value">7mph</div>
						<div class="current-stats__label">Viento</div>
						<div class="current-stats__value">0%</div>
						<div class="current-stats__label">Lluvia</div>
					</div>
					<div>
						<div class="current-stats__value">05:27</div>
						<div class="current-stats__label">Amanecer</div>
						<div class="current-stats__value">20:57</div>
						<div class="current-stats__label">Ocaso</div>
					</div>
				</div>

				<div class="weather-by-hour">
					<h2 class="weather-by-hour__heading">Clima de Hoy</h2>
					<div class="weather-by-hour__container">
						<div class="weather-by-hour__item">
							<div class="weather-by-hour__hour">3am</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>14&deg;</div>
						</div>
						<div class="weather-by-hour__item">
							<div class="weather-by-hour__hour">6am</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>16&deg;</div>
						</div>
						<div class="weather-by-hour__item">
							<div class="weather-by-hour__hour">9am</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>17&deg;</div>
						</div>
						<div class="weather-by-hour__item">
							<div class="weather-by-hour__hour">12pm</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>19&deg;</div>
						</div>
						<div class="weather-by-hour__item">
							<div class="weather-by-hour__hour">3pm</div>
							<img src={sunny} alt="Sunny" />
							<div>21&deg;</div>
						</div>
						<div class="weather-by-hour__item">
							<div class="weather-by-hour__hour">6pm</div>
							<img src={sunny} alt="Sunny" />
							<div>20&deg;</div>
						</div>
						<div class="weather-by-hour__item">
							<div class="weather-by-hour__hour">9pm</div>
							<img src={mostlySunny} alt="Mayormente Soleado" />
							<div>18&deg;</div>
						</div>
					</div>
				</div>

				<div class="next-5-days">
					<h2 class="next-5-days__heading">Siguientes 5 días</h2>
					<div class="next-5-days__container">
						<div class="next-5-days__row">
							<div class="next-5-days__date">
								Lun
								<div class="next-5-days__label">30/7</div>
							</div>

							<div class="next-5-days__Min">
								10&deg;
								<div class="next-5-days__label">Min</div>
							</div>

							<div class="next-5-days__Max">
								21&deg;
								<div class="next-5-days__label">Max</div>
							</div>

							<div class="next-5-days__icon">
								<img src={sunny} alt="Sunny" />
							</div>

							<div class="next-5-days__Lluvia">
								0%
								<div class="next-5-days__label">Lluvia</div>
							</div>

							<div class="next-5-days__Viento">
								12mph
								<div class="next-5-days__label">Viento</div>
							</div>
						</div>
						<div class="next-5-days__row">
							<div class="next-5-days__date">
								Mar
								<div class="next-5-days__label">31/7</div>
							</div>

							<div class="next-5-days__Min">
								9&deg;
								<div class="next-5-days__label">Min</div>
							</div>

							<div class="next-5-days__Max">
								18&deg;
								<div class="next-5-days__label">Max</div>
							</div>

							<div class="next-5-days__icon">
								<img src={mostlySunny} alt="Mayormente Soleado" />
							</div>

							<div class="next-5-days__Lluvia">
								3%
								<div class="next-5-days__label">Lluvia</div>
							</div>

							<div class="next-5-days__Viento">
								7mph
								<div class="next-5-days__label">Viento</div>
							</div>
						</div>
						<div class="next-5-days__row">
							<div class="next-5-days__date">
								Mie
								<div class="next-5-days__label">1/8</div>
							</div>

							<div class="next-5-days__Min">
								7&deg;
								<div class="next-5-days__label">Min</div>
							</div>

							<div class="next-5-days__Max">
								15&deg;
								<div class="next-5-days__label">Max</div>
							</div>

							<div class="next-5-days__icon">
								<img src={mostlySunny} alt="Mayormente Soleado" />
							</div>

							<div class="next-5-days__Lluvia">
								75%
								<div class="next-5-days__label">Lluvia</div>
							</div>

							<div class="next-5-days__Viento">
								11mph
								<div class="next-5-days__label">Viento</div>
							</div>
						</div>
						<div class="next-5-days__row">
							<div class="next-5-days__date">
								Jue
								<div class="next-5-days__label">2/8</div>
							</div>

							<div class="next-5-days__Min">
								12&deg;
								<div class="next-5-days__label">Min</div>
							</div>

							<div class="next-5-days__Max">
								24&deg;
								<div class="next-5-days__label">Max</div>
							</div>

							<div class="next-5-days__icon">
								<img src={sunny} alt="Sunny" />
							</div>

							<div class="next-5-days__Lluvia">
								2%
								<div class="next-5-days__label">Lluvia</div>
							</div>

							<div class="next-5-days__Viento">
								8mph
								<div class="next-5-days__label">Viento</div>
							</div>
						</div>
						<div class="next-5-days__row">
							<div class="next-5-days__date">
								Vie
								<div class="next-5-days__label">30/7</div>
							</div>

							<div class="next-5-days__Min">
								10&deg;
								<div class="next-5-days__label">Min</div>
							</div>

							<div class="next-5-days__Max">
								21&deg;
								<div class="next-5-days__label">Max</div>
							</div>

							<div class="next-5-days__icon">
								<img src={mostlySunny} alt="Mayormente Soleado" />
							</div>

							<div class="next-5-days__Lluvia">
								0%
								<div class="next-5-days__label">Lluvia</div>
							</div>

							<div class="next-5-days__Viento">
								12mph
								<div class="next-5-days__label">Viento</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
