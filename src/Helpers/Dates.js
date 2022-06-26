export function convertTimestampToHour(timestamp) {
	const date = new Date(timestamp * 1000);
	const hours = "0" + date.getHours();
	const minutes = "0" + date.getMinutes();

	return hours.slice(-2) + ":" + minutes.slice(-2);
}

export function getShortDay(addDays) {
	const date = new Date();
	date.setDate(date.getDate() + addDays);
	return `${date
		.toLocaleDateString("es-ES", {
			weekday: "long",
		})
		.slice(0, 3)}`;
}

export function getShortDate(addDays) {
	const date = new Date();
	date.setDate(date.getDate() + addDays);
	return `${date.toLocaleDateString("es-ES", {
		month: "numeric",
		day: "numeric",
	})}`;
}

export function getDate() {
	const date = new Date();
	return `${date.toLocaleDateString("es-ES", {
		weekday: "long",
		month: "long",
		day: "numeric",
	})}`;
}
