
var contenido =  document.querySelector('#contenido');

function consumiendoapi(){
 
    fetch('https://randomuser.me/api')
    .then(data => data.json())
    .then(data => {
        contenido.innerHTML = `
        <main class="flex">
        <article class="card">
            <img src="images/bg-pattern-card.svg" alt="imagen-fondo" class="card-header">

            <div class="card-body">
               
            <img src="${data.results['0'].picture.large}" alt="imagen" class="card-body-img">
                <h1 class="card-title"> 
                    Victor charst 
                    <span>26</span>
                </h1>
                <p class="card-text">
                   London
                </p>
            </div>

            <div class="card-footer">
                <div class="card-footer-social">
                    <h3>80K</h3>
                    <p>Followers</p>
                </div>

                <div class="card-footer-social">
                    <h3>803K</h3>
                    <p>Likes</p>
                </div>

                <div class="card-footer-social">
                    <h3>1.4K</h3>
                    <p>Photos</p>
                </div>
            </div>

        </article>
    </main>
        `;
    })

}
