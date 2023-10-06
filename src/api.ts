const url = 'https://swapi.dev/api/';
const peopleEndpoint = 'people';

export type peopleResponse = {
  results: {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
    [key: string]: string | Record<string, unknown>;
  }[];
};
export const getPeople = async (searchString: string): Promise<peopleResponse> => {
  let peopleUrl = `${url}${peopleEndpoint}`;
  if (searchString) {
    peopleUrl = `${peopleUrl}?search=${searchString}`;
  }

  const response = await fetch(peopleUrl);
  const people = await response.json();
  return people;
};
