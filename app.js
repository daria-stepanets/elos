/*WORKING VERSION without Google API*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);

//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); // Hide prev button on first slide
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); // Show submit button on last slide
//           hideButton(splideNext); // Hide next button on last slide
//       } else {
//           submitButton.classList.remove("is--active"); // Hide submit button on other slides
//           showButton(splideNext); // Show next button on other slides
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//   function validateFields(slideIndex) {
//       const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//       const requiredFields = activeSlide.querySelectorAll("[required]");
//       const errorFields = activeSlide.querySelectorAll(".error");
  
//       let allValid = true;
  
//       requiredFields.forEach((field) => {
//           if (!field.value.trim()) {
//               allValid = false;
//           }
//       });
  
//       // If there are any fields with the `.error` class, keep next button enabled
//       if (allValid && errorFields.length === 0) {
//           enableButton(splideNext);
//       } else {
//           disableButton(splideNext);
//       }
//   }

//   // Run button update on mount
//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

//   // Listen for input changes in required fields
//   document.querySelectorAll("[required]").forEach((input) => {
//       input.addEventListener("input", function () {
//           validateFields(slider.index);
//       });
//   });
  
// //Allow to pick only 3 industry
// const checkboxgroup = document.querySelectorAll('#industry-wr input[type="checkbox"]');
//   const limit = 3; // Max selection limit

//   checkboxgroup.forEach(checkbox => {
//       checkbox.addEventListener("change", function () {
//           const checkedCount = Array.from(checkboxgroup).filter(cb => cb.checked).length;

//           if (checkedCount > limit) {
//               alert("You can select a maximum of " + limit + " checkboxes.");
//               setTimeout(() => {
//                   this.checked = false; // Uncheck after the event has fully processed
//               }, 0);
//           }
//       });
//   });

  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
//   const addContactButton = document.getElementById('addRefButton');
//   const contactsList = document.getElementById('contactsList');
//   const errorText = document.querySelectorAll('#error-message-refferals');
  

//   let contacts = [];
//   let inputValue = '';

// // Basic validation for email and phone
// const validateContact = (value) => {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
//   return emailPattern.test(value) || phonePattern.test(value);
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);



// // Сollect form data and download as JSON
// function downloadJSON() {
//   const formData = {};

//   document.querySelectorAll("input, textarea, select").forEach((input) => {
//       if (input.type === "radio") {
//           if (input.checked) {
//               formData[input.name] = input.value;
//           }
//       } else if (input.type === "checkbox") {
//           if (!formData[input.name]) {
//               formData[input.name] = [];
//           }
//           if (input.checked) {
//               formData[input.name].push(input.value);
//           }
//       } else {
//           formData[input.name] = input.value;
//       }
//   });

//   // Include the contacts array in the JSON data
//   formData["referrals"] = contacts; 

//   const jsonBlob = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json" });
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(jsonBlob);
//   link.download = "form_data.json";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }


// submitButton?.addEventListener("click", function (event) {
//   event.preventDefault();
//   downloadJSON();
// });
// });



// //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


/*Fixed json error in webflow*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);

//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); // Hide prev button on first slide
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); // Show submit button on last slide
//           hideButton(splideNext); // Hide next button on last slide
//       } else {
//           submitButton.classList.remove("is--active"); // Hide submit button on other slides
//           showButton(splideNext); // Show next button on other slides
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//   function validateFields(slideIndex) {
//       const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//       const requiredFields = activeSlide.querySelectorAll("[required]");
//       const errorFields = activeSlide.querySelectorAll(".error");
  
//       let allValid = true;
  
//       requiredFields.forEach((field) => {
//           if (!field.value.trim()) {
//               allValid = false;
//           }
//       });
  
//       // If there are any fields with the `.error` class, keep next button enabled
//       if (allValid && errorFields.length === 0) {
//           enableButton(splideNext);
//       } else {
//           disableButton(splideNext);
//       }
//   }

//   // Run button update on mount
//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

//   // Listen for input changes in required fields
//   document.querySelectorAll("[required]").forEach((input) => {
//       input.addEventListener("input", function () {
//           validateFields(slider.index);
//       });
//   });
  

  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
//   const addContactButton = document.getElementById('addRefButton');
//   const contactsList = document.getElementById('contactsList');
//   const errorText = document.querySelectorAll('#error-message-refferals');
  

//   let contacts = [];
//   let inputValue = '';

// // Basic validation for email and phone
// const validateContact = (value) => {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
//   return emailPattern.test(value) || phonePattern.test(value);
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);



// //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });

// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       // Include referrals array
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

/*Improving validator */
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); // Hide prev button on first slide
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); // Show submit button on last slide
//           hideButton(splideNext); // Hide next button on last slide
//       } else {
//           submitButton.classList.remove("is--active"); // Hide submit button on other slides
//           showButton(splideNext); // Show next button on other slides
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//   function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]");
//     const errorFields = activeSlide.querySelectorAll(".error");
    
//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Disable next button if any required field is empty or has an error
//     if (allValid && errorFields.length === 0) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }
// }



//   // Run button update on mount
//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });

  

  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');
  

//   let contacts = [];
//   let inputValue = '';

// // Basic validation for email and phone
// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);









// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       // Include referrals array
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

/*Improving submit button active state*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); // Hide prev button on first slide
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); // Show submit button on last slide
//           hideButton(splideNext); // Hide next button on last slide
//       } else {
//           submitButton.classList.remove("is--active"); // Hide submit button on other slides
//           showButton(splideNext); // Show next button on other slides
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   // Run button update on mount
//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');
  

//   let contacts = [];
//   let inputValue = '';

// // Basic validation for email and phone
// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);


// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       // Include referrals array
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

/*Google API*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); // Hide prev button on first slide
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); // Show submit button on last slide
//           hideButton(splideNext); // Hide next button on last slide
//       } else {
//           submitButton.classList.remove("is--active"); // Hide submit button on other slides
//           showButton(splideNext); // Show next button on other slides
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   // Run button update on mount
//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });

  

  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');
  

//   let contacts = [];
//   let inputValue = '';

// // Basic validation for email and phone
// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);

// //Google maps
// const allowedCountries = {
//     'us': 'United States', 'ca': 'Canada', 'br': 'Brazil', 'mx': 'Mexico', 'co': 'Colombia',
//     'ar': 'Argentina', 'cl': 'Chile', 'uy': 'Uruguay', 'gb': 'United Kingdom', 'fr': 'France', 
//     'de': 'Germany', 'es': 'Spain', 'pt': 'Portugal', 'it': 'Italy', 'ch': 'Switzerland', 
//     'nl': 'Netherlands', 'be': 'Belgium', 'at': 'Austria', 'se': 'Sweden', 'dk': 'Denmark',
//     'pl': 'Poland', 'no': 'Norway', 'fi': 'Finland', 'ie': 'Ireland', 'lu': 'Luxembourg', 
//     'is': 'Iceland', 'mc': 'Monaco', 'gr': 'Greece', 'sg': 'Singapore', 'hk': 'Hong Kong', 
//     'jp': 'Japan', 'kr': 'South Korea', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates', 
//     'za': 'South Africa', 'au': 'Australia', 'nz': 'New Zealand'
// };

// const countrySelect = document.getElementById("country");
// const cityInput = document.getElementById("city");

// let cityAutocomplete;

// // Populate country dropdown
// for (const [code, name] of Object.entries(allowedCountries)) {
//     const option = document.createElement("option");
//     option.value = code.toUpperCase(); // Convert country code to uppercase
//     option.textContent = name;
//     countrySelect.appendChild(option);
// }

// function initCityAutocomplete(countryCode) {
//     if (cityAutocomplete) {
//         cityAutocomplete.unbindAll(); 
//         cityAutocomplete = null;
//     }

//     cityAutocomplete = new google.maps.places.Autocomplete(cityInput, {
//         types: ["(cities)"],
//         componentRestrictions: { country: countryCode.toUpperCase() } // Ensure uppercase code
//     });
// }

// // Handle country selection change
// countrySelect.addEventListener("change", function () {
//     cityInput.value = ""; 
//     if (this.value) {
//         initCityAutocomplete(this.value);
//     }
// });

// // Initialize autocomplete if Google Maps API is loaded
// if (typeof google !== "undefined" && google.maps) {
//     initCityAutocomplete(countrySelect.value);
// } else {
//     console.error("Google Maps API failed to load.");
// }








// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       // Include referrals array
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with enter
//     }
// });

/*Google API in 2 fields*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); 
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); 
//           hideButton(splideNext); 
//       } else {
//           submitButton.classList.remove("is--active"); 
//           showButton(splideNext); 
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');

//   let contacts = [];
//   let inputValue = '';

// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);

// //Google maps
// const allowedCountries = {
//     'us': 'United States', 'ca': 'Canada', 'br': 'Brazil', 'mx': 'Mexico', 'co': 'Colombia',
//     'ar': 'Argentina', 'cl': 'Chile', 'uy': 'Uruguay', 'gb': 'United Kingdom', 'fr': 'France', 
//     'de': 'Germany', 'es': 'Spain', 'pt': 'Portugal', 'it': 'Italy', 'ch': 'Switzerland', 
//     'nl': 'Netherlands', 'be': 'Belgium', 'at': 'Austria', 'se': 'Sweden', 'dk': 'Denmark',
//     'pl': 'Poland', 'no': 'Norway', 'fi': 'Finland', 'ie': 'Ireland', 'lu': 'Luxembourg', 
//     'is': 'Iceland', 'mc': 'Monaco', 'gr': 'Greece', 'sg': 'Singapore', 'hk': 'Hong Kong', 
//     'jp': 'Japan', 'kr': 'South Korea', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates', 
//     'za': 'South Africa', 'au': 'Australia', 'nz': 'New Zealand'
// };

// const countrySelect = document.getElementById("country");
// const cityInputContainer = document.getElementById("city-container");
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInputContainer = document.getElementById("city-company-container");

// function populateCountryDropdown(selectElement) {
//     for (const [code, name] of Object.entries(allowedCountries)) {
//         const option = document.createElement("option");
//         option.value = code.toLowerCase(); 
//         option.textContent = name;
//         selectElement.appendChild(option);
//     }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// function initCityAutocomplete(container, countryCode) {
//     container.innerHTML = ""; // Clear previous autocomplete
    
//     const autocompleteElement = new google.maps.places.PlaceAutocompleteElement();
//     autocompleteElement.setComponentRestrictions({ country: [countryCode] });
    
//     container.appendChild(autocompleteElement);
    
//     autocompleteElement.addEventListener("gmp-placeselect", (event) => {
//         const place = event.detail.place;
//         console.log("Selected place:", place);
//     });
// }

// function handleCountryChange(selectElement, cityContainer) {
//     if (selectElement.value) {
//         initCityAutocomplete(cityContainer, selectElement.value);
//     }
// }

// countrySelect.addEventListener("change", function () {
//     handleCountryChange(this, cityInputContainer);
// });

// countryCompanySelect.addEventListener("change", function () {
//     handleCountryChange(this, cityCompanyInputContainer);
// });




// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with press enter
//     }
// });

/*GOOGLE API updated Places API*/

 // Wait for Google Maps API to load


// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); 
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); 
//           hideButton(splideNext); 
//       } else {
//           submitButton.classList.remove("is--active"); 
//           showButton(splideNext); 
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');

//   let contacts = [];
//   let inputValue = '';

// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);

// //Google maps
// const allowedCountries = {
//   'us': 'United States', 'ca': 'Canada', 'br': 'Brazil', 'mx': 'Mexico', 'co': 'Colombia',
//   'ar': 'Argentina', 'cl': 'Chile', 'uy': 'Uruguay', 'gb': 'United Kingdom', 'fr': 'France', 
//   'de': 'Germany', 'es': 'Spain', 'pt': 'Portugal', 'it': 'Italy', 'ch': 'Switzerland', 
//   'nl': 'Netherlands', 'be': 'Belgium', 'at': 'Austria', 'se': 'Sweden', 'dk': 'Denmark',
//   'pl': 'Poland', 'no': 'Norway', 'fi': 'Finland', 'ie': 'Ireland', 'lu': 'Luxembourg', 
//   'is': 'Iceland', 'mc': 'Monaco', 'gr': 'Greece', 'sg': 'Singapore', 'hk': 'Hong Kong', 
//   'jp': 'Japan', 'kr': 'South Korea', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates', 
//   'za': 'South Africa', 'au': 'Australia', 'nz': 'New Zealand'
// };

// const countrySelect = document.getElementById("country");
// const cityInput = document.getElementById("city"); // Changed to input field
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInput = document.getElementById("city-company"); // Changed to input field

// function populateCountryDropdown(selectElement) {
//   for (const [code, name] of Object.entries(allowedCountries)) {
//       const option = document.createElement("option");
//       option.value = code.toLowerCase(); 
//       option.textContent = name;
//       selectElement.appendChild(option);
//   }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// let cityAutocomplete, cityCompanyAutocomplete;

// function initAutocomplete() {
//   if (!google || !google.maps || !google.maps.places) {
//       console.error("Google Maps API failed to load.");
//       return;
//   }

//   cityAutocomplete = new google.maps.places.Autocomplete(cityInput, {
//       componentRestrictions: { country: countrySelect.value || "us" }, 
//       fields: ["address_components", "geometry", "icon", "name"]
//   });

//   cityCompanyAutocomplete = new google.maps.places.Autocomplete(cityCompanyInput, {
//       componentRestrictions: { country: countryCompanySelect.value || "us" }, 
//       fields: ["address_components", "geometry", "icon", "name"]
//   });

//   cityAutocomplete.addListener("place_changed", () => {
//       const place = cityAutocomplete.getPlace();
//       console.log("Selected city:", place);
//   });

//   cityCompanyAutocomplete.addListener("place_changed", () => {
//       const place = cityCompanyAutocomplete.getPlace();
//       console.log("Selected company city:", place);
//   });
// }

// function updateAutocompleteRestrictions(selectElement, autocompleteInstance) {
//   if (autocompleteInstance) {
//       autocompleteInstance.setComponentRestrictions({ country: selectElement.value });
//   }
// }

// countrySelect.addEventListener("change", function () {
//   updateAutocompleteRestrictions(this, cityAutocomplete);
// });

// countryCompanySelect.addEventListener("change", function () {
//   updateAutocompleteRestrictions(this, cityCompanyAutocomplete);
// });






// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with press enter
//     }
// });


/*Google API not working*/
// document.addEventListener("DOMContentLoaded", function () {
//     const stepSlider = document.querySelector(".splide");
//     const slider = new Splide(stepSlider, {
//         type: "fade",
//         pagination: false,
//         drag: false,
//         keyboard: false,
//         autoHeight: true,
//     });
  
//     slider.mount();
  
//     const signupButton = document.querySelector("#signup");
//     const popupWrapper = document.querySelector(".popup-wrapper");
//     const popupBackground = document.querySelector(".popup-background");
//     const closeButton = document.querySelector(".close-button");
//     const submitButton = document.querySelector("#submit");
//     const splideNext = document.querySelector(".splide__arrow--next");
//     const splidePrev = document.querySelector(".splide__arrow--prev");
  
//     signupButton?.addEventListener("click", function () {
//         popupWrapper.classList.add("is-active");
//         popupBackground.classList.add("is-active");
//     });
  
//     function closePopup() {
//         popupWrapper.classList.remove("is-active");
//         popupBackground.classList.remove("is-active");
//     }
  
//     closeButton?.addEventListener("click", closePopup);
//     popupBackground?.addEventListener("click", closePopup);
  
  
  
//     //Validator
//   function inputValidator(id, input, inputValue, length, instance) {
//     if (length > 0) {
//       let result = false;
  
//       if (id === "phone") {
//         result = validator.isMobilePhone(inputValue, 'any');
//       } else if (id === "email") {
//         result = validator.isEmail(inputValue);
//       }
  
//       let errorMessage = input.parentElement.querySelector(".error-message");
      
//       if (result) {
//         console.log(inputValue + " is valid");
//         input.classList.remove("error");
//         input.classList.add("valid");
//         if (errorMessage) errorMessage.style.display = "none";
//       } else {
//         console.log(inputValue + " is invalid");
//         input.classList.remove("valid");
//         input.classList.add("error");
//         if (errorMessage) errorMessage.style.display = "block";
//       }
//     } else {
//       let errorMessage = input.parentElement.querySelector(".error-message");
//       if (instance === "click") {
//         input.classList.add("error");
//         if (errorMessage) errorMessage.style.display = "block";
//       } else {
//         input.classList.remove("error", "valid");
//         if (errorMessage) errorMessage.style.display = "none";
//       }
//     }
//   }
  
//   // Change listener
//   document.addEventListener("change", function(event) {
//     if (event.target.classList.contains("text-field")) {
//       let id = event.target.id;
//       if (id === "phone" || id === "email") {
//         let inputValue = event.target.value;
//         let length = inputValue.length;
//         inputValidator(id, event.target, inputValue, length, "change");
//       }
//     }
//   });
  
  
//     // Buttons functions
//     function hideButton(button) {
//         button?.classList.add("hidden");
//     }
  
//     function showButton(button) {
//         button?.classList.remove("hidden");
//     }
  
//     function disableButton(button) {
//         button?.classList.add("is--disabled");
//         button?.classList.remove("is--active");
//     }
  
//     function enableButton(button) {
//         button?.classList.add("is--active");
//         button?.classList.remove("is--disabled");
//     }
  
//     function updateButtons(newIndex) {
//         if (newIndex === 0) {
//             hideButton(splidePrev); 
//         } else {
//             showButton(splidePrev);
//         }
  
//         if (newIndex === slider.length - 1) {
//             submitButton.classList.add("is--active");
//             submitButton.classList.remove("hidden"); 
//             hideButton(splideNext); 
//         } else {
//             submitButton.classList.remove("is--active"); 
//             showButton(splideNext); 
//         }
  
//         // Validate required fields on the active slide
//         validateFields(newIndex);
//     }
  
//    function validateFields(slideIndex) {
//       const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//       const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//       const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//       const requiredRadioGroups = new Set();
  
//       let allValid = true;
  
//       requiredFields.forEach((field) => {
//           if (field.type === "checkbox") {
//               if (!field.checked) {
//                   allValid = false;
//               }
//           } else if (!field.value.trim() || field.classList.contains("error")) {
//               allValid = false;
//           }
//       });
  
//       // Validate required radio buttons
//       activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//           requiredRadioGroups.add(radio.name);
//       });
  
//       requiredRadioGroups.forEach((groupName) => {
//           const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//           if (!checkedRadio) {
//               allValid = false;
//           }
//       });
  
//       // Enable/disable next button
//       if (allValid) {
//           enableButton(splideNext);
//       } else {
//           disableButton(splideNext);
//       }
  
//       // Enable/disable submit button on last slide
//       if (slideIndex === slider.length - 1) {
//           if (allValid) {
//               enableButton(submitButton);
//           } else {
//               disableButton(submitButton);
//           }
//       }
//   }
  
//   // Prevent form submission if required fields are missing
//   submitButton?.addEventListener("click", function (event) {
//       if (!submitButton.classList.contains("is--active")) {
//           event.preventDefault();
//           console.log("Form submission blocked: Required fields are missing.");
//       }
//   });
  
  
//     updateButtons(slider.index);
  
//     // Listen for slide change
//     slider.on("moved", function (newIndex) {
//         updateButtons(newIndex);
//     });
  
//   document.querySelectorAll("[required]").forEach((input) => {
//       let typingTimer;
  
//       input.addEventListener("input", () => {
//           clearTimeout(typingTimer); 
          
//           typingTimer = setTimeout(() => {
//               validateFields(slider.index);
//           }, 500); 
//       });
  
//       input.addEventListener("blur", () => validateFields(slider.index)); 
//   });
  
  
    
//   //Add referals logic 
//   const contactInput = document.getElementById('refferals');
//   const addContactButton = document.getElementById('addRefButton');
//   const contactsList = document.getElementById('contactsList');
//   const errorText = document.querySelectorAll('#error-message-refferals');
  
//     let contacts = [];
//     let inputValue = '';
  
//   const validateContact = (value) => {
//     return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
//   };
  
//   const updateContactsList = () => {
//     contactsList.innerHTML = '';
//     contacts.forEach(contact => {
//       const contactDiv = document.createElement('div');
//       contactDiv.classList.add('contact-item');
//       contactDiv.innerHTML = `
//         <span>${contact}</span>
//         <button class="remove-button" aria-label="Remove ${contact}">X</button>
//       `;
//       const removeButton = contactDiv.querySelector('.remove-button');
//       removeButton.addEventListener('click', () => removeContact(contact));
//       contactsList.appendChild(contactDiv);
//     });
//   };
  
//   const removeContact = (contactToRemove) => {
//     contacts = contacts.filter(contact => contact !== contactToRemove);
//     updateContactsList();
//   };
  
//   const handleInputChange = (e) => {
//     inputValue = e.target.value;
//     errorText.textContent = '';
//     errorText.forEach(error => error.style.display = 'none');
//     addContactButton.disabled = !inputValue.trim();
//   };
  
//   const addContact = () => {
//     if (!inputValue.trim()) return;
  
//     let errorMessage = '';
  
//     if (!validateContact(inputValue)) {
//       errorMessage = 'Please enter a valid email or phone number';
//     } else if (contacts.includes(inputValue)) {
//       errorMessage = 'This contact already exists';
//     }
  
//     if (errorMessage) {
//       errorText.forEach(error => {
//         error.textContent = errorMessage;
//         error.style.display = 'block'; 
//       });
//       return;
//     }
  
//     contacts.push(inputValue);
//     updateContactsList();
//     contactInput.value = '';
//     inputValue = '';
//     errorText.textContent = '';
//     errorText.forEach(error => error.style.display = 'none');
//     addContactButton.disabled = true;
//   };
  
//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       addContact();
//     }
//   };
  
//   addContactButton.addEventListener('click', addContact);
//   contactInput.addEventListener('input', handleInputChange);
//   contactInput.addEventListener('keydown', handleKeyDown);
  
//   //Google maps
//   const allowedCountries = {
//     'us': 'United States', 'ca': 'Canada', 'br': 'Brazil', 'mx': 'Mexico', 'co': 'Colombia',
//     'ar': 'Argentina', 'cl': 'Chile', 'uy': 'Uruguay', 'gb': 'United Kingdom', 'fr': 'France', 
//     'de': 'Germany', 'es': 'Spain', 'pt': 'Portugal', 'it': 'Italy', 'ch': 'Switzerland', 
//     'nl': 'Netherlands', 'be': 'Belgium', 'at': 'Austria', 'se': 'Sweden', 'dk': 'Denmark',
//     'pl': 'Poland', 'no': 'Norway', 'fi': 'Finland', 'ie': 'Ireland', 'lu': 'Luxembourg', 
//     'is': 'Iceland', 'mc': 'Monaco', 'gr': 'Greece', 'sg': 'Singapore', 'hk': 'Hong Kong', 
//     'jp': 'Japan', 'kr': 'South Korea', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates', 
//     'za': 'South Africa', 'au': 'Australia', 'nz': 'New Zealand'
// };

// const countrySelect = document.getElementById("country");
// const cityInputContainer = document.getElementById("city-container");
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInputContainer = document.getElementById("city-company-container");

// function populateCountryDropdown(selectElement) {
//     for (const [code, name] of Object.entries(allowedCountries)) {
//         const option = document.createElement("option");
//         option.value = code.toLowerCase(); 
//         option.textContent = name;
//         selectElement.appendChild(option);
//     }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// function initCityAutocomplete(container, countryCode) {
//     container.innerHTML = ""; // Clear previous autocomplete
    
//     const autocompleteElement = new google.maps.places.PlaceAutocompleteElement();
//     autocompleteElement.setComponentRestrictions({ country: [countryCode] });
    
//     container.appendChild(autocompleteElement);
    
//     autocompleteElement.addEventListener("gmp-placeselect", (event) => {
//         const place = event.detail.place;
//         console.log("Selected place:", place);
//     });
// }

// function handleCountryChange(selectElement, cityContainer) {
//     if (selectElement.value) {
//         initCityAutocomplete(cityContainer, selectElement.value);
//     }
// }

// countrySelect.addEventListener("change", function () {
//     handleCountryChange(this, cityInputContainer);
// });

// countryCompanySelect.addEventListener("change", function () {
//     handleCountryChange(this, cityCompanyInputContainer);
// });



  
  
//   // Сollect form data and download as JSON
//   function downloadJSON() {
//         const formData = {};
    
//         document.querySelectorAll("input, textarea, select").forEach((input) => {
//             if (input.type === "radio") {
//                 if (input.checked) {
//                     formData[input.name] = input.value;
//                 }
//             } else if (input.type === "checkbox") {
//                 if (!Array.isArray(formData[input.name])) {
//                     formData[input.name] = [];
//                 }
//                 if (input.checked) {
//                     formData[input.name].push(input.value);
//                 }
//             } else {
//                 formData[input.name] = input.value;
//             }
//         });
    
//         formData["referrals"] = contacts;
    
//         const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//         const link = document.createElement("a");
//         link.href = jsonString;
//         link.download = "form_data.json";
//         document.body.appendChild(link);
    
//         setTimeout(() => {
//             link.click();
//             document.body.removeChild(link);
//         }, 100);
//     }
    
//     submitButton?.addEventListener("click", function (event) {
//         event.preventDefault();
//         downloadJSON();
  
//   });
//   });
  
//   document.addEventListener("keydown", function (event) {
//       if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//           event.preventDefault(); // Prevent form submission with press enter
//       }
//   });



/*WITHOUT GOOGLE API*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); 
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); 
//           hideButton(splideNext); 
//       } else {
//           submitButton.classList.remove("is--active"); 
//           showButton(splideNext); 
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');

//   let contacts = [];
//   let inputValue = '';

// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);


// //Location
// const allowedCountries = {
//   'ar': 'Argentina', 'au': 'Australia', 'at': 'Austria', 'be': 'Belgium', 'br': 'Brazil',
//   'ca': 'Canada', 'cl': 'Chile', 'co': 'Colombia', 'dk': 'Denmark', 'fi': 'Finland',
//   'fr': 'France', 'de': 'Germany', 'gr': 'Greece', 'hk': 'Hong Kong', 'is': 'Iceland',
//   'ie': 'Ireland', 'it': 'Italy', 'jp': 'Japan', 'kr': 'South Korea', 'lu': 'Luxembourg',
//   'mc': 'Monaco', 'mx': 'Mexico', 'nl': 'Netherlands', 'nz': 'New Zealand', 'no': 'Norway',
//   'pl': 'Poland', 'pt': 'Portugal', 'sg': 'Singapore', 'za': 'South Africa', 'es': 'Spain',
//   'se': 'Sweden', 'ch': 'Switzerland', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates',
//   'gb': 'United Kingdom', 'us': 'United States', 'uy': 'Uruguay'
// };

// const countrySelect = document.getElementById("country");
// const cityInput = document.getElementById("city");
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInput = document.getElementById("city-company");

// let username = "dariastepanets"; // Replace with your GeoNames username

// // Populate country dropdown
// function populateCountryDropdown(selectElement) {
//   for (const [code, name] of Object.entries(allowedCountries)) {
//       const option = document.createElement("option");
//       option.value = code;
//       option.textContent = name;
//       selectElement.appendChild(option);
//   }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// // Fetch cities from GeoNames API
// async function fetchCities(countryCode, query) {
//   if (!countryCode || !query) return [];
//   const url = `https://secure.geonames.org/searchJSON?country=${countryCode}&featureClass=P&maxRows=50&username=${username}`;

//   try {
//       const response = await fetch(url);
//       const data = await response.json();

//       return data.geonames
//           .filter(city => city.population > 5000 && city.name.toLowerCase().includes(query.toLowerCase()))
//           .map(city => city.name)
//           .slice(0, 10); 
//   } catch (error) {
//       console.error("Error fetching cities:", error);
//       return [];
//   }
// }


// function createDropdown(inputElement) {
//   let dropdown = document.createElement("ul");
//   dropdown.classList.add("custom-autocomplete");
//   document.body.appendChild(dropdown);

  
//   function updatePosition() {
//       const rect = inputElement.getBoundingClientRect();
//       dropdown.style.left = `${rect.left + window.scrollX}px`;
//       dropdown.style.top = `${rect.bottom + window.scrollY}px`;
//       dropdown.style.width = `${rect.width}px`;
//   }

//   updatePosition();
//   window.addEventListener("resize", updatePosition);
//   return dropdown;
// }

// // Handle autocomplete logic
// function initCityAutocomplete(inputElement, countrySelect) {
//   let dropdown = createDropdown(inputElement);

//   inputElement.addEventListener("input", async function () {
//       const countryCode = countrySelect.value;
//       const query = inputElement.value.trim();

//       if (!query) {
//           dropdown.innerHTML = "";
//           dropdown.style.display = "none";
//           return;
//       }

//       const cities = await fetchCities(countryCode, query);
//       dropdown.innerHTML = "";
//       dropdown.style.display = cities.length ? "block" : "none";

//       cities.forEach(city => {
//           const item = document.createElement("li");
//           item.textContent = city;
//           item.addEventListener("click", () => {
//               inputElement.value = city;
//               dropdown.style.display = "none"; // Hide dropdown
//           });
//           dropdown.appendChild(item);
//       });
//   });

//   // Hide dropdown on outside click
//   document.addEventListener("click", (event) => {
//       if (!dropdown.contains(event.target) && event.target !== inputElement) {
//           dropdown.style.display = "none";
//       }
//   });
// }

// // Handle country selection changes
// function handleCountryChange(selectElement, cityElement) {
//   cityElement.value = "";
//   initCityAutocomplete(cityElement, selectElement);
// }

// countrySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityInput);
// });

// countryCompanySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityCompanyInput);
// });

// // Add basic styling for the dropdown
// const style = document.createElement("style");
// style.innerHTML = `
// .custom-autocomplete {
//   position: absolute;
//   background: white;
//   border: 1px solid #ccc;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   z-index: 1000;
//   max-height: 200px;
//   overflow-y: auto;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// }

// .custom-autocomplete li {
//   padding: 10px;
//   cursor: pointer;
// }

// .custom-autocomplete li:hover {
//   background: #f0f0f0;
// }
// `;
// document.head.appendChild(style);





// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with press enter
//     }
// });


/*FIXING CITY BUG ON FORM*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); 
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); 
//           hideButton(splideNext); 
//       } else {
//           submitButton.classList.remove("is--active"); 
//           showButton(splideNext); 
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');

//   let contacts = [];
//   let inputValue = '';

// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);


// //Location
// const allowedCountries = {
//   'ar': 'Argentina', 'au': 'Australia', 'at': 'Austria', 'be': 'Belgium', 'br': 'Brazil',
//   'ca': 'Canada', 'cl': 'Chile', 'co': 'Colombia', 'dk': 'Denmark', 'fi': 'Finland',
//   'fr': 'France', 'de': 'Germany', 'gr': 'Greece', 'hk': 'Hong Kong', 'is': 'Iceland',
//   'ie': 'Ireland', 'it': 'Italy', 'jp': 'Japan', 'kr': 'South Korea', 'lu': 'Luxembourg',
//   'mc': 'Monaco', 'mx': 'Mexico', 'nl': 'Netherlands', 'nz': 'New Zealand', 'no': 'Norway',
//   'pl': 'Poland', 'pt': 'Portugal', 'sg': 'Singapore', 'za': 'South Africa', 'es': 'Spain',
//   'se': 'Sweden', 'ch': 'Switzerland', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates',
//   'gb': 'United Kingdom', 'us': 'United States', 'uy': 'Uruguay'
// };

// const countrySelect = document.getElementById("country");
// const cityInput = document.getElementById("city");
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInput = document.getElementById("city-company");

// let username = "dariastepanets"; 

// function populateCountryDropdown(selectElement) {
//   for (const [code, name] of Object.entries(allowedCountries)) {
//       const option = document.createElement("option");
//       option.value = code;
//       option.textContent = name;
//       selectElement.appendChild(option);
//   }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// async function fetchCities(countryCode, query) {
//   if (!countryCode || !query) return [];
//   const url = `https://secure.geonames.org/searchJSON?country=${countryCode}&featureClass=P&username=${username}&orderby=population`;

//   try {
//       const response = await fetch(url);
//       const data = await response.json();

//       return data.geonames
//           .filter(city => city.name.toLowerCase().includes(query.toLowerCase()))
//           .map(city => city.name)
          
//   } catch (error) {
//       console.error("Error fetching cities:", error);
//       return [];
//   }
// }

// function createDropdown(inputElement) {
//   let dropdown = document.createElement("ul");
//   dropdown.classList.add("custom-autocomplete");
//   document.body.appendChild(dropdown);

  
//   function updatePosition() {
//       const rect = inputElement.getBoundingClientRect();
//       dropdown.style.left = `${rect.left + window.scrollX}px`;
//       dropdown.style.top = `${rect.bottom + window.scrollY}px`;
//       dropdown.style.width = `${rect.width}px`;
//   }

//   updatePosition();
//   window.addEventListener("resize", updatePosition);
//   window.addEventListener("scroll", updatePosition, true);
//   return dropdown;
// }

// function initCityAutocomplete(inputElement, countrySelect) {
//   let dropdown = createDropdown(inputElement);

//   inputElement.addEventListener("input", async function () {
//       const countryCode = countrySelect.value;
//       const query = inputElement.value.trim();

//       if (!query) {
//           dropdown.innerHTML = "";
//           dropdown.style.display = "none";
//           return;
//       }

//       const cities = await fetchCities(countryCode, query);
//       dropdown.innerHTML = "";
//       dropdown.style.display = cities.length ? "block" : "none";

//       cities.forEach(city => {
//           const item = document.createElement("li");
//           item.textContent = city;
//           item.addEventListener("click", () => {
//               inputElement.value = city;
//               dropdown.style.display = "none";
//           });
//           dropdown.appendChild(item);
//       });
//   });

//   document.addEventListener("click", (event) => {
//       if (!dropdown.contains(event.target) && event.target !== inputElement) {
//           dropdown.style.display = "none";
//       }
//   });

//   // Handle repositioning when scrolling
//   inputElement.addEventListener("focus", () => {
//     if (dropdown.children.length > 0) dropdown.style.display = "block";
//   });
// }

// function handleCountryChange(selectElement, cityElement) {
//   cityElement.value = "";
//   initCityAutocomplete(cityElement, selectElement);
// }

// countrySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityInput);
// });

// countryCompanySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityCompanyInput);
// });

// // Add basic styling for the city dropdown
// const style = document.createElement("style");
// style.innerHTML = `
// .custom-autocomplete {
//   position: absolute;
//   background: white;
//   border: 1px solid #ccc;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   z-index: 1000;
//   max-height: 200px;
//   overflow-y: auto;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// }

// .custom-autocomplete li {
//   padding: 10px;
//   cursor: pointer;
// }

// .custom-autocomplete li:hover {
//   background: #f0f0f0;
// }
// `;
// document.head.appendChild(style);



// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with press enter
//     }
// });

/*Improved city picker*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); 
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); 
//           hideButton(splideNext); 
//       } else {
//           submitButton.classList.remove("is--active"); 
//           showButton(splideNext); 
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');

//   let contacts = [];
//   let inputValue = '';

// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);


// //Location
// const allowedCountries = {
//   'ar': 'Argentina', 'au': 'Australia', 'at': 'Austria', 'be': 'Belgium', 'br': 'Brazil',
//   'ca': 'Canada', 'cl': 'Chile', 'co': 'Colombia', 'dk': 'Denmark', 'fi': 'Finland',
//   'fr': 'France', 'de': 'Germany', 'gr': 'Greece', 'hk': 'Hong Kong', 'is': 'Iceland',
//   'ie': 'Ireland', 'it': 'Italy', 'jp': 'Japan', 'kr': 'South Korea', 'lu': 'Luxembourg',
//   'mc': 'Monaco', 'mx': 'Mexico', 'nl': 'Netherlands', 'nz': 'New Zealand', 'no': 'Norway',
//   'pl': 'Poland', 'pt': 'Portugal', 'sg': 'Singapore', 'za': 'South Africa', 'es': 'Spain',
//   'se': 'Sweden', 'ch': 'Switzerland', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates',
//   'gb': 'United Kingdom', 'us': 'United States', 'uy': 'Uruguay'
// };

// const countrySelect = document.getElementById("country");
// const cityInput = document.getElementById("city");
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInput = document.getElementById("city-company");

// let username = "dashadot"; 

// function populateCountryDropdown(selectElement) {
//   for (const [code, name] of Object.entries(allowedCountries)) {
//       const option = document.createElement("option");
//       option.value = code;
//       option.textContent = name;
//       selectElement.appendChild(option);
//   }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// async function fetchCities(countryCode, query) {
//   if (!countryCode || !query) return [];

//   const url = `https://secure.geonames.org/searchJSON?country=${countryCode}&featureClass=P&name_startsWith=${query}&username=${username}&orderby=population&maxRows=1000`;

//   const allowedFcodelist = ["PPL", "PPLA", "PPLA2", "PPLA3", "PPLC", "PPLX"];

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     return data.geonames
//       .filter(city => allowedFcodelist.includes(city.fcode))
//       .map(city => {
//         const regionName = city.adminName1?.trim();
//         function capitalize(str) {
//           return str
//             .split(" ")
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//             .join(" ");
//         }
        
//         return {
//           name: capitalize(city.name),
//           region: regionName ? capitalize(regionName) : "",
//           display: regionName ? `${capitalize(city.name)}, ${capitalize(regionName)}` : capitalize(city.name)
//         };
//       });

//   } catch (error) {
//     console.error("Error fetching cities:", error);
//     return [];
//   }
// }

// function createDropdown(inputElement) {
//   let dropdown = document.createElement("ul");
//   dropdown.classList.add("custom-autocomplete");
//   document.body.appendChild(dropdown);

  
//   function updatePosition() {
//       const rect = inputElement.getBoundingClientRect();
//       dropdown.style.left = `${rect.left + window.scrollX}px`;
//       dropdown.style.top = `${rect.bottom + window.scrollY}px`;
//       dropdown.style.width = `${rect.width}px`;
//   }

//   updatePosition();
//   window.addEventListener("resize", updatePosition);
//   window.addEventListener("scroll", updatePosition, true);
//   return dropdown;
// }

// const cityDropdowns = new Map(); // Store dropdowns per input

// function initCityAutocomplete(inputElement, countrySelect) {
//   const dropdown = createDropdown(inputElement);
//   cityDropdowns.set(inputElement, dropdown);

//   inputElement.addEventListener("input", async function () {
//     const countryCode = countrySelect.value;
//     const query = inputElement.value.trim();

//     if (!query) {
//       dropdown.innerHTML = "";
//       dropdown.style.display = "none";
//       return;
//     }

//     const cities = await fetchCities(countryCode, query);
//     dropdown.innerHTML = "";
//     dropdown.style.display = cities.length ? "block" : "none";

//     cities.forEach(city => {
//       const item = document.createElement("li");
//       item.textContent = city.display;
//       item.addEventListener("click", () => {
//         inputElement.value = city.name;
//         dropdown.style.display = "none";
//       });
//       dropdown.appendChild(item);
//     });
//   });

//   document.addEventListener("click", (event) => {
//     if (!dropdown.contains(event.target) && event.target !== inputElement) {
//       dropdown.style.display = "none";
//     }
//   });

//   inputElement.addEventListener("focus", () => {
//     if (dropdown.children.length > 0) dropdown.style.display = "block";
//   });
// }

// function handleCountryChange(selectElement, cityElement) {
//   cityElement.value = "";
//   const dropdown = cityDropdowns.get(cityElement);
//   if (dropdown) {
//     dropdown.innerHTML = "";
//     dropdown.style.display = "none";
//   }
// }

// initCityAutocomplete(cityInput, countrySelect);
// initCityAutocomplete(cityCompanyInput, countryCompanySelect);

// countrySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityInput);
// });

// countryCompanySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityCompanyInput);
// });

// // Add basic styling for the city dropdown
// const style = document.createElement("style");
// style.innerHTML = `
// .custom-autocomplete {
//   position: absolute;
//   background: white;
//   border: 1px solid #ccc;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   z-index: 1000;
//   max-height: 200px;
//   overflow-y: auto;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// }

// .custom-autocomplete li {
//   padding: 10px;
//   cursor: pointer;
// }

// .custom-autocomplete li:hover {
//   background: #f0f0f0;
// }
// `;
// document.head.appendChild(style);




// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with press enter
//     }
// });


/*Last option with GEO names*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); 
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); 
//           hideButton(splideNext); 
//       } else {
//           submitButton.classList.remove("is--active"); 
//           showButton(splideNext); 
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');

//   let contacts = [];
//   let inputValue = '';

// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);


// //Location
// const allowedCountries = {
//   'ar': 'Argentina', 'au': 'Australia', 'at': 'Austria', 'be': 'Belgium', 'br': 'Brazil',
//   'ca': 'Canada', 'cl': 'Chile', 'co': 'Colombia', 'dk': 'Denmark', 'fi': 'Finland',
//   'fr': 'France', 'de': 'Germany', 'gr': 'Greece', 'hk': 'Hong Kong', 'is': 'Iceland',
//   'ie': 'Ireland', 'it': 'Italy', 'jp': 'Japan', 'kr': 'South Korea', 'lu': 'Luxembourg',
//   'mc': 'Monaco', 'mx': 'Mexico', 'nl': 'Netherlands', 'nz': 'New Zealand', 'no': 'Norway',
//   'pl': 'Poland', 'pt': 'Portugal', 'sg': 'Singapore', 'za': 'South Africa', 'es': 'Spain',
//   'se': 'Sweden', 'ch': 'Switzerland', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates',
//   'gb': 'United Kingdom', 'us': 'United States', 'uy': 'Uruguay'
// };

// const countrySelect = document.getElementById("country");
// const cityInput = document.getElementById("city");
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInput = document.getElementById("city-company");

// let username = "dashadot"; 

// function populateCountryDropdown(selectElement) {
//   for (const [code, name] of Object.entries(allowedCountries)) {
//       const option = document.createElement("option");
//       option.value = code;
//       option.textContent = name;
//       selectElement.appendChild(option);
//   }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// async function fetchCities(countryCode, query) {
//   if (!countryCode || !query) return [];

//   const url = `https://secure.geonames.org/searchJSON?country=${countryCode}&featureClass=P&name_startsWith=${query}&username=${username}&orderby=population&maxRows=1000`;

//   const allowedFcodelist = ["PPL", "PPLA2", "PPLA"];

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     const seen = new Set();

//     return data.geonames
//       .filter(city => {
//         const fcodeAllowed = allowedFcodelist.includes(city.fcode);
//         if (!fcodeAllowed) return false;

//         const name = city.name?.trim().toLowerCase() || "";
//         const region = city.adminName1?.trim().toLowerCase() || "";
//         const key = `${name}|${region}`;

//         if (seen.has(key)) {
//           return false; // already seen this city + region combo
//         } else {
//           seen.add(key);
//           return true;
//         }
//       })
//       .map(city => {
//         const regionName = city.adminName1?.trim();
//         function capitalize(str) {
//           return str
//             .split(" ")
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//             .join(" ");
//         }

//         return {
//           name: capitalize(city.name),
//           region: regionName ? capitalize(regionName) : "",
//           display: regionName ? `${capitalize(city.name)}, ${capitalize(regionName)}` : capitalize(city.name)
//         };
//       });

//   } catch (error) {
//     console.error("Error fetching cities:", error);
//     return [];
//   }
// }

// function createDropdown(inputElement) {
//   let dropdown = document.createElement("ul");
//   dropdown.classList.add("custom-autocomplete");
//   document.body.appendChild(dropdown);

  
//   function updatePosition() {
//       const rect = inputElement.getBoundingClientRect();
//       dropdown.style.left = `${rect.left + window.scrollX}px`;
//       dropdown.style.top = `${rect.bottom + window.scrollY}px`;
//       dropdown.style.width = `${rect.width}px`;
//   }

//   updatePosition();
//   window.addEventListener("resize", updatePosition);
//   window.addEventListener("scroll", updatePosition, true);
//   return dropdown;
// }

// const cityDropdowns = new Map(); // Store dropdowns per input

// function initCityAutocomplete(inputElement, countrySelect) {
//   const dropdown = createDropdown(inputElement);
//   cityDropdowns.set(inputElement, dropdown);

//   inputElement.addEventListener("input", async function () {
//     const countryCode = countrySelect.value;
//     const query = inputElement.value.trim();

//     if (!query) {
//       dropdown.innerHTML = "";
//       dropdown.style.display = "none";
//       return;
//     }

//     const cities = await fetchCities(countryCode, query);
//     dropdown.innerHTML = "";
//     dropdown.style.display = cities.length ? "block" : "none";

//     cities.forEach(city => {
//       const item = document.createElement("li");
//       item.textContent = city.display;
//       item.addEventListener("click", () => {
//         inputElement.value = city.name;
//         dropdown.style.display = "none";
//       });
//       dropdown.appendChild(item);
//     });
//   });

//   document.addEventListener("click", (event) => {
//     if (!dropdown.contains(event.target) && event.target !== inputElement) {
//       dropdown.style.display = "none";
//     }
//   });

//   inputElement.addEventListener("focus", () => {
//     if (dropdown.children.length > 0) dropdown.style.display = "block";
//   });
// }

// function handleCountryChange(selectElement, cityElement) {
//   cityElement.value = "";
//   const dropdown = cityDropdowns.get(cityElement);
//   if (dropdown) {
//     dropdown.innerHTML = "";
//     dropdown.style.display = "none";
//   }
// }

// initCityAutocomplete(cityInput, countrySelect);
// initCityAutocomplete(cityCompanyInput, countryCompanySelect);

// countrySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityInput);
// });

// countryCompanySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityCompanyInput);
// });

// // Add basic styling for the city dropdown
// const style = document.createElement("style");
// style.innerHTML = `
// .custom-autocomplete {
//   position: absolute;
//   background: white;
//   border: 1px solid #ccc;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   z-index: 1000;
//   max-height: 200px;
//   overflow-y: auto;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// }

// .custom-autocomplete li {
//   padding: 10px;
//   cursor: pointer;
// }

// .custom-autocomplete li:hover {
//   background: #f0f0f0;
// }
// `;
// document.head.appendChild(style);




// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with press enter
//     }
// });

/*MAPBOX OPTION*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stepSlider = document.querySelector(".splide");
//   const slider = new Splide(stepSlider, {
//       type: "fade",
//       pagination: false,
//       drag: false,
//       keyboard: false,
//       autoHeight: true,
//   });

//   slider.mount();

//   const signupButton = document.querySelector("#signup");
//   const popupWrapper = document.querySelector(".popup-wrapper");
//   const popupBackground = document.querySelector(".popup-background");
//   const closeButton = document.querySelector(".close-button");
//   const submitButton = document.querySelector("#submit");
//   const splideNext = document.querySelector(".splide__arrow--next");
//   const splidePrev = document.querySelector(".splide__arrow--prev");

//   signupButton?.addEventListener("click", function () {
//       popupWrapper.classList.add("is-active");
//       popupBackground.classList.add("is-active");
//   });

//   function closePopup() {
//       popupWrapper.classList.remove("is-active");
//       popupBackground.classList.remove("is-active");
//   }

//   closeButton?.addEventListener("click", closePopup);
//   popupBackground?.addEventListener("click", closePopup);



//   //Validator
// function inputValidator(id, input, inputValue, length, instance) {
//   if (length > 0) {
//     let result = false;

//     if (id === "phone") {
//       result = validator.isMobilePhone(inputValue, 'any');
//     } else if (id === "email") {
//       result = validator.isEmail(inputValue);
//     }

//     let errorMessage = input.parentElement.querySelector(".error-message");
    
//     if (result) {
//       console.log(inputValue + " is valid");
//       input.classList.remove("error");
//       input.classList.add("valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     } else {
//       console.log(inputValue + " is invalid");
//       input.classList.remove("valid");
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     }
//   } else {
//     let errorMessage = input.parentElement.querySelector(".error-message");
//     if (instance === "click") {
//       input.classList.add("error");
//       if (errorMessage) errorMessage.style.display = "block";
//     } else {
//       input.classList.remove("error", "valid");
//       if (errorMessage) errorMessage.style.display = "none";
//     }
//   }
// }

// // Change listener
// document.addEventListener("change", function(event) {
//   if (event.target.classList.contains("text-field")) {
//     let id = event.target.id;
//     if (id === "phone" || id === "email") {
//       let inputValue = event.target.value;
//       let length = inputValue.length;
//       inputValidator(id, event.target, inputValue, length, "change");
//     }
//   }
// });


//   // Buttons functions
//   function hideButton(button) {
//       button?.classList.add("hidden");
//   }

//   function showButton(button) {
//       button?.classList.remove("hidden");
//   }

//   function disableButton(button) {
//       button?.classList.add("is--disabled");
//       button?.classList.remove("is--active");
//   }

//   function enableButton(button) {
//       button?.classList.add("is--active");
//       button?.classList.remove("is--disabled");
//   }

//   function updateButtons(newIndex) {
//       if (newIndex === 0) {
//           hideButton(splidePrev); 
//       } else {
//           showButton(splidePrev);
//       }

//       if (newIndex === slider.length - 1) {
//           submitButton.classList.add("is--active");
//           submitButton.classList.remove("hidden"); 
//           hideButton(splideNext); 
//       } else {
//           submitButton.classList.remove("is--active"); 
//           showButton(splideNext); 
//       }

//       // Validate required fields on the active slide
//       validateFields(newIndex);
//   }

//  function validateFields(slideIndex) {
//     const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
//     const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
//     const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
//     const requiredRadioGroups = new Set();

//     let allValid = true;

//     requiredFields.forEach((field) => {
//         if (field.type === "checkbox") {
//             if (!field.checked) {
//                 allValid = false;
//             }
//         } else if (!field.value.trim() || field.classList.contains("error")) {
//             allValid = false;
//         }
//     });

//     // Validate required radio buttons
//     activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
//         requiredRadioGroups.add(radio.name);
//     });

//     requiredRadioGroups.forEach((groupName) => {
//         const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
//         if (!checkedRadio) {
//             allValid = false;
//         }
//     });

//     // Enable/disable next button
//     if (allValid) {
//         enableButton(splideNext);
//     } else {
//         disableButton(splideNext);
//     }

//     // Enable/disable submit button on last slide
//     if (slideIndex === slider.length - 1) {
//         if (allValid) {
//             enableButton(submitButton);
//         } else {
//             disableButton(submitButton);
//         }
//     }
// }

// // Prevent form submission if required fields are missing
// submitButton?.addEventListener("click", function (event) {
//     if (!submitButton.classList.contains("is--active")) {
//         event.preventDefault();
//         console.log("Form submission blocked: Required fields are missing.");
//     }
// });


//   updateButtons(slider.index);

//   // Listen for slide change
//   slider.on("moved", function (newIndex) {
//       updateButtons(newIndex);
//   });

// document.querySelectorAll("[required]").forEach((input) => {
//     let typingTimer;

//     input.addEventListener("input", () => {
//         clearTimeout(typingTimer); 
        
//         typingTimer = setTimeout(() => {
//             validateFields(slider.index);
//         }, 500); 
//     });

//     input.addEventListener("blur", () => validateFields(slider.index)); 
// });


  
// //Add referals logic 
// const contactInput = document.getElementById('refferals');
// const addContactButton = document.getElementById('addRefButton');
// const contactsList = document.getElementById('contactsList');
// const errorText = document.querySelectorAll('#error-message-refferals');

//   let contacts = [];
//   let inputValue = '';

// const validateContact = (value) => {
//   return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
// };

// const updateContactsList = () => {
//   contactsList.innerHTML = '';
//   contacts.forEach(contact => {
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact-item');
//     contactDiv.innerHTML = `
//       <span>${contact}</span>
//       <button class="remove-button" aria-label="Remove ${contact}">X</button>
//     `;
//     const removeButton = contactDiv.querySelector('.remove-button');
//     removeButton.addEventListener('click', () => removeContact(contact));
//     contactsList.appendChild(contactDiv);
//   });
// };

// const removeContact = (contactToRemove) => {
//   contacts = contacts.filter(contact => contact !== contactToRemove);
//   updateContactsList();
// };

// const handleInputChange = (e) => {
//   inputValue = e.target.value;
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = !inputValue.trim();
// };

// const addContact = () => {
//   if (!inputValue.trim()) return;

//   let errorMessage = '';

//   if (!validateContact(inputValue)) {
//     errorMessage = 'Please enter a valid email or phone number';
//   } else if (contacts.includes(inputValue)) {
//     errorMessage = 'This contact already exists';
//   }

//   if (errorMessage) {
//     errorText.forEach(error => {
//       error.textContent = errorMessage;
//       error.style.display = 'block'; 
//     });
//     return;
//   }

//   contacts.push(inputValue);
//   updateContactsList();
//   contactInput.value = '';
//   inputValue = '';
//   errorText.textContent = '';
//   errorText.forEach(error => error.style.display = 'none');
//   addContactButton.disabled = true;
// };

// const handleKeyDown = (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     addContact();
//   }
// };

// addContactButton.addEventListener('click', addContact);
// contactInput.addEventListener('input', handleInputChange);
// contactInput.addEventListener('keydown', handleKeyDown);


// //Location
// const allowedCountries = {
//   'ar': 'Argentina', 'au': 'Australia', 'at': 'Austria', 'be': 'Belgium', 'br': 'Brazil',
//   'ca': 'Canada', 'cl': 'Chile', 'co': 'Colombia', 'dk': 'Denmark', 'fi': 'Finland',
//   'fr': 'France', 'de': 'Germany', 'gr': 'Greece', 'hk': 'Hong Kong', 'is': 'Iceland',
//   'ie': 'Ireland', 'it': 'Italy', 'jp': 'Japan', 'kr': 'South Korea', 'lu': 'Luxembourg',
//   'mc': 'Monaco', 'mx': 'Mexico', 'nl': 'Netherlands', 'nz': 'New Zealand', 'no': 'Norway',
//   'pl': 'Poland', 'pt': 'Portugal', 'sg': 'Singapore', 'za': 'South Africa', 'es': 'Spain',
//   'se': 'Sweden', 'ch': 'Switzerland', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates',
//   'gb': 'United Kingdom', 'us': 'United States', 'uy': 'Uruguay'
// };

// const countrySelect = document.getElementById("country");
// const cityInput = document.getElementById("city");
// const countryCompanySelect = document.getElementById("country-company");
// const cityCompanyInput = document.getElementById("city-company");



// function populateCountryDropdown(selectElement) {
//   for (const [code, name] of Object.entries(allowedCountries)) {
//       const option = document.createElement("option");
//       option.value = code;
//       option.textContent = name;
//       selectElement.appendChild(option);
//   }
// }

// populateCountryDropdown(countrySelect);
// populateCountryDropdown(countryCompanySelect);

// const mapboxToken = 'pk.eyJ1IjoiZGFzaGFkb3QiLCJhIjoiY205OXQzajZ3MGYyczJqc2R3c2pwaXNseCJ9.VBmWA_EmzyxzPAdvAbwLig'; 

// async function fetchCities(countryCode, query) {
//   if (!countryCode || !query) return [];

//   const country = countryCode.toUpperCase(); // Mapbox uses ISO-3166-1 alpha-2 uppercase
//   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?types=place&country=${country}&access_token=${mapboxToken}&limit=10`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     const seen = new Set();

//     return data.features.map(feature => {
//       const name = feature.text || "";
//       const region = feature.context?.find(c => c.id.startsWith("region"))?.text || "";

//       const key = `${name.toLowerCase()}|${region.toLowerCase()}`;
//       if (seen.has(key)) return null;
//       seen.add(key);

//       const display = region ? `${name}, ${region}` : name;

//       return { name, region, display };
//     }).filter(Boolean);

//   } catch (error) {
//     console.error("Error fetching cities from Mapbox:", error);
//     return [];
//   }
// }
// function createDropdown(inputElement) {
//   let dropdown = document.createElement("ul");
//   dropdown.classList.add("custom-autocomplete");
//   document.body.appendChild(dropdown);

  
//   function updatePosition() {
//   requestAnimationFrame(() => {
//     const rect = inputElement.getBoundingClientRect();
//     dropdown.style.left = `${rect.left + window.scrollX}px`;
//     dropdown.style.top = `${rect.bottom + window.scrollY}px`;
//     dropdown.style.width = `${rect.width}px`;
//   });
// }

//   updatePosition();
//   window.addEventListener("resize", updatePosition);
//   window.addEventListener("scroll", updatePosition, true);
//   return dropdown;
// }

// const cityDropdowns = new Map(); // Store dropdowns per input

// function initCityAutocomplete(inputElement, countrySelect) {
//   const dropdown = createDropdown(inputElement);
//   cityDropdowns.set(inputElement, dropdown);

//   inputElement.addEventListener("input", async function () {
//     const countryCode = countrySelect.value;
//     const query = inputElement.value.trim();

//     if (!query) {
//       dropdown.innerHTML = "";
//       dropdown.style.display = "none";
//       return;
//     }

//     const cities = await fetchCities(countryCode, query);
//     dropdown.innerHTML = "";
//     /*dropdown.style.display = cities.length ? "block" : "none";*/
//       setTimeout(() => {
//   dropdown.style.display = cities.length ? "block" : "none";
//   updatePosition(); // force update again
// }, 0);

//     cities.forEach(city => {
//       const item = document.createElement("li");
//       item.textContent = city.display;
//       item.addEventListener("click", () => {
//         inputElement.value = city.name;
//         dropdown.style.display = "none";
//       });
//       dropdown.appendChild(item);
//     });
//   });

//   document.addEventListener("click", (event) => {
//     if (!dropdown.contains(event.target) && event.target !== inputElement) {
//       dropdown.style.display = "none";
//     }
//   });

//   inputElement.addEventListener("focus", () => {
//     if (dropdown.children.length > 0) dropdown.style.display = "block";
//   });
// }

// function handleCountryChange(selectElement, cityElement) {
//   cityElement.value = "";
//   const dropdown = cityDropdowns.get(cityElement);
//   if (dropdown) {
//     dropdown.innerHTML = "";
//     dropdown.style.display = "none";
//   }
// }

// initCityAutocomplete(cityInput, countrySelect);
// initCityAutocomplete(cityCompanyInput, countryCompanySelect);

// countrySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityInput);
// });

// countryCompanySelect.addEventListener("change", function () {
//   handleCountryChange(this, cityCompanyInput);
// });

// // Add basic styling for the city dropdown
// const style = document.createElement("style");
// style.innerHTML = `
// .custom-autocomplete {
//   position: absolute;
//   background: white;
//   border: 1px solid #ccc;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   z-index: 1000;
//   max-height: 200px;
//   overflow-y: auto;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// }

// .custom-autocomplete li {
//   padding: 10px;
//   cursor: pointer;
// }

// .custom-autocomplete li:hover {
//   background: #f0f0f0;
// }
// `;
// document.head.appendChild(style);




// // Сollect form data and download as JSON
// function downloadJSON() {
//       const formData = {};
  
//       document.querySelectorAll("input, textarea, select").forEach((input) => {
//           if (input.type === "radio") {
//               if (input.checked) {
//                   formData[input.name] = input.value;
//               }
//           } else if (input.type === "checkbox") {
//               if (!Array.isArray(formData[input.name])) {
//                   formData[input.name] = [];
//               }
//               if (input.checked) {
//                   formData[input.name].push(input.value);
//               }
//           } else {
//               formData[input.name] = input.value;
//           }
//       });
  
//       formData["referrals"] = contacts;
  
//       const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
//       const link = document.createElement("a");
//       link.href = jsonString;
//       link.download = "form_data.json";
//       document.body.appendChild(link);
  
//       setTimeout(() => {
//           link.click();
//           document.body.removeChild(link);
//       }, 100);
//   }
  
//   submitButton?.addEventListener("click", function (event) {
//       event.preventDefault();
//       downloadJSON();

// });
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
//         event.preventDefault(); // Prevent form submission with press enter
//     }
// });

/* Option with static DATA*/

document.addEventListener("DOMContentLoaded", function () {
  const stepSlider = document.querySelector(".splide");
  const slider = new Splide(stepSlider, {
      type: "fade",
      pagination: false,
      drag: false,
      keyboard: false,
      autoHeight: true,
  });

  slider.mount();

  const signupButton = document.querySelector("#signup");
  const popupWrapper = document.querySelector(".popup-wrapper");
  const popupBackground = document.querySelector(".popup-background");
  const closeButton = document.querySelector(".close-button");
  const submitButton = document.querySelector("#submit");
  const splideNext = document.querySelector(".splide__arrow--next");
  const splidePrev = document.querySelector(".splide__arrow--prev");

  signupButton?.addEventListener("click", function () {
      popupWrapper.classList.add("is-active");
      popupBackground.classList.add("is-active");
  });

  function closePopup() {
      popupWrapper.classList.remove("is-active");
      popupBackground.classList.remove("is-active");
  }

  closeButton?.addEventListener("click", closePopup);
  popupBackground?.addEventListener("click", closePopup);



  //Validator
function inputValidator(id, input, inputValue, length, instance) {
  if (length > 0) {
    let result = false;

    if (id === "phone") {
      result = validator.isMobilePhone(inputValue, 'any');
    } else if (id === "email") {
      result = validator.isEmail(inputValue);
    }

    let errorMessage = input.parentElement.querySelector(".error-message");
    
    if (result) {
      console.log(inputValue + " is valid");
      input.classList.remove("error");
      input.classList.add("valid");
      if (errorMessage) errorMessage.style.display = "none";
    } else {
      console.log(inputValue + " is invalid");
      input.classList.remove("valid");
      input.classList.add("error");
      if (errorMessage) errorMessage.style.display = "block";
    }
  } else {
    let errorMessage = input.parentElement.querySelector(".error-message");
    if (instance === "click") {
      input.classList.add("error");
      if (errorMessage) errorMessage.style.display = "block";
    } else {
      input.classList.remove("error", "valid");
      if (errorMessage) errorMessage.style.display = "none";
    }
  }
}

// Change listener
document.addEventListener("change", function(event) {
  if (event.target.classList.contains("text-field")) {
    let id = event.target.id;
    if (id === "phone" || id === "email") {
      let inputValue = event.target.value;
      let length = inputValue.length;
      inputValidator(id, event.target, inputValue, length, "change");
    }
  }
});


  // Buttons functions
  function hideButton(button) {
      button?.classList.add("hidden");
  }

  function showButton(button) {
      button?.classList.remove("hidden");
  }

  function disableButton(button) {
      button?.classList.add("is--disabled");
      button?.classList.remove("is--active");
  }

  function enableButton(button) {
      button?.classList.add("is--active");
      button?.classList.remove("is--disabled");
  }

  function updateButtons(newIndex) {
      if (newIndex === 0) {
          hideButton(splidePrev); 
      } else {
          showButton(splidePrev);
      }

      if (newIndex === slider.length - 1) {
          submitButton.classList.add("is--active");
          submitButton.classList.remove("hidden"); 
          hideButton(splideNext); 
      } else {
          submitButton.classList.remove("is--active"); 
          showButton(splideNext); 
      }

      // Validate required fields on the active slide
      validateFields(newIndex);
  }

 function validateFields(slideIndex) {
    const activeSlide = document.querySelector(`.splide__slide:nth-child(${slideIndex + 1})`);
    const requiredFields = activeSlide.querySelectorAll("[required]:not([type='radio'])");
    const requiredCheckboxes = activeSlide.querySelectorAll("[required][type='checkbox']");
    const requiredRadioGroups = new Set();

    let allValid = true;

    requiredFields.forEach((field) => {
        if (field.type === "checkbox") {
            if (!field.checked) {
                allValid = false;
            }
        } else if (!field.value.trim() || field.classList.contains("error")) {
            allValid = false;
        }
    });

    // Validate required radio buttons
    activeSlide.querySelectorAll("[required][type='radio']").forEach((radio) => {
        requiredRadioGroups.add(radio.name);
    });

    requiredRadioGroups.forEach((groupName) => {
        const checkedRadio = activeSlide.querySelector(`input[name="${groupName}"]:checked`);
        if (!checkedRadio) {
            allValid = false;
        }
    });

    // Enable/disable next button
    if (allValid) {
        enableButton(splideNext);
    } else {
        disableButton(splideNext);
    }

    // Enable/disable submit button on last slide
    if (slideIndex === slider.length - 1) {
        if (allValid) {
            enableButton(submitButton);
        } else {
            disableButton(submitButton);
        }
    }
}

// Prevent form submission if required fields are missing
submitButton?.addEventListener("click", function (event) {
    if (!submitButton.classList.contains("is--active")) {
        event.preventDefault();
        console.log("Form submission blocked: Required fields are missing.");
    }
});


  updateButtons(slider.index);

  // Listen for slide change
  slider.on("moved", function (newIndex) {
      updateButtons(newIndex);
  });

document.querySelectorAll("[required]").forEach((input) => {
    let typingTimer;

    input.addEventListener("input", () => {
        clearTimeout(typingTimer); 
        
        typingTimer = setTimeout(() => {
            validateFields(slider.index);
        }, 500); 
    });

    input.addEventListener("blur", () => validateFields(slider.index)); 
});


  
//Add referals logic 
const contactInput = document.getElementById('refferals');
const addContactButton = document.getElementById('addRefButton');
const contactsList = document.getElementById('contactsList');
const errorText = document.querySelectorAll('#error-message-refferals');

  let contacts = [];
  let inputValue = '';

const validateContact = (value) => {
  return validator.isEmail(value) || validator.isMobilePhone(value, 'any');
};

const updateContactsList = () => {
  contactsList.innerHTML = '';
  contacts.forEach(contact => {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-item');
    contactDiv.innerHTML = `
      <span>${contact}</span>
      <button class="remove-button" aria-label="Remove ${contact}">X</button>
    `;
    const removeButton = contactDiv.querySelector('.remove-button');
    removeButton.addEventListener('click', () => removeContact(contact));
    contactsList.appendChild(contactDiv);
  });
};

const removeContact = (contactToRemove) => {
  contacts = contacts.filter(contact => contact !== contactToRemove);
  updateContactsList();
};

const handleInputChange = (e) => {
  inputValue = e.target.value;
  errorText.textContent = '';
  errorText.forEach(error => error.style.display = 'none');
  addContactButton.disabled = !inputValue.trim();
};

const addContact = () => {
  if (!inputValue.trim()) return;

  let errorMessage = '';

  if (!validateContact(inputValue)) {
    errorMessage = 'Please enter a valid email or phone number';
  } else if (contacts.includes(inputValue)) {
    errorMessage = 'This contact already exists';
  }

  if (errorMessage) {
    errorText.forEach(error => {
      error.textContent = errorMessage;
      error.style.display = 'block'; 
    });
    return;
  }

  contacts.push(inputValue);
  updateContactsList();
  contactInput.value = '';
  inputValue = '';
  errorText.textContent = '';
  errorText.forEach(error => error.style.display = 'none');
  addContactButton.disabled = true;
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addContact();
  }
};

addContactButton.addEventListener('click', addContact);
contactInput.addEventListener('input', handleInputChange);
contactInput.addEventListener('keydown', handleKeyDown);


//Location
const allowedCountries = {
  'ar': 'Argentina', 'au': 'Australia', 'at': 'Austria', 'be': 'Belgium', 'br': 'Brazil',
  'ca': 'Canada', 'cl': 'Chile', 'co': 'Colombia', 'dk': 'Denmark', 'fi': 'Finland',
  'fr': 'France', 'de': 'Germany', 'gr': 'Greece', 'hk': 'Hong Kong', 'is': 'Iceland',
  'ie': 'Ireland', 'it': 'Italy', 'jp': 'Japan', 'kr': 'South Korea', 'lu': 'Luxembourg',
  'mc': 'Monaco', 'mx': 'Mexico', 'nl': 'Netherlands', 'nz': 'New Zealand', 'no': 'Norway',
  'pl': 'Poland', 'pt': 'Portugal', 'sg': 'Singapore', 'za': 'South Africa', 'es': 'Spain',
  'se': 'Sweden', 'ch': 'Switzerland', 'tw': 'Taiwan', 'th': 'Thailand', 'ae': 'United Arab Emirates',
  'gb': 'United Kingdom', 'us': 'United States', 'uy': 'Uruguay'
};

const countrySelect = document.getElementById("country");
const cityInput = document.getElementById("city");
const countryCompanySelect = document.getElementById("country-company");
const cityCompanyInput = document.getElementById("city-company");

function populateCountryDropdown(selectElement) {
  for (const [code, name] of Object.entries(allowedCountries)) {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = name;
      selectElement.appendChild(option);
  }
}

populateCountryDropdown(countrySelect);
populateCountryDropdown(countryCompanySelect);

async function fetchCities(countryCode, query) {
  if (!countryCode || !query) return [];

  try {
    const response = await fetch('https://cdn.prod.website-files.com/67e2788b205920308a052fd8/67f68583cac588b8df4d9738_cities.txt');
    const text = await response.text(); // manually get text
    const data = JSON.parse(text); // parse it yourself

    const lowerQuery = query.trim().toLowerCase();
    const seen = new Set();

    return data
      .filter(city => {
        const matchesCountry = city.country_code?.toLowerCase() === countryCode.toLowerCase();
        const name = city.name?.trim().toLowerCase() || "";
        const region = city.state_name?.trim().toLowerCase() || "";
        const matchesQuery = name.startsWith(lowerQuery) || region.startsWith(lowerQuery);

        const key = `${name}-${region}`;
        if (!matchesCountry || !matchesQuery || seen.has(key)) return false;

        seen.add(key);
        return true;
      })
      .map(city => ({
        ...city,
        display: city.state_name ? `${city.name}, ${city.state_name}` : city.name
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

  } catch (error) {
    console.error("Error fetching or parsing cities from txt:", error);
    return [];
  }
}

function createDropdown(inputElement) {
  let dropdown = document.createElement("ul");
  dropdown.classList.add("custom-autocomplete");
  document.body.appendChild(dropdown);

  
  function updatePosition() {
      const rect = inputElement.getBoundingClientRect();
      dropdown.style.left = `${rect.left + window.scrollX}px`;
      dropdown.style.top = `${rect.bottom + window.scrollY}px`;
      dropdown.style.width = `${rect.width}px`;
  }

  updatePosition();
  window.addEventListener("resize", updatePosition);
  window.addEventListener("scroll", updatePosition, true);
  return dropdown;
}

const cityDropdowns = new Map(); 

function initCityAutocomplete(inputElement, countrySelect) {
  const dropdown = createDropdown(inputElement);
  cityDropdowns.set(inputElement, dropdown);

  inputElement.addEventListener("input", async function () {
    const countryCode = countrySelect.value;
    const query = inputElement.value.trim();

    if (!query) {
      dropdown.innerHTML = "";
      dropdown.style.display = "none";
      return;
    }

    const cities = await fetchCities(countryCode, query);
    dropdown.innerHTML = "";
    dropdown.style.display = cities.length ? "block" : "none";

    cities.forEach(city => {
  const item = document.createElement("li");
  // Construct a display text if city.display doesn't exist
  const display = city.display || (city.state_name ? `${city.name}, ${city.state_name}` : city.name);
  item.textContent = display;
  item.addEventListener("click", () => {
    inputElement.value = city.name;
    dropdown.style.display = "none";
  });
  dropdown.appendChild(item);
});
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target) && event.target !== inputElement) {
      dropdown.style.display = "none";
    }
  });

  inputElement.addEventListener("focus", () => {
    if (dropdown.children.length > 0) dropdown.style.display = "block";
  });
}

function handleCountryChange(selectElement, cityElement) {
  cityElement.value = "";
  const dropdown = cityDropdowns.get(cityElement);
  if (dropdown) {
    dropdown.innerHTML = "";
    dropdown.style.display = "none";
  }
}

initCityAutocomplete(cityInput, countrySelect);
initCityAutocomplete(cityCompanyInput, countryCompanySelect);

countrySelect.addEventListener("change", function () {
  handleCountryChange(this, cityInput);
});

countryCompanySelect.addEventListener("change", function () {
  handleCountryChange(this, cityCompanyInput);
});

// Add basic styling for the city dropdown
const style = document.createElement("style");
style.innerHTML = `
.custom-autocomplete {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-autocomplete li {
  padding: 10px;
  cursor: pointer;
}

.custom-autocomplete li:hover {
  background: #f0f0f0;
}
`;
document.head.appendChild(style);

// Сollect form data and download as JSON
function downloadJSON() {
      const formData = {};
  
      document.querySelectorAll("input, textarea, select").forEach((input) => {
          if (input.type === "radio") {
              if (input.checked) {
                  formData[input.name] = input.value;
              }
          } else if (input.type === "checkbox") {
              if (!Array.isArray(formData[input.name])) {
                  formData[input.name] = [];
              }
              if (input.checked) {
                  formData[input.name].push(input.value);
              }
          } else {
              formData[input.name] = input.value;
          }
      });
  
      formData["referrals"] = contacts;
  
      const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "form_data.json";
      document.body.appendChild(link);
  
      setTimeout(() => {
          link.click();
          document.body.removeChild(link);
      }, 100);
  }
  
  submitButton?.addEventListener("click", function (event) {
      event.preventDefault();
      downloadJSON();

});
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault(); // Prevent form submission with press enter
    }
});

