import LocaleContext from "./LocaleContext";
import Post from "./Post";

function Blog() {

    return (
        <LocaleContext.Consumer>
            {
                ({locale, toggleLocale}) => {
                    return (
                        <Post locale={locale} toggleLocale={toggleLocale} />
                    )
                }
            }
        </LocaleContext.Consumer>
    )

    // same as, this is a "render props"
    /* 
        return (
            <LocaleContext.Consumer children={(locale) => {
                    return (
                        <Post locale={locale} />
                    )
                }}
            />
        )
    */ 
}

export default Blog;