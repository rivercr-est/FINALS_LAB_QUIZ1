let Fullname = document.getElementById("fullName");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let religion = document.getElementById("religion");
let birthdate = document.getElementById("birthdate");
let Age = document.getElementById("age");
let favoriteSubject = document.getElementById("favoriteSubject");
let aboutMe = document.getElementById("aboutMe");

let gender;

if (document.getElementById("male").checked) {
  gender = document.getElementById("male").value;
}

if (document.getElementById("female").checked) {
  gender = document.getElementById("female").value;
}

let colorPicker = document.querySelector("#favoriteColor");
let box = document.querySelector(".info-section");

document.getElementById("showInfoBtn").onclick = function () {
  let gender;

  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  }

  if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }

  let hobbies = " ";
  for (let i = 0; i < 3; i++) {
    if (document.getElementsByClassName("checkbox")[i].checked) {
      hobbies += document.getElementsByClassName("checkbox")[i].value + " ";
    }
  }

 document.getElementsByClassName("info-value")[0].textContent = Fullname.value;

document.getElementsByClassName("info-value")[1].textContent = email.value;

document.getElementsByClassName("info-value")[2].textContent = tel.value;

document.getElementsByClassName("info-value")[3].textContent = religion.value;

document.getElementsByClassName("info-value")[4].textContent = gender;

document.getElementsByClassName("info-value")[5].textContent = birthdate.value;

document.getElementsByClassName("info-value")[6].textContent = Age.value;

document.getElementsByClassName("info-value")[7].textContent = favoriteSubject.value;

document.getElementsByClassName("info-value")[8].textContent = hobbies;

document.getElementsByClassName("info-value")[9].textContent = aboutMe.value;
  box.style.backgroundColor = colorPicker.value;
};

let age = document.getElementById("age");
let ageValue = document.getElementById("ageValue");

age.oninput = function () {
  ageValue.textContent = age.value;
};
