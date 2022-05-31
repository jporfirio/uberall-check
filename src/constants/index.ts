import countriesJson from "./country_names.json";

export const countries = Object.entries(countriesJson).map(([key, value]) => ({
  id: key,
  value: key,
  label: value,
}));

export const countriesByName = countries.reduce(
  (map: { [key: string]: string }, { id, value }) => {
    map[id] = value;
    return map;
  },
  {}
);
