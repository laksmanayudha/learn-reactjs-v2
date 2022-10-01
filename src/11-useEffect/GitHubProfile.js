import React from "react";
import { subscribeGitHubProfile } from "./api";

async function getGitHubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
}
   
function GitHubProfile({ username }) {
    const [profile, setProfile] = React.useState(null);
   
    React.useEffect(() => {
      const unsubscribe = subscribeGitHubProfile(username, (profile) => {
        setProfile(profile);
      })

      return () => {
        unsubscribe();
        setProfile((null));
      };

    }, [username]);
   
    if (profile === null) {
      return <p>loading ...</p>;
    }
   
    const { login, avatar_url } = profile;
   
    return (
      <>
      <img src={avatar_url} alt={login} />
        <h1>{login}</h1>
      </>
    );
}

export default GitHubProfile