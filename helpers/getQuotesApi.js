export const getQuotesApi = async () => {
  const url = "https://animechan.vercel.app/api/quotes";
  const response = await fetch(url);
  const data = await response.json();

  const quotes = data.map((element) => {
    return {
      anime: element.anime,
      character: element.character,
      quote: element.quote,
    };
  });

//   console.log("The quotes", quotes);
  return quotes;
};
