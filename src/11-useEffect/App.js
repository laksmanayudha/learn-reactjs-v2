import React from "react";
import GitHubProfile from "./GitHubProfile";

function App() {
    const [username, setUsername] = React.useState("dicodingacademy");

    const usernameChange = ({ target }) => setUsername(target.value);

    return (
        <>
            <div>
                <input 
                    type="radio"
                    name="username"
                    value="dicodingacademy"
                    checked={username === "dicodingacademy"}
                    onChange={usernameChange}
                />{' '}
                dicodingacademy
                <input 
                    type="radio"
                    name="username"
                    value="reactjs"
                    checked={username === "reactjs"}
                    onChange={usernameChange}
                />{' '}
                reactjs
            </div>

            <GitHubProfile username={username} />
        </>
    )
}

export default App;