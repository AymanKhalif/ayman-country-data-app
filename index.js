document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("country-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("country-input");
    const countryName = input.value;
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];

        const population = countryData.population;
        const timezones = countryData.timezones;
        const continents = countryData.continents;
        const capital = countryData.capital;
        const flagUrl = countryData.flags.svg;

        const countryInfoDiv = document.getElementById("country-info");
        countryInfoDiv.innerHTML = `
<img src="${flagUrl}" alt="${countryName} flag">
<ul>
<li>Continent: ${continents}</li>
<li>Capital: ${capital}</li>
<li>Population: ${population}</li>
<li>Timezones: ${timezones}</li>
</ul>
`;
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
