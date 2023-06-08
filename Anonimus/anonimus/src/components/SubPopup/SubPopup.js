import React from "react";
import "./SubPopup.css";


function SubPopup(props) {


    return(
       <div className={`popup ${props.isOpen && 'popup_opened'}`} onClick={props.overlayClose}>
           <button className="popup__image" type="button" onClick={props.onClose}/>
           <h2 className="popup__text">Отправлено!</h2>
       </div>
    )
}

export default SubPopup;
