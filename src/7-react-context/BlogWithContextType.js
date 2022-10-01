import React from "react";
import LocaleContext from "./LocaleContext";

class BlogWithContextType extends React.Component {

    componentDidMount() {
        let value = this.context;
        // console.log(value);
        /* perform a side-effect at mount using the value of MyContext */
    }

    componentDidUpdate() {
        let value = this.context;
        // console.log(value);
        /* ... */
    }

    componentWillUnmount() {
        let value = this.context;
        // console.log(value);
        /* ... */
    }

    render() {
        let value = this.context;
        console.log(value);

        return <h1> {value.locale} </h1>
    }
}

BlogWithContextType.contextType = LocaleContext

export default BlogWithContextType;