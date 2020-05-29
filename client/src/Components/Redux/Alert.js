import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const Alert = ({ alerts }) =>
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <div key = {alert.id} style = {{display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "90%",
                                        height: "50px",
                                        backgroundColor: "red",
                                        color: "white",}}>
            {alert.msg}
        </div>
    ));

Alert.PropTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);