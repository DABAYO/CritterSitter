$("#search-btn").on("click", (event) => {
    event.preventDefault();

    // Save the book they typed into the book-search input
    const bookSearched = $("#book-search").val().trim();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/" + bookSearched, data => {

        console.log(data);
        // Call our renderBooks function to add our books to the page
        renderBooks(data);
    });

});

function displaySitters(data) {
    if (data.length !== 0) {
        $("#stats").empty();
        $("#stats").show();
  
        data.forEach((sitter, i) => {
            const div = $("<div>");
  
            div.append(`<h2>${sitter.title}</h2>`);
            div.append(`<p>Sitter: ${sitter.author}</p>`);
            div.append(`<p>Email: ${sitter.genre}</p>`);
            div.append(`<p>Pages: ${sitter.pages}</p>`);
            div.append(`<button class='delete' data-id="${sitter.id}">DELETE BOOK</button>`);
  
            $("#stats").append(div);
        });
    }
  }  