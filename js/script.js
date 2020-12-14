changePage = (page) => {
    // Pages
    var pages = document.getElementsByClassName("page");
    Array.from(pages).forEach((element) => {
        element.id = "";
        if (element.classList.contains(`${page}`)){
            element.id = "pageActive";
        }
    })

    // Link
    var links = document.getElementsByClassName("link");
    Array.from(links).forEach((element) => {
        element.id = "";
        if (element.classList.contains(`${page}Link`)){
            element.id = "linkActive";
        }
    })
}