import countries from './data/countries.json';

export function getCountries() {
  return countries.map(country => ({
    name: country.country,
    states: country.states,
  }));
}

export function getStates(countryName) {
  const country = countries.find(country => country.country === countryName);
  return country ? country.states : [];
}

export function getCities(stateName) {
  const country = countries.find(country => country.states.includes(stateName));
  if (country) {
    return country.capital;
  } else {
    return [];
  }
}
