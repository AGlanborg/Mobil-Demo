import fetchGraphQL from "../connect";

const operationsDoc = `
mutation UpdNumber($email: String, $number: numeric) {
  update_FavoriteNumber_FavoriteNumber(where: {email: {_eq: $email}}, _set: {number: $number}) {
    returning {
      number
    }
  }
}
`;

function executeUpdNumber(email: string, number: number) {
  return fetchGraphQL(operationsDoc, "UpdNumber", {
    email: email,
    number: number,
  });
}

/**
 * GraphQL fetch function for updating favorite number by email
 * 
 * @param email Email of user
 * @param number New favorite number
 * @returns Raw data object w/ the number associated with email
 */
export default async function updNumber(email: string, number: number) {
  const { errors, data } = await executeUpdNumber(email, number);

  if (errors) {
    console.error(errors);
  }

  return data;
}
