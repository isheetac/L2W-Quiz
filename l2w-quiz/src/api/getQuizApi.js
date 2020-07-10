//Check Response Status of API
const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with request ${response.status}`);
  }
  return response.json();
};

//Get Session Token of API
export const getSession = () => {
  return fetch(`https://opentdb.com/api_token.php?command=request`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`Fetching session token failed ${err}`);
    });
};

//Get API
export const getQuizApi = (categoryId, sessionToken) => {
  return fetch(
    `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple&encode=base64&token=${sessionToken}`
  )
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`Fetching quiz failed ${err}`);
    });
};
