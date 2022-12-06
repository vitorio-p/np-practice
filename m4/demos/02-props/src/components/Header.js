import React from 'react';

function Header(props){
    console.log(props);

    return <h1>Hello {props.name} There. Fav color {props.color}</h1>
}

export default Header;