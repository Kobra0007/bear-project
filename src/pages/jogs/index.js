import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Icon from '../../components/icon';
import Text from '../../components/text';

import styled from 'styled-components';

import Jog from '../../components/jog';

import classes from './styles.css';
import Button from '../../components/button';

import { getJogs, setCurrentJog, delSortedJogs } from '../../redux/modules/jogs';

const AddIcon = styled(Icon)`
    position: fixed;
    bottom: 40px;
    right: 40px;
`;

const Column = styled(Col)`
    margin-top: 200px;
    @media only screen and (max-width: 575px) {
        margin-top: 80px;
        span {
            min-width: 85px !important;
            min-height: 85px !important;
        }
	}
`;

class Jogs extends Component {

    static propTypes = {
        jogs: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.fetchData()
    };

    componentWillUnmount(){
        this.props.delSorted();
    }

    render() {

        const { jogs, setCurrent } = this.props;

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
                                <Col xs={12} sm={12} md={6} lg={3}>
                                    {jogs.map((item, idx) => <Jog {...item} key={`jog-${idx}`} onClick={()=>setCurrent(item)} />)}
                                </Col>
                            </Row>
                            <Link to='/add-jog' className={classes.link}>
                                <AddIcon type='add' size={60} />
                            </Link>
                        </div>
                    ) : (
                        <Row center="xs">
                            <Column md={5} xs={12}>
                                <Icon type='sad-emoticon' size={150} />
                                <Text className={classes.nothing}>Nothing is there</Text>
                                
                                <Link to='/add-jog' className={classes.link}>
                                    <Button className={classes.btn}>Create your jog first</Button>
                                </Link>
                            </Column>
                        </Row>
                    )}
    
            </Fragment>
        );
    }
}

const mapStateToProps = ({ jogs }) => ({
    jogs: jogs.sorted.length > 0 ?  jogs.sorted : jogs.jogsArr
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(getJogs()),
    setCurrent: (payload) => {dispatch(setCurrentJog(payload));dispatch(push(`/edit-jog`))},
    delSorted: () => dispatch(delSortedJogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Jogs);