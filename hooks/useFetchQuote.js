import { useEffect, useState } from "react";

import { getQuotesApi } from "../helpers/getQuotesApi";

export const useFetchQuote = () => {
  const [state, setState] = useState([]);

  // useEffect hook to perform the getQuotesApi function and simulate a server delay with setTimeout function
  useEffect(() => {
    getQuotesApi().then((element) => {
      setTimeout(() => {
        setState(element);
      }, 1000);
    });
  }, []);

  console.log("The state", state);
  return state;
};
