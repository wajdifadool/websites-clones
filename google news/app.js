// Google Api object
const google = new Google;
const ui = new Ui;

// Event Listeners
document.addEventListener('DOMContentLoaded', getTopHeadLines);
const sportsTab = document.querySelector('#sportsTab');
sportsTab.addEventListener('click', getSports);


const tabItems = document.querySelectorAll('.tab-item');
tabItems.forEach(element => {
    element.addEventListener('click', selectTab);
});

function selectTab(e) {
    e.preventDefault();
    removeBorder();
    // Add border to current tab item
    this.classList.add('tab-border');

}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}


// get Top HeadLines for Israel
function getTopHeadLines(e) {
    e.preventDefault();
    google.getTopHeadLinesTextFIle().then(data => {
        ui.Displaycols2(data);
        // console.log("data\n", data);
    }).catch(err => {
        console.log("ERROR Occured getTopHeadLines", err);
    });
}

// getSports
function getSports(e) {
    // Upadte Clicked 
    e.preventDefault();
    console.log("getting sports");
    google.getTopHeadLinesCategory('sports').then(data => {
        ui.DisplayRow(data);
        console.log("UI goes here");
    }).catch(err => {
        console.log("Errror getTopHeadLinesCategory", err);
    });
}

// Click Delegation , Open Article Link 
document.querySelector('.headlines').addEventListener('click', openArticle);
function openArticle(e) {
    console.log(e.path);
}