export const getAllProduct = () => {
  const query = `*[_type == "product"]`;
  return query;
};
