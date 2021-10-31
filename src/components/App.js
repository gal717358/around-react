import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import { useState } from "react";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const imagePopupOpen = () => {
    setIsImagePopupOpen(true);
  };

  const handleCardClick = (props) => {
    setSelectedCard(props);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />

        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onImagePopupClick={imagePopupOpen}
        />

        <Footer />
        <ImagePopup
          name="pop-up"
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        ></ImagePopup>

        <PopupWithForm
          /* profile */
          name="profile"
          title="Edit Profile"
          buttonTitle="save"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="name-input"
            type="text"
            name="name"
            className="form__text-input form__text-input_type_name"
            minLength={2}
            maxLength={40}
            required
          />
          <span id="name-input-error" className="form__input-error">
            {" "}
          </span>
          <input
            id="job-input"
            type="text"
            name="job"
            className="form__text-input form__text-input_type_job"
            minLength={2}
            maxLength={200}
            required
          />
          <span id="job-input-error" className="form__input-error">
            {" "}
          </span>
        </PopupWithForm>
        <PopupWithForm
          /* profile */
          name="add-element"
          title="New place"
          buttonTitle="Create"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
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
        <PopupWithForm
          /* change avatar */
          name="change-picture"
          title="Change profile picture"
          buttonTitle="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="change-picture-input"
            type="url"
            name="link"
            className="form__text-input form__text-input_type_change-picture"
            placeholder="profile Url"
            required
          />
          <span id="change-picture-input-error" className="form__input-error">
            {" "}
          </span>
        </PopupWithForm>
        <PopupWithForm
          /* delete */
          name="delete-card"
          title="Are you sure?"
          buttonTitle="Yes"
          // isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        ></PopupWithForm>
      </div>
    </div>
  );
}

export default App;
