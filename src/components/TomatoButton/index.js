import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react";

function Button({ iconName, onPress }) {
    return (
        <TouchableOpacity>
            <a name={iconName} size={80} color="while" />
        </TouchableOpacity>
    );
}

export default Button;
