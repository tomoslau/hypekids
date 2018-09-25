function toggleMenu() {
    var x = document.getElementById("mobileMenu");
    if (x.className === "mobile-menu") {
        x.className += " open-menu";
    } else {
        x.className = "mobile-menu";
    }
}

function toggleSearch() {
    var x = document.getElementById("searchBar");
    if (x.className === "search-bar") {
        x.className += " open-search-bar";
        document.getElementById("search-input") .focus();
    } else {
        x.className = "search-bar";
    }
}