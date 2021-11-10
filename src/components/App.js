import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cardsData, setCardsData] = useState([]);

  function handleCardLike(cardData) {
    const isLiked = cardData.likes.some((item) => item._id === currentUser._id);
    if (!isLiked)
      api
        .likeCard(cardData._id)
        .then((newCard) => {
          setCardsData((cards) =>
            cards.map((card) => (card._id === cardData._id ? newCard : card))
          );
        })
        .catch((err) => console.log(`${err}`));
    else
      api
        .deleteLike(cardData._id)
        .then((newCard) => {
          setCardsData((cards) =>
            cards.map((card) => (card._id === cardData._id ? newCard : card))
          );
        })
        .catch((err) => console.log(`${err}`));
  }

  function handleCardDelete() {
    api
      .deleteCard(selectedCard._id)
      .then(() => {
        setCardsData((cards) =>
          cards.filter((card) => card._id !== selectedCard._id)
        );
        closeAllPopups();
      })
      .catch((err) => console.log(`${err}`));
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardArray) => {
        return setCardsData(cardArray);
      })
      .catch((err) => console.log(`${err}`));
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        const userData = res;
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`${err}`));
  }, []);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    handleCardDelete(selectedCard._id);
  };

  const imagePopupOpen = () => {
    setIsImagePopupOpen(true);
  };

  const handleCardClick = (props) => {
    setSelectedCard(props);
  };

  const handleDeleteCardClick = (card) => {
    setIsDeletePopupOpen(true);
    setSelectedCard(card);
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
    setIsDeletePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  const handleUpdateUser = (newData) => {
    api
      .editProfile(newData)
      .then((serverResponse) => {
        return setCurrentUser(serverResponse);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`${err}`));
  };

  const handleUpdateAvatar = (newData) => {
    api
      .avatarImage(newData)
      .then((serverResponse) => {
        return setCurrentUser(serverResponse);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`${err}`));
  };

  const handleAddPlaceSubmit = (newCard) => {
    api
      .createCard(newCard)
      .then((res) => {
        return setCardsData([res, ...cardsData]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`${err}`));
  };

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />

          <Main
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onImagePopupClick={imagePopupOpen}
            onDeleteCardClick={handleDeleteCardClick}
            cards={cardsData}
            onCardLike={handleCardLike}
          />
          <Footer />

          <ImagePopup
            name="pop-up"
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          />

          <EditProfilePopup
            /* profile */
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            /* Add Element */
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />

          <EditAvatarPopup
            /* change avatar */
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            /* delete */
            name="delete-card"
            title="Are you sure?"
            buttonTitle="Yes"
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleDeleteClick}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
