import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const oidcGoogleConfiguration = {
  authority: process.env.REACT_APP_GOOGLE_AUTHORITY,
  client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  client_secret: process.env.REACT_APP_GOOGLE_SECRET,
  redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
  response_type: "code",
  scope: "openid profile email",
};

export const oidcLinkedInConfiguration = {
  authority: process.env.REACT_APP_LINKEDIN_AUTHORITY,
  client_id: process.env.REACT_APP_LINKEDIN_CLIENTID,
  client_secret: process.env.REACT_APP_LINKEDIN_SECRET,
  redirect_uri: process.env.REACT_APP_LINKEDIN_REDIRECT_URI,
  response_type: "code",
  scope: "r_liteprofile",
};

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const customHeaders = {
  Authorization: "Bearer YOUR_AUTH_TOKEN",
};

// Create a middleware link to set the headers
const authorizedLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...customHeaders,
    },
  };
});

const unAuthorizedLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

// Create the Apollo Client instance with the HTTP and auth links
export const client = new ApolloClient({
  link:
    localStorage.getItem("isLoggedIn") === "true"
      ? authorizedLink.concat(httpLink)
      : unAuthorizedLink.concat(httpLink),
  cache: new InMemoryCache(),
});
