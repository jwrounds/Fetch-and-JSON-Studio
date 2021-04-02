// TODO: add code here
window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      json.forEach((astro) => {
        let firstName = astro["firstName"];
        let lastName = astro["lastName"];
        let hours = astro["hoursInSpace"];
        let active = astro["active"];
        let skills = astro["skills"].join(", ");
        let avatar = astro["picture"];

        let astroHTML = `
          <div class="bio">
            <h3>${firstName} ${lastName}</h3>
            <ul>
              <li>Hours in space: ${hours}</li>
              <li>Active: ${active}</li>
              <li>Skills: ${skills}</li>
            </ul>
          </div>
          <img class="avatar" src=${avatar}>
        `;
        let astroProfile = document.createElement('div');
        astroProfile.setAttribute("class", "astronaut")
        astroProfile.innerHTML = astroHTML;
        document.querySelector("#container").appendChild(astroProfile);
      });
    });
  });

});