// What is Callback and its role
const calc = () => {
  return 4 * 4;
};

const printCalc = (callback) => {
  console.log(callback());
};

printCalc(calc);
