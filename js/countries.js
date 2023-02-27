const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => loadCountries(data))
}

const loadCountries = (countries) => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country.cca2)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country: ${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'} </h4>
        <button onclick ="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(div);
    });
}

const loadCountryDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <h3>Name: ${country.name.common} </h3>
    <img src = "${country.flags.png}">
    `
}

allCountries();