import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "bg-[#FF3811] text-white py-3 px-4 rounded font-bold " : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;


// {border border-[#FF3811] text-[#FF3811] py-2.5 px-3.5 rounded} unactive class