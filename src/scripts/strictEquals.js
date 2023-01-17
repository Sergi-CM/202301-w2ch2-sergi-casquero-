const strictEquals = (valueA, valueB) => {
  const result = Object.is(valueA, valueB);
  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    console.log(!result);
  } else if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    console.log(!result);
  } else if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    console.log(!result);
  } else {
    console.log(result);
  }
};

export default strictEquals;
