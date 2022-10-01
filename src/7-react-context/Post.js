import React from "react";

function Post({ locale, toggleLocale }) {
    return (
        <>
            <p>The "value" prop passed to "Provider" was {locale}</p>
            <button onClick={toggleLocale}>change</button>
        </>
    )
}

export default Post;