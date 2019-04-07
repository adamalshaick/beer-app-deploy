export const sortOptions = [
  { label: "name", value: "name" },
  { label: "price", value: "price" },
  { label: "type", value: "type" }
];

export const sort = (array, sortBy) => {
  if (sortBy === "name") {
    return array.sort((firstElement, secondElement) => {
      if (firstElement.name < secondElement.name) {
        return -1;
      }
      if (firstElement.name > secondElement.name) {
        return 1;
      }
      return 0;
    });
  }
  if (sortBy === "type") {
    return array.sort((firstElement, secondElement) => {
      if (firstElement.type < secondElement.type) {
        return -1;
      }
      if (firstElement.type > secondElement.type) {
        return 1;
      }
      return 0;
    });
  }
  if (sortBy === "price") {
    return array.sort((firstElement, secondElement) => {
      return firstElement.price - secondElement.price;
    });
  }
};
