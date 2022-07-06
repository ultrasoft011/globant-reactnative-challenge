import { useEffect, useState } from "react";

import { getQuotesApi } from "../helpers/getQuotesApi";

export const useFetchQuote = () => {
  const [state, setState] = useState([]);

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
