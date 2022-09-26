const form = document.querySelector("#search");
const profileContainer = document.querySelector(".profile-container");
const profileImg = document.querySelector(".profile-image");
const username = document.querySelector(".username");
const followers_count = document.querySelector("#followers");
const repository_count = document.querySelector("#repositories_data");
const following_count = document.querySelector("#following");
const error_overlay = document.querySelector(".overlay");
const loading = document.querySelectorAll(".loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const uname = form.elements.uname.value;
  form.elements.uname.value = null;
  form.elements.uname.focus();
  apiCall(uname);
});

const apiCall = (uname) => {
  const API = `https://api.github.com/users/${uname}`;
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) throw error();
      profileContainer.style.display = "block";
      createImage(data.avatar_url);
      renderOutput({
        name: `Username - ${data.login}`,
        followers: `Followers - ${data.followers}`,
        following: `Following - ${data.following}`,
        repositories: `Repo - ${data.public_repos}`,
      });
      error_overlay.style.visibility = "hidden";
    })
    .catch((e) => {
      enableOverlay();
    });
};

const renderOutput = ({ name, followers, following, repositories }) => {
  username.innerText = name;
  followers_count.innerText = followers;
  following_count.innerText = following;
  repository_count.innerText = repositories;
  removeSkeleton();
};

const removeSkeleton = () => {
  username.classList.remove("loading");
  profileImg.classList.remove("loading");
  followers_count.parentElement.classList.remove("loading");
  repository_count.parentElement.classList.remove("loading");
  following_count.parentElement.classList.remove("loading");
};

const createImage = (src) => {
  profileImg.innerHTML = "";
  const img = new Image();
  img.classList.add("img");
  img.src = src;
  profileImg.appendChild(img);
};

const enableOverlay = () => {
  const src = "https://i.ibb.co/N3cmDhB/Img.png";
  createImage(src);
  error_overlay.style.visibility = "visible";
  profileContainer.style.display = "none";
};
