import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
    return (
        props.alert && <div class="alert alert-warning alert-dismissible fade show fs-3 " role="alert">
            <strong>{capitalize(props.alert.type)}</strong> <strong>{capitalize(props.alert.msg)}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
