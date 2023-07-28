import fetch from "node-fetch";

// 🔥 -- Converting then() catch() to async await -- 🔥
const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const fetchData = async () => {
  try {
    const response = await fetch(jsonTypicode);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
