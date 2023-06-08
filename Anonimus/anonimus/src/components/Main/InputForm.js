import "./InpunForm.css";
import React from "react";

function InputForm({onChange, onSubmit, text}) {


  return(
    <div className="main">
      <h1 className="main__header">Anonymous</h1>
      {/*<form className="main_form" onSubmit={props.onSubmit} >*/}
        <textarea   
          className="main__input"
          type="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="main__button" onClick={onSubmit}>
          Отправить
        </button>
      {/*</form>*/}
      </div>
  );
}

export default InputForm;
