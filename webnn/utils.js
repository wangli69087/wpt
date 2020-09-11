const episilon = 1e-6;
const rtol = 5.0 * 1.1920928955078125e-7;

const checkOutput = (outputBuffer, expected) => {
  let length = outputBuffer.length;
  for (let index = 0;  index < length; index++) {
    let delta = episilon + rtol * Math.abs(expected[index]);
    let lower = expected[index] - delta;
    let upper = expected[index] + delta;
    assert_between_inclusive(outputBuffer[index], lower, upper);
  }
};