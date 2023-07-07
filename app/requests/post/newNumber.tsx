import fetchGraphQL from "../connect";

const operationsDoc = `
mutation NewNumber($email: String, $number: numeric) {
  insert_FavoriteNumber_FavoriteNumber(objects: {email: $email, number: $number}) {
    returning {
      number
      email
    }
  }
}
`;

function fetchNewNumber(email: string, number: number) {
  return fetchGraphQL(operationsDoc, "NewNumber", {
    email: email,
    number: number,
  });
}

/**
 * GraphQL fetch function for getting favorite number by email
 *
 * @param email Email of user
 * @returns Raw data object w/ the number associated with email
 */
export default async function newNumber(email: string, number: number) {
  const { errors, data } = await fetchNewNumber(email, number);

  if (errors) {
    console.error(errors);
  }

  return data;
}
