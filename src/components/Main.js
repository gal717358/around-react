import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState({});
  const [userDescription, setUserDescription] = useState({});
  const [userAvatar, setUserAvatar] = useState({});
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((cardArray) => {
      return setCardData(cardArray);
    });
  }, []);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      console.log("resUser", res);
      const userData = res;
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  }, []);

  return (
    <>
      <main>
        <div className="profile">
          <button
            onClick={props.onEditAvatarClick}
            className="profile__change-avatar"
            aria-label="edit picture"
            name="edit picture"
            type="button"
          >
            <img
              className="profile__avatar"
              src={`${userAvatar}`}
              alt="profile picture"
            />
          </button>
          <div className="profile__info">
            <div className="profile__info-top">
              <h1 className="profile__title">{`${userName}`}</h1>
              <button
                onClick={props.onEditProfileClick}
                className="profile__edit-btn"
                aria-label="edit button"
                name="edit button"
                type="button"
              />
            </div>
            <p className="profile__job">{`${userDescription}`}</p>
          </div>
          <button
            onClick={props.onAddPlaceClick}
            className="profile__add-btn"
            aria-label="add button"
            name="add button"
            type="button"
          />
        </div>

        <div className="elements">
          {cardData.map((data) => {
            return (
              <Card
                card={data}
                onCardClick={props.onCardClick}
                key={data._id}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
export default Main;
