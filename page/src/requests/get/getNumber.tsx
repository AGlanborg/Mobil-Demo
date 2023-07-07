import fetchGraphQL from "../connect";

const operationsDoc = `
query GetNumber($email: String) {
  FavoriteNumber_FavoriteNumber(where: {email: {_eq: $email}}) {
    number
  }
}
`;

function fetchGetNumber(email: string) {
  return fetchGraphQL(operationsDoc, "GetNumber", { email: email });
}

/**
 * GraphQL fetch function for getting favorite number by email
 * 
 * @param email Email of user
 * @returns Raw data object w/ the number associated with email
 */
export default async function getNumber(email: string) {
  const { errors, data } = await fetchGetNumber(email);

  if (errors) {
    console.error(errors);
  }

  return data;
}
