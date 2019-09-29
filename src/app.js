import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import mainRoutes from './config/routes';

// import NotFound from './pages/not-found';
import DesktopLayout from './components/Layout/DesktopLayout';
import MobileLayout from './components/Layout/MobileLayout';

const RoutesComponent = (props) => {
    const { loadedForPageKey, loggedIn, ...restProps } = props;

    return (
        <Switch>
            {mainRoutes.map(({ path, exact, component: Component, onEnter }) => {
                            
                return (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={props => (
                           (onEnter && onEnter(loggedIn)) ? (	
                                onEnter(loggedIn)
                                ) : (
                                    <Component 
                                        match={props.match}
                                        {...restProps}
                                    />
                                )

                        )}
                    />
                )
            })}
            
            {/* <Route component={NotFound} /> */}
        </Switch>
    )
}

export const AppContext = React.createContext();

class App extends Component {

    constructor(props) {
		super(props);
    }
    


    render() {
        const {
			mobileDetect,
			isAuth,
            matchedRoute,
            loggedIn,
			...restProps
        } = this.props;
        
        const Layout = mobileDetect.mobile() ? MobileLayout : DesktopLayout;
        
        return (
        <React.Fragment>
            <Layout>
                <AppContext.Provider value={{mobile: !!mobileDetect.mobile()}} >
                    <RoutesComponent loggedIn={loggedIn} />
                </AppContext.Provider>
            </Layout>
        </React.Fragment>
        )
    }
}

const mapStateToProps = ({user}) => ({
    loggedIn: user.loggedIn
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);