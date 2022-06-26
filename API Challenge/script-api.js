//Fetches data from the provided API from randomuser.me that gives the user a random name, photo, number, email etc.
const getRandomUserData = (gender) => {
    fetch(`https://randomuser.me/api/?gender=${gender}`)
    .then((data) => data.json())
    .then((data) => console.log(data));
};

//First it starts with a random generated result, then when gender is selected a new value will appear based on the selected gender.
document.querySelector("button").addEventListener("click", () => {
    const gender = document.querySelector('input[name="gender"]:checked').value;

    getRandomUserData(gender);
})

getRandomUserData();