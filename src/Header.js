import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

import LanguageIcon from '@material-ui/icons/Language';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Avatar from '@material-ui/core/Avatar';

import {Link} from 'react-router-dom';



function Header() {
    return (
        <div className="header">
        <Link to="/">
        <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
        
        </Link>
            <div className="header__center">
                <input type="text" className=""/>
                <SearchIcon  />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoHMmlZGEG2qC7lSj3xPjt7G0M_gPukTLCZD-Q=s88-c-k-c0x00ffffff-no-rj-mo" alt="avatar"/>
            </div>



        </div>
    )
}

export default Header
