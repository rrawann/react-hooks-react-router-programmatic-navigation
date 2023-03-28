import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  // if the user isn't signed in, redirect them to the login page
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;