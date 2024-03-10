document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("checkout-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Replace "www.google.com" with the URL you want to redirect to
        window.location.href = "payment.html";
    });

    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    var carPrices = {
        BRV: 15.50,
        CRV: 20.00,
        HRV: 20.00,
        AXIA: 9.90,
        BEZZA: 12.50,
        MYVI: 10.90,
        IRIS: 10.90,
        X50: 15.50,
        X70: 20.00,
        INNOVA: 20.00,
        RUSH: 22.90,
        VELLFIRE: 39.90,
        VIOS: 15.50,
        WISH: 20.00,
        YARIS: 11.90,
        PASSAT: 15.00,
        POLO: 11.90,
        TIGUAN: 15.50,
        CX5: 22.20,
        TUCSON: 15.50,
        PICANTO: 10.90,
        // Add more cars and their prices here
    };

    function calculatePrice() {
        var manualSelect = document.getElementById('manualSelect');
        var automaticInput = document.getElementById('automaticInput');
        var selectedOption = manualSelect.options[manualSelect.selectedIndex].value;

        if (carPrices[selectedOption]) {
            automaticInput.value = carPrices[selectedOption];
        } else {
            automaticInput.value = '';
        }
        updatePrice(); // Call updatePrice function whenever manualSelect changes
    }

    function updatePrice() {
        var automaticInput = document.getElementById('automaticInput');
        var quantity = parseInt(document.getElementById('quantityInput').value);
        if (!isNaN(quantity) && quantity > 0) {
            var selectedOption = document.getElementById('manualSelect').value;
            if (carPrices[selectedOption]) {
                automaticInput.value = carPrices[selectedOption] * quantity;
            }
        } else {
            document.getElementById('quantityInput').value = 1; // Reset to 1 if negative or zero
        }
    }

    // Add event listener for quantity input
    document.getElementById('quantityInput').addEventListener('input', updatePrice);

    document.getElementById('dateInput').min = new Date().toISOString().split('T')[0];

    document.getElementById('dateInput').addEventListener('change', function() {
        var selectedDate = new Date(this.value);
        var today = new Date();

        if (selectedDate < today) {
            alert('Invalid date. Please select a date equal to or later than today.');
            this.value = ''; // Clear the input value
        }
    });
});