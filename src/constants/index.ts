import countriesJson from "./country_names.json";
import countriesByDirectoriesJson from "./countries_and_directories.json";
import directoryLogosByNameJson from "./directory_logos.json";

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

export const countriesByDirectory = Object.entries(
  countriesByDirectoriesJson
).reduce((map: { [key: string]: string[] }, [key, value]) => {
  map[key] = value;
  return map;
}, {});

export const directoryLogosByName = Object.entries(directoryLogosByNameJson).reduce((map: { [key: string]: string }, [key, value]) => {
  map[key] = value;
  return map;
}, {})