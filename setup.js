function addProducts() {
    for (var sectionName in products) {
        var section = document.querySelector('#shop-section').content.cloneNode(true)
        section.querySelector('button').textContent = sectionName

        for (var itemName in products[sectionName]) {
            var item = document.querySelector('#shop-item').content.cloneNode(true)
            item.querySelector('h1').textContent = itemName
            item.querySelector('.price').textContent = "$" + products[sectionName][itemName]["price"]

            section.querySelector('.panel').append(document.importNode(item, true))
        }

        $(".shop-menu").append(document.importNode(section, true))
    }
}

function addListeners() {
    /* Add on-click to show/hide sections*/
    var acc = $(".accordion")

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active")

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"
            }
        });
    }
}

addProducts()
addListeners()
