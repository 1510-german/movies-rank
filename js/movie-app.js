const movies = [
    {
        id: 1,
        title: 'The Godfather',
        genre: 'Drama',
        year: 1972,
        score: 5,
        image: 'https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys'

    },
    {
        id: 2,
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        year: 1994,
        score: 2,
        image: 'https://i5.walmartimages.com/asr/5003a7b8-81c5-4803-beee-df5417f06bbe.1f75ffb05ff4e640f976691214312d6a.jpeg'
    },
    {
        id: 3,
        title: 'The Dark Knight',
        genre: 'Action',
        year: 2008,
        score: 4,
        image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg'
    }
];

pintarPeliculas(movies);

// obtener el formulario de carga de pelicula desde el DOM
const moviesForm = document.getElementById("moviesForm")

console.log(moviesForm)

// necesito escuchar cuando el usuario envie el formulario
moviesForm.addEventListener("submit", function(evento) {

    // evitar que el formulario se reenvie
    evento.preventDefault();

    const el = evento.target.elements;

    // en base a los datos ingresados por el usuario, crear un objeto de pelicula
    const pelicula = {
        id: crypto.randomUUID(),
        title: el.title.value,
        genre: el.genre.value,
        score: el.score.value,
        date: el.date.value.slice(0, 4),
        image: el.imagen.value,
    }

    console.log(pelicula)

    // agregar la pelicula al array de peliculas
    movies.push(pelicula);

    pintarPeliculas(movies);
})

// necesito crear una funcion que reciba un array lo recorra y pinte una <tr></tr> por cada pelicula
function pintarPeliculas(arrayPeliculas) {

    const tbody = document.querySelector("tbody")

    // vaciar el tbody
    tbody.innerHTML = "";

    movies.forEach((peli) => {

        tbody.innerHTML += `<tr>
        <td class="image-cell">
            <img loading="lazy" src="${peli.image}" alt="${peli.title} image">
        </td>
        <td class="name-cell">
            <div class="name">
                ${peli.title}
            </div>
        </td>
        <td class="genre-cell">
            <div class="genre">
                ${peli.genre}
            </div>
        </td>
        <td class="score-cell">
            <div class="score">
                ${peli.score}
            </div>
        </td>
        <td class="date-cell">
            <div class="date">
                ${peli.date}
            </div>
        </td>
        <td class="actions-cell">
            <div class="actions">

                <button class="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                
            </div>
        </td>
    </tr>`
    })


}

