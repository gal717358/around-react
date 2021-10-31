import React from "react";
function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button type="button" className="element__delete" name="delete button" />
      <img
        onClick={handleClick}
        className="element__image"
        alt={props.card.alt}
        src={props.card.link}
      />
      <div className="element__description">
        <h2 className="element__title"> {props.card.name}</h2>
        <div className="element__like-container">
          <button
            type="button"
            className="element__like-btn"
            aria-label="like-button"
          />
          <span className="element__likes-count">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
