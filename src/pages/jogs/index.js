import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Icon from '../../components/icon';
import Text from '../../components/text';

import styled from 'styled-components';

import Jog from '../../components/jog';

import classes from './styles.css';
import Button from '../../components/button';

import { getJogs } from '../../redux/modules/jogs';

const AddIcon = styled(Icon)`
    position: fixed;
    bottom: 40px;
    right: 40px;
`;

class Jogs extends Component {

    static propTypes = {
        jogs: PropTypes.array.isRequired,
    };
    componentDidMount() {
        this.props.fetchData()
    };

    render() {

        const { jogs } = this.props;

        return (
            <Fragment>
                    <Helmet>
                        <title>
                            Jogs
                        </title>
                        <meta
                            name="description"
                            content="jogs"
                        />
                    </Helmet>
                    {jogs.length > 0 ? (
                        <div>
                            <Row center="xs">
                                <Col xs={12} sm={3}>
                                    {jogs.map((item, idx) => <Jog {...item} key={`jog-${idx}`} />)}
                                </Col>
                            </Row>
                            <Link to='/add-jog' className={classes.link}>
                                <AddIcon type='add' size={60} />
                            </Link>
                        </div>
                    ) : (
                        <Row center="xs">
                            <Col md={5} xs={12} style={{marginTop: '200px'}}>
                                <Icon type='sad-emoticon' size={150} />
                                <Text className={classes.nothing}>Nothing is there</Text>
                                
                                <Link to='/add-jog' className={classes.link}>
                                    <Button className={classes.btn}>Create your jog first</Button>
                                </Link>
                            </Col>
                        </Row>
                    )}
    
            </Fragment>
        );
    }
}

const mapStateToProps = ({ jogs }) => ({
    jogs: jogs.jogsArr || []
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(getJogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Jogs);