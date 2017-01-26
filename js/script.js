function openTabs(evt, tabsName) {

    var i, tab, button, get;

    tab = document.getElementsByClassName("tab");
      for (i = 0; i < tab.length; i++) {
        tab[i].style.visibility = "inherit";
    }

    button = document.getElementsByClassName("button");
    for (i = 0; i < button.length; i++) {
        button[i].className = button[i].className.replace(" active", "");
    }
     get = document.getElementById(tabsName);
    if (get.style.display == "none") {
      get.style.display = 'block';
       } else {
  		get.style.display = 'none';
              }
  evt.currentTarget.className += " active";
}
