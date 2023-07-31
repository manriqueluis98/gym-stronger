interface nestedAttributes {
  collectionName: string;
  attributes: string[];
}

export function getApiRouteFromStrapi(
  attributes: string[],
  nestedAttributes: nestedAttributes[],
  endpoint: string
) {
  const parsedAttributes = attributes.map((attr, idx) => {
    return `fields[${idx}]=${attr}`;
  });

  if (nestedAttributes.length > 0) {
    //populate[categoryIcon][fields][0]=url
    let parsedNested: string[] = [];
    nestedAttributes.forEach((nested, idx) => {
      nested.attributes.forEach((attr, idx) => {
        parsedNested.push(
          `populate[${nested.collectionName}][fields][${idx}]=${attr}`
        );
      });
    });

    return endpoint + parsedAttributes.join("&") + "&" + parsedNested.join("&");
  }

  return endpoint + parsedAttributes.join("&");
}
