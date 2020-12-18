import React from 'react';
import moment from 'moment';
import {
    NavMenu,
    Info
} from './styled';

const NavBarH = () => {
    const time = moment().format('HH:mm');
    const greet = (time >= '06:00') && (time < '13:00')
        ? 'Buenos días'
        : (time >= '13:00') && (time < '20:00')
            ? 'Buenas tardes'
            : 'Buenas noches';

    let styleB = "#B9B9B9";
    let styleC = "#000000";
    return (
        <NavMenu styleBackground={ styleB } styleColor={ styleC }>
            <Info>
                { `${ greet }` }
            </Info>
        </NavMenu>
  );
}

export default NavBarH;
