import axios from "axios";

const BASE_URL = "https://learn.codeit.kr/api/";

export const getData = async () => {
  try {
    // const res = await axios.get(`${BASE_URL}color-surveys`, {
    //   params: {
    //     limit: 40,
    //   },
    // });
    const res = await axios.get(`${BASE_URL}color-surveys?limit=40`);
    console.log("data", res.data.result);
  } catch (e) {
    console.error(e);
  }
};
