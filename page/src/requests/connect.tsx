/**
 * Default graphQL fetch function for connecting to local db
 * 
 * @param operationsDoc 
 * @param operationName 
 * @param variables 
 * @returns Raw data object
 */
export default async function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: object
) {
  const result = await fetch("http://192.168.0.181:8080/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}
