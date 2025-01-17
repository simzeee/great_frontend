const clamp = (value, lower, upper) => {
  return value < lower ? lower : value > upper ? upper : value;
};

console.log(clamp(-3, -5, 0));
