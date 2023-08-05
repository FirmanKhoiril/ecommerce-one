export const getProducts = () => {
  const query = `*[_type == "product"]`;
  return query;
};
