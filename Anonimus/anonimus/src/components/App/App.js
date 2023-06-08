import React, { useState } from "react";
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import InputForm from "../Main/InputForm";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import SubPopup from "../SubPopup/SubPopup";
import './App.css';
import Api from "../../utils/api.js";

function App(props) {

  const [text, setText] = useState("");
  const [isSubPopunOpen, setIsSubPopunOpen] = React.useState(false);


  function handlePopupClick() {
    setIsSubPopunOpen(true);
  }

  function closePopup() {
    setIsSubPopunOpen(false);
    document.removeEventListener("keydown", escClose);
  }

  /*обработка нажатия на escape*/
  function escClose(evt) {
    if (evt.key === "Escape") {
      closePopup();
    }
  }
  /*функция закрытия на escape*/
  function handleEscClose(isOpen) {
    if (isOpen) {
      document.addEventListener("keydown", escClose);
    }
  }

  /*функция закрытия на overlay*/
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup();
    }
  }

  const handleSubmit = (_e) => {
    console.log("text", text);
    Api.PostText(text)
     .then((res) => {
          setText("");
          handlePopupClick();
        });
  }

  const handleOnChange = (text) => {
    setText(text);
  }

    return (
        <>
        <main className="app">
          <Header/>
            <Switch>
              <Route exact path="/">
                <InputForm
                  onSubmit={handleSubmit}
                  onChange={handleOnChange}
                  text={text}
                />
                </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
              </Switch>
          <SubPopup
            isOpen={isSubPopunOpen}
            onClose={closePopup}
            escClose={handleEscClose}
            overlayClose={handleOverlayClose}
          />
          <Footer/>
        </main>
        </>
    )
  }

  export default App;
