import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-flexbox-grid';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';

import Card from '../../components/card';
import Icon from '../../components/icon';
import Text from '../../components/text';
import Button from '../../components/button';

import AddJog from '../add-jog';

import { userLogin } from '../../redux/modules/user';

import classes from './styles.css';

import { AppContext } from '../../app';

class Main extends Component {

    render () {
        return (
            <Fragment>
                <Helmet>
                    <title>
                        Main
                    </title>
                    <meta
                        name="description"
                        content="Main"
                    />
                </Helmet>
                <Row>
                    <Col xs={12}>
                        <AppContext.Consumer>
                            {data => data.mobile ? (
                                <>
                                    <Icon type="bear-face-mobile" size={160} className={classes.icon} />
                                    <Button className={classnames(classes.btn, classes.btnMobile)} onClick={this.props.login}>Let me in</Button>
                                </>
                            ) : (
                                <Card className={classes.card}>
                                    <Icon type="bear-face" size={160} className={classes.icon} />
                                    <Button className={classes.btn} onClick={this.props.login}>Let me in</Button>
                                </Card>
                            )}
    
                        </AppContext.Consumer>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ user }) => ({

});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(userLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
