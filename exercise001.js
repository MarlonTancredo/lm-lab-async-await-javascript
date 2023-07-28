const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

//--Task 1-- 🔥
// promise
//   .then((response) => {
//     console.log(`Yay! Promise resolved with response: ${response}`);
//   })
//   .catch((error) => {
//     console.error(`Boo. Promise rejected with response: ${error}`);
//   });

//--Task 2-- 🔥
const getResponse = async () => {
  try {
    const response = await promise;
    console.log(`Yay! Promise resolved with response: ${response}`);
  } catch (error) {
    console.error(`Boo. Promise rejected with response: ${error}`);
  }
};
getResponse();
