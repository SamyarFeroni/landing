/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { pageComponentsAction } from "@/store/pageComponents/slice";
import { BASE_URL, LANDING_URL } from "@/utils/endPoint";

export const getPageComponents = function () {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return async () => {
    try {
      const config = {
        url: `${BASE_URL}${LANDING_URL}`,
        method: "GET",
        timeout: 0,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      // get data
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios(config);
      console.log(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {}
  };
};
