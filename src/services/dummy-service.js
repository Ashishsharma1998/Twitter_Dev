export const helper = () => {
  const num = Math.floor(Math.random() * 10);
  return num % 2 == 0;
};

export const execute = () => {
  const result = false;
  if (result) {
    return "Learning Js";
  } else {
    return "Learning ReactJs";
  }
};
