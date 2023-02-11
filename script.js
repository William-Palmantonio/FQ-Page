const search = document.querySelector('.search');
const panels = document.querySelectorAll('.panel');


search.addEventListener('input', () => {

    if(search.value !== "") {

        panels.forEach(panel => {
            
            const panelHeading = panel.querySelector('h2');


            const panelHeadingText = panelHeading.innerHTML.toLowerCase();


            const inputText = search.value.toLowerCase();

            if(!panelHeadingText.includes(inputText)) {

                panelHeading.parentElement.style.display = "none";
            } else {
                panelHeading.parentElement.style.display = "block";
            }
        });      
    } else {
        panels.forEach(panel => {
            panel.style.display = "block";
        });
    }

});