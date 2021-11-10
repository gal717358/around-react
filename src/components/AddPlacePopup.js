import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const name = React.useRef();
  const link = React.useRef();

  function handleSubmitAddPlace(e) {
    e.preventDefault();

    props.onAddPlaceSubmit({
      name: name.current.value,
      link: link.current.value,
    });
    name.current.value = "";
    link.current.value = "";
  }

  return (
    <PopupWithForm
      /* Add Ele,emt */
      name="add-element"
      title="New place"
      buttonTitle="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmitAddPlace}
    >
      <input
        ref={name}
        id="name-element-input"
        type="text"
        name="name"
        className="form__text-input form__text-input_type_name-element"
        placeholder="Title"
        minLength={1}
        maxLength={30}
        required
      />
      <span id="name-element-input-error" className="form__input-error">
        {" "}
      </span>
      <input
        ref={link}
        id="img-element-input"
        type="url"
        name="link"
        className="form__text-input form__text-input_type_img-element"
        placeholder="Image Url"
        required
      />
      <span id="img-element-input-error" className="form__input-error">
        {" "}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
