function compileCards (team) {
    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => buildManager(manager)));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => buildEngineer(engineer)).join(""));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => buildIntern(intern)).join(""));

    return html.join('');
}

function buildManager (manager) {
    return `<div class="card manager">
        <div class="Plate">
            <h2 class="nameTitle">${manager.getName()}</h2>
            <span><img src="" class= "nameTitle" alt=""></span>
            <p class="roleTitle">Manager</p>
        </div>
        <div id="bottomBox">
            <div class="infoBox" id="id">ID: ${manager.getId()}</div>
            <div class="infoBox" id="email">
                <p>Email: <a href="mailto:'${manager.getEmail()}'"></a>${manager.getEmail()}</p>
            </div>
            <div class="infoBox" id="info">
                <p>Office Number: ${manager.getOffice()}</p>
            </div>
        </div>
    </div>
`;
}

function buildEngineer (engineer) {
    return `                <div class="card engineer">
    <div class="Plate">
        <h2 class="nameTitle">${engineer.getName()}</h2>
        <span><img src="" class= "nameTitle" alt=""></span>
        <p class="roleTitle">Engineer</p>
    </div>
    <div id="bottomBox">
        <div class="infoBox" id="id">ID: ${engineer.getId()}</div>
        <div class="infoBox" id="email">
            <p>Email: <a href="mailto:'${engineer.getEmail()}'"></a>${engineer.getEmail()}</p>
        </div>
        <div class="infoBox" id="info">
            <p>GitHub:  <a href="https://github.com/${engineer.getGitHub()}"></a>${engineer.getGitHub()}</p>
        </div>
    </div>
</div>
`;
}

function buildIntern (intern) {
    return `
    <div class="card manager">
    <div class="Plate">
        <h2 class="nameTitle">${intern.getName()}</h2>
        <span><img src="" class= "nameTitle" alt=""></span>
        <p class="roleTitle">Intern</p>
    </div>
    <div id="bottomBox">
        <div class="infoBox" id="id">ID: ${intern.getId()}</div>
        <div class="infoBox" id="email">
            <p>Email: <a href="mailto:'${intern.getEmail()}'"></a>${intern.getEmail()}</p>
        </div>
        <div class="infoBox" id="info">
            <p>School: ${intern.getSchool()}</p>
        </div>
    </div>
</div>`;
}

function generateHtml(data) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div id="container">
            ${compileCards(data)}


            </div>
        </main>
    
    </body>
    
    </html>`;

}

module.exports = generateHtml;