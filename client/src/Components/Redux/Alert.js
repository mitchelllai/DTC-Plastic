import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const Alert = ({ alerts }) =>
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <div key = {alert.id} style = {{display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "75%",
                                        height: "50px",
                                        backgroundColor: "red",
                                        color: "white"}}>
            {alert.msg}
        </div>
    ));

Alert.PropTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
    alerts: state.alert
});

export default connect(mapStatetoProps)(Alert);