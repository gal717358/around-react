import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/api.js";
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
  const [currentUser, setCurrentUser] = useState("");
  const [cardData, setCardData] = useState([]);

  function handleCardLike(cardData) {
    const isLiked = cardData.likes.some((i) => i._id === currentUser._id);
    if (!isLiked)
      api.likeCard(cardData._id).then((newCard) => {
        setCardData((cards) =>
          cards.map((card) => (card._id === cardData._id ? newCard : card))
        );
      });
    else
      api.deleteLike(cardData._id).then((newCard) => {
        setCardData((cards) =>
          cards.map((card) => (card._id === cardData._id ? newCard : card))
        );
      });
  }

  function handleCardDelete() {
    api.deleteCard(selectedCard._id).then(() => {
      setCardData((cards) =>
        cards.filter((card) => card._id !== selectedCard._id)
      );
    });
    closeAllPopups();
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardArray) => {
        return setCardData(cardArray);
      })
      .catch((err) => console.log(`${err}`));
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        console.log("resUser", res);
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
      .catch((err) => console.log(`${err}`));
    closeAllPopups();
  };
  const handleUpdateAvatar = (newData) => {
    api
      .avatarImage(newData)
      .then((serverResponse) => {
        return setCurrentUser(serverResponse);
      })
      .catch((err) => console.log(`${err}`));
    closeAllPopups();
  };

  const handleAddPlaceSubmit = (newCard) => {
    api
      .createCard(newCard)
      .then((res) => {
        return setCardData([res, ...cardData]);
      })
      .catch((err) => console.log(`${err}`));
    closeAllPopups();
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
            cards={cardData}
            onCardLike={handleCardLike}
          />
          <Footer />
          <ImagePopup
            name="pop-up"
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          ></ImagePopup>

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
          ></AddPlacePopup>

          <EditAvatarPopup
            /* change avatar */
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          ></EditAvatarPopup>
          <PopupWithForm
            /* delete */
            name="delete-card"
            title="Are you sure?"
            buttonTitle="Yes"
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleDeleteClick}
          ></PopupWithForm>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
