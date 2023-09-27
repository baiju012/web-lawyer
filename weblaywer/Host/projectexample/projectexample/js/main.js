const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4fea97457msh9cab1284b3270e7p1a5a4ajsn53e0b8c60066',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

  
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  consal.log(response.content);
} catch (error) {
	console.error(error);
}