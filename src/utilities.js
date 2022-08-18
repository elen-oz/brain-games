const getRandom = (minParameter, maxParameter) => {
  const min = Math.ceil(minParameter);
  const max = Math.floor(maxParameter);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandom;
