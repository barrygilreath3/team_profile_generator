function generateHtml(array) {

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
                <div class="card">
                    <div class="Plate">
                        <h2 class="nameTitle"></h2>
                        <span><img src="" class= "nameTitle" alt=""></span>
                        <p class="roleTitle"></p>
                    </div>
                    <div id="bottomBox">
                        <div class="infoBox" id="id">ID: </div>
                        <div class="infoBox" id="email">
                            <p>Email: <a href="mailto:barrygilreath3@gmail.com"></a></p>
                        </div>
                        <div class="infoBox" id="info">
                            <p>GitHub:  <a href=""></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    
    </body>
    
    </html>`;

}

module.exports = generateHtml;