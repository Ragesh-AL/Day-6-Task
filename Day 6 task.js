// Fetch data from Rest Countries
  .then(response => response.json())
  .then(data => {
    // Problem a: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries from Asia:', asiaCountries);

    // Problem b: Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);

    // Problem c: Print name, capital, flag using forEach function
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital[0]);
      console.log('Flag:', country.flags.svg);
    });

    // Problem d: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log('Total population of countries:', totalPopulation);

    // Problem e: Print the country that uses US dollars as currency
    const countryWithUSDollar = data.find(country => country.currencies && country.currencies.USD);
    console.log('Country that uses US dollars as currency:', countryWithUSDollar?.name.common);
  })
  .catch(error => console.error('Error fetching data:', error));
