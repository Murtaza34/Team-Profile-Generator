// creates the team
const generateTeam = (team) => {
	// creates the manager html
	const generateManager = (manager) => {
		return ` 
    <div class="card employee-card mt-2 mb-4 mr-3 ml-3" style="width: 330px; box-shadow: 0 25.6px 57.6px 0 rgb(0 0 0 / 22%), 0 4.8px 14.4px 0 rgb(0 0 0 / 18%);">
      <div class="card-header">
        <h2 class="card-title" style="color:#ff5400">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user-tie"></i> ${manager.getRole()}</h3>
    </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item"><span style="font-weight: 500;">ID:</span> ${manager.getId()}</li>
          <li class="list-group-item"><span style="font-weight: 500;">Email:</span> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item"><span style="font-weight: 500;">Office number:</span> ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `;
	};

	// creates the html for engineers
	const generateEngineer = (engineer) => {
    return ` 
    <div class="card employee-card mt-2 mb-4 mr-3 ml-3" style="width: 330px; box-shadow: 0 25.6px 57.6px 0 rgb(0 0 0 / 22%), 0 4.8px 14.4px 0 rgb(0 0 0 / 18%);">
      <div class="card-header">
        <h2 class="card-title" style="color:#ff5400">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user-gear"></i> ${engineer.getRole()}</h3>
    </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item"><span style="font-weight: 500;">ID:</span> ${engineer.getId()}</li>
          <li class="list-group-item"><span style="font-weight: 500;">Email:</span> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item"><span style="font-weight: 500;">GitHub:</span> ${engineer.getGithub()}</li>
        </ul>
      </div>
    </div>
    `;
	};

	// creates the html for interns
	const generateIntern = (intern) => {
    return ` 
    <div class="card employee-card mt-2 mb-4 mr-3 ml-3" style="width: 330px; box-shadow: 0 25.6px 57.6px 0 rgb(0 0 0 / 22%), 0 4.8px 14.4px 0 rgb(0 0 0 / 18%);">
      <div class="card-header">
        <h2 class="card-title" style="color:#ff5400">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
    </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item"><span style="font-weight: 500;">ID:</span> ${intern.getId()}</li>
          <li class="list-group-item"><span style="font-weight: 500;">Email:</span> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item"><span style="font-weight: 500;">School:</span> ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;
	};

	const html = [];

	html.push(
		team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManager(manager))
	);

	html.push(
		team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer))
    .join("")
	);

	html.push(
		team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern))
    .join("")
	);

	return html.join("");
};

// exports function to generate entire page
module.exports = (team) => {
	return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
    />
  </head>

  <body style="font-family: 'Jost', sans-serif; background-color: #7f8386;">
    <div class="container-fluid">
      <div class="row mb-5">
        <div class="col-12 jumbotron mb-3 team-heading"  style="background-color: #e7e7e7;">
          <h1 class="text-center" style="color:#014f86; font-size: 50px; font-weight: bold;">MY TEAM</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center" style="display: flex; flex-wrap: wrap">
          ${generateTeam(team)}
        </div>
      </div>
    </div>
    <div style="
      position: 
        fixed; 
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
        ";>
      <p class="pt-2">Copyright © 2023 - Murtaza Mohebi</p>
    </div>
  </body>
  </html>
  `;
};
