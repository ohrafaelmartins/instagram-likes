function nextphoto() {
    // passar para a proxima foto
    document.getElementsByClassName("_abl-")[0].click();

    // Set a timeout to call the nextphoto() function again
    setTimeout(nextphoto, 5000);
}

// Call the nextphoto() function immediately
nextphoto();
