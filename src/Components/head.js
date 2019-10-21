import React from "react";

function Header(){
    return(
        <div id="head">
            Nikita Nicole Pietersen<br></br>
            Here you'll find out about me, my projects and my education.<br></br>
            <img id="dispP" src={ require('../Images/profileImage.jpg') } />
        </div>
    )
}

export default Header;