(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),o=(n(14),n(9)),s=n(2),l=n.p+"static/media/logo.918b3ff6.svg",u=n(0);var d=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"header__logo",src:l,alt:"header-logo"})})},m=c.a.createContext();var b=function(e){var t=Object(a.useContext)(m),n=e.card.owner._id===t._id,c=e.card.likes.some((function(e){return e._id===t._id}));return Object(u.jsxs)("div",{className:"element",children:[Object(u.jsx)("button",{onClick:function(){e.onDeleteCardClick(e.card)},type:"button",className:"element__delete ".concat(n?"element__delete":"element__delete_hidden"),name:"delete button"}),Object(u.jsx)("img",{onClick:function(){e.onCardClick(e.card),e.imagePopupOpen()},className:"element__image",alt:e.card.alt,src:e.card.link}),Object(u.jsxs)("div",{className:"element__description",children:[Object(u.jsxs)("h2",{className:"element__title",children:[" ",e.card.name]}),Object(u.jsxs)("div",{className:"element__like-container",children:[Object(u.jsx)("button",{onClick:function(){e.onCardLike(e.card)},type:"button",className:"element__like-btn ".concat(c?"element__like-btn_active":""),"aria-label":"like-button"}),Object(u.jsx)("span",{className:"element__likes-count",children:e.card.likes.length})]})]})]})};var j=function(e){var t=Object(a.useContext)(m);return Object(u.jsxs)("main",{children:[Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsx)("button",{onClick:e.onEditAvatarClick,className:"profile__change-avatar","aria-label":"edit picture",name:"edit picture",type:"button",children:Object(u.jsx)("img",{className:"profile__avatar",src:"".concat(t.avatar),alt:"".concat(t.alt)})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__info-top",children:[Object(u.jsx)("h1",{className:"profile__title",children:"".concat(t.name)}),Object(u.jsx)("button",{onClick:e.onEditProfileClick,className:"profile__edit-btn","aria-label":"edit button",name:"edit button",type:"button"})]}),Object(u.jsx)("p",{className:"profile__job",children:"".concat(t.about)})]}),Object(u.jsx)("button",{onClick:e.onAddPlaceClick,className:"profile__add-btn","aria-label":"add button",name:"add button",type:"button"})]}),Object(u.jsx)("div",{className:"elements",children:e.cards.map((function(t){return Object(u.jsx)(b,{card:t,onCardClick:e.onCardClick,onDeleteCardClick:e.onDeleteCardClick,onCardLike:e.onCardLike,imagePopupOpen:e.onImagePopupClick},t._id)}))})]})};var f=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Around The U.S."})})};var p=function(e){return Object(u.jsx)("div",{className:"modal modal_type_".concat(e.name," ").concat(e.isOpen&&"modal_opened"),children:Object(u.jsxs)("div",{className:"modal__container",children:[Object(u.jsx)("button",{onClick:e.onClose,type:"button",className:"modal__close-btn","aria-label":"close button",name:"close button"}),Object(u.jsx)("form",{className:"form",name:"".concat(e.name),children:Object(u.jsxs)("fieldset",{className:"form__fieldset",children:[Object(u.jsx)("h2",{className:"form__title",children:"".concat(e.title)}),e.children,Object(u.jsx)("button",{onClick:e.onSubmit,type:"submit",name:"submit button",className:"form__submit-btn",children:"".concat(e.buttonTitle)})]})})]})})};var h=function(e){var t=c.a.useContext(m),n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),d=Object(s.a)(l,2),b=d[0],j=d[1];return c.a.useEffect((function(){o(t.name),j(t.about)}),[t]),Object(u.jsxs)(p,{name:"profile",title:"Edit Profile",buttonTitle:"save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:b})},children:[Object(u.jsx)("input",{onChange:function(e){o(e.target.value)},id:"name-input",type:"text",name:"name",value:"".concat(i),className:"form__text-input form__text-input_type_name",minLength:2,maxLength:40,required:!0}),Object(u.jsx)("span",{id:"name-input-error",className:"form__input-error",children:" "}),Object(u.jsx)("input",{onChange:function(e){j(e.target.value)},id:"job-input",type:"text",name:"job",value:"".concat(b),className:"form__text-input form__text-input_type_job",minLength:2,maxLength:200,required:!0}),Object(u.jsx)("span",{id:"job-input-error",className:"form__input-error",children:" "})]})};var _=function(e){return Object(u.jsx)("div",{className:"modal modal_type".concat(e.name," ").concat(e.isOpen&&"modal_opened"),children:Object(u.jsxs)("div",{className:"modal__container modal__container_type_popup",children:[Object(u.jsx)("button",{onClick:e.onClose,type:"button",className:"modal__close-btn","aria-label":"close button popup",name:"popup close button"}),Object(u.jsx)("img",{className:"modal__img",alt:e.card.name,src:e.card.link}),Object(u.jsx)("h2",{className:"modal__title",children:e.card.name})]})})},O=n(7),x=n(8),C=function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)}))},v=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(O.a)(this,e),this.baseUrl=n,this.headers=a}return Object(x.a)(e,[{key:"getInitialCards",value:function(){return C("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers})}},{key:"getUserInfo",value:function(){return C("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers})}},{key:"createCard",value:function(e){return C("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify(e)})}},{key:"editProfile",value:function(e){return C("".concat(this.baseUrl,"/users/me"),{headers:this.headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return C("".concat(this.baseUrl,"/cards/").concat(e),{headers:this.headers,method:"DELETE"})}},{key:"likeCard",value:function(e){return C("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"PUT"})}},{key:"deleteLike",value:function(e){return C("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"DELETE"})}},{key:"avatarImage",value:function(e){return C("".concat(this.baseUrl,"/users/me/avatar"),{headers:this.headers,method:"PATCH",body:JSON.stringify(e)})}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"c1447c07-9b09-4ed7-9490-5ede153a83d9","Content-Type":"application/json"}});var g=function(e){var t=Object(a.useRef)();return Object(u.jsxs)(p,{name:"change-picture",title:"Change profile picture",buttonTitle:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(u.jsx)("input",{ref:t,id:"change-picture-input",type:"url",name:"link",className:"form__text-input form__text-input_type_change-picture",placeholder:"profile Url",required:!0}),Object(u.jsx)("span",{id:"change-picture-input-error",className:"form__input-error",children:" "})]})};var k=function(e){var t=c.a.useRef(),n=c.a.useRef();return Object(u.jsxs)(p,{name:"add-element",title:"New place",buttonTitle:"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlaceSubmit({name:t.current.value,link:n.current.value}),t.current.value="",n.current.value=""},children:[Object(u.jsx)("input",{ref:t,id:"name-element-input",type:"text",name:"name",className:"form__text-input form__text-input_type_name-element",placeholder:"Title",minLength:1,maxLength:30,required:!0}),Object(u.jsx)("span",{id:"name-element-input-error",className:"form__input-error",children:" "}),Object(u.jsx)("input",{ref:n,id:"img-element-input",type:"url",name:"link",className:"form__text-input form__text-input_type_img-element",placeholder:"Image Url",required:!0}),Object(u.jsx)("span",{id:"img-element-input-error",className:"form__input-error",children:" "})]})};var N=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(s.a)(r,2),l=i[0],b=i[1],O=Object(a.useState)(!1),x=Object(s.a)(O,2),C=x[0],N=x[1],y=Object(a.useState)(!1),S=Object(s.a)(y,2),U=S[0],P=S[1],T=Object(a.useState)(!1),E=Object(s.a)(T,2),L=E[0],A=E[1],D=Object(a.useState)({}),I=Object(s.a)(D,2),q=I[0],w=I[1],J=Object(a.useState)({}),F=Object(s.a)(J,2),R=F[0],B=F[1],G=Object(a.useState)([]),H=Object(s.a)(G,2),z=H[0],M=H[1];function Y(){N(!1),b(!1),c(!1),P(!1),A(!1),w({})}return Object(a.useEffect)((function(){v.getInitialCards().then((function(e){return M(e)})).catch((function(e){return console.log("".concat(e))}))}),[]),Object(a.useEffect)((function(){v.getUserInfo().then((function(e){B(e)})).catch((function(e){return console.log("".concat(e))}))}),[]),Object(u.jsx)("div",{className:"page",children:Object(u.jsx)("div",{className:"page__container",children:Object(u.jsxs)(m.Provider,{value:R,children:[Object(u.jsx)(d,{}),Object(u.jsx)(j,{onEditAvatarClick:function(){N(!0)},onEditProfileClick:function(){c(!0)},onAddPlaceClick:function(){b(!0)},onCardClick:function(e){w(e)},onImagePopupClick:function(){A(!0)},onDeleteCardClick:function(e){P(!0),w(e)},cards:z,onCardLike:function(e){e.likes.some((function(e){return e._id===R._id}))?v.deleteLike(e._id).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("".concat(e))})):v.likeCard(e._id).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("".concat(e))}))}}),Object(u.jsx)(f,{}),Object(u.jsx)(_,{name:"pop-up",isOpen:L,onClose:Y,card:q}),Object(u.jsx)(h,{isOpen:n,onClose:Y,onUpdateUser:function(e){v.editProfile(e).then((function(e){return B(e)})).then((function(){Y()})).catch((function(e){return console.log("".concat(e))}))}}),Object(u.jsx)(k,{isOpen:l,onClose:Y,onAddPlaceSubmit:function(e){v.createCard(e).then((function(e){return M([e].concat(Object(o.a)(z)))})).then((function(){Y()})).catch((function(e){return console.log("".concat(e))}))}}),Object(u.jsx)(g,{isOpen:C,onClose:Y,onUpdateAvatar:function(e){v.avatarImage(e).then((function(e){return B(e)})).then((function(){Y()})).catch((function(e){return console.log("".concat(e))}))}}),Object(u.jsx)(p,{name:"delete-card",title:"Are you sure?",buttonTitle:"Yes",isOpen:U,onClose:Y,onSubmit:function(e){e.preventDefault(),q._id,v.deleteCard(q._id).then((function(){M((function(e){return e.filter((function(e){return e._id!==q._id}))})),Y()})).catch((function(e){return console.log("".concat(e))}))}})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.51c7c97e.chunk.js.map