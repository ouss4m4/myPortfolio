import React from 'react';

const SideArrow = ({ onClick }) => {
    return (
        <i
            className='fa fa-chevron-circle-right'
            style={style}
            onClick={() => onClick()}
        >
        </i>
    );
};

const style = {
    position: 'fixed',
    left: '-3px',
    top: '50%',
    fontSize: '32px',
    color: 'rgb(0, 188, 212)',
    cursor: 'pointer'
}
export default SideArrow;