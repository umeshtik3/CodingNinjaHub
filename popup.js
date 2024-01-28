


let action = true;

$('#authenticate').on('click', () => {
    if (action) {
      console.log("This is a checking #authenticate id!")
    oAuth2.begin();
  }
});