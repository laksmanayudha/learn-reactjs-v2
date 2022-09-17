import React from "react";
import PropTypes, { func } from 'prop-types';

export function CounterDisplay({ count }) {
    return <p>Antrean ke-{count}</p>;
}

export function Lamp({ isDark }) {
    if (isDark) {
        return <p>Lamp is on</p>
    }

    return <p>Lamp is off</p>
}

export function List({ data }) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export function ListOfString({ data }) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export function Company({ data }) {
    const { name, city, since } = data;

    return (
        <div>
            <p>Nama: {name}</p>
            <p>Kota: {city}</p>
            <p>Sejak: {since}</p>
        </div>
    );
}

export function CompanyObjectOfNumber({ data }) {
    const { numOne, numTwo, numThree } = data;

    return (
        <div>
            <p>num: {numOne}</p>
            <p>num: {numTwo}</p>
            <p>num: {numThree}</p>
        </div>
    );
}

export function AddFriendButton({ onAdd }) {
    return (
        <button onClick={onAdd}>add friend</button>
    );
}

export class User {
    constructor(name) {
      this.name = name;
    }

}

export function NavigationHeader({ user }) {
    return (
        <nav>
            <h1>{user.name}</h1>
        </nav>
    );
}

export function Screen({ mode }) {
    return (
        <h3>{mode}</h3>
    );
}

CounterDisplay.propTypes = {
    count: PropTypes.number
};

Lamp.propTypes = {
    isDark: PropTypes.bool
};

List.propTypes = {
    data: PropTypes.array
};

ListOfString.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string)
};

Company.propTypes = {
    data: PropTypes.object
}

CompanyObjectOfNumber.propTypes = {
    data: PropTypes.objectOf(PropTypes.number)
}

AddFriendButton.propTypes = {
    onAdd: PropTypes.func
};

NavigationHeader.propTypes = {
    user: PropTypes.instanceOf(User)
};

Screen.propTypes = {
    mode: PropTypes.oneOf(["dark", "light"])
};