import React from "react";
import Blog from "./Blog";
import LocaleContext from "./LocaleContext";
import BlogWithContextType from "./BlogWithContextType";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: 'id',
            toggleLocale: () => {
                this.setState((prevState) => ({ locale: prevState.locale === 'id' ? 'en' : 'id' }))
            }
        };
    }

    render() {
        return (
            <>
                <LocaleContext.Provider value={this.state}>
                    <Blog />

                    <BlogWithContextType />
                </LocaleContext.Provider>

                {/* testing default value, if no Providers provided in the parent component for Consumers */}
                <LocaleContext.Consumer>
                    {
                        (defaultValue) => {
                            return <p> {defaultValue} </p>
                        }
                    }
                </LocaleContext.Consumer>

                {/* using contextType, testing default value */}
                <BlogWithContextType />
            </>
        )
    }

    // render() {
    //     return (
    //         <LocaleContext.Provider value={{
    //             locale: this.state.locale,
    //             toggleLocale: () => {
    //               this.setState((prevState) => ({ locale: prevState.locale === 'id' ? 'en' : 'id' }));
    //             }
    //           }}>
    //             <Blog />
    //         </LocaleContext.Provider>
    //     )
    // }
}

export default App;