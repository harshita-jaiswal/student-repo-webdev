// Add your code here
let main = document.querySelector("main");

let section = document.createElement("section");
section.style.width = "300px";
section.style.margin = "40px auto";

let img = document.createElement("img");
img.setAttribute("src", "../images/harshita.jpeg");
img.setAttribute("alt", "photograph of Harshita Jaiswal");
img.setAttribute("width", "200");
img.setAttribute("height", "200");
img.style.margin = "0 auto";
img.style.display = "block";
img.style.borderRadius = "50%";

let bio = document.createElement("div");
bio.style.margin = "30px 0";

let nameIntro = document.createElement("span");
nameIntro.textContent =
  "My name is Harshita Jaiswal, and I use she/her/hers pronouns. ";
nameIntro.style.fontWeight = "700";

let introduction = document.createElement("span");
introduction.textContent =
  "I have been a graduate student since Winter 2023. I am from India and completed my undergraduate studies in computer science. I am excited to enhance my web knowledge through this course. In my free time, I enjoy traveling and exploring city life. I also like to experiment with my cooking skills by fusing different cuisines together.";

bio.append(nameIntro);
bio.append(introduction);

section.append(img);
section.append(bio);

main.append(section);
