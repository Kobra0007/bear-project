import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import mainRoutes from './config/routes';

// import NotFound from './pages/not-found';
import DesktopLayout from './components/Layout/DesktopLayout';
import MobileLayout from './components/Layout/MobileLayout';

const RoutesComponent = (props) => {
    const { loadedForPageKey, ...restProps } = props;

    return (
        <Switch>
            {mainRoutes.map(({ path, exact, component: Component }) => {
            
                const pageKey = '';
                
                return (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={props => (
                            <Component 
                                key={`pageKey`}
                                match={props.match}
                                {...restProps}
                            />
                        )}
                    />
                )
            })}
            
            {/* <Route component={NotFound} /> */}
        </Switch>
    )
}


class App extends Component {

    constructor(props) {
		super(props);
	}

    render() {
        const {
			mobileDetect,
			isAuth,
			matchedRoute,
			...restProps
        } = this.props;
        
        const Layout = mobileDetect.mobile() ? MobileLayout : DesktopLayout;

        return (
        <React.Fragment>
            <Layout>
                <RoutesComponent />
            </Layout>
        </React.Fragment>
        )
    }
}

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);