export const getRandomNumber = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  var value = localStorage.getItem(key);
  return JSON.parse(value);
};
