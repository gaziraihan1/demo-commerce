const divisionDropdown = document.getElementById("division");
const districtDropdown = document.getElementById("district");

// District data
const districtData = {
    Barishal: ["Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
    Chattogram: ["Chattogram", "Cox's Bazar", "Rangamati", "Bandarban", "Khagrachari", "Feni", "Lakshmipur", "Comilla", "Noakhali", "Brahmanbaria", "Chandpur"],
    Dhaka: ["Dhaka", "Narayanganj", "Gazipur", "Manikganj", "Munshiganj", "Narsingdi", "Tangail", "Kishorgonj", "Netrokona", "Faridpur", "Gopalgonj", "Madaripur", "Rajbari", "Shariatpur"],
    Khulna: ["Khulna", "Kushtia", "Jhenaidah", "Magura", "Narail", "Bagerhat", "Meherpur", "Chuadanga", "Satkhira", "Jessore"],
    Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
    Rajshahi: ["Rajshahi", "Natore", "Sirajganj", "Pabna", "Bogura", "Chapainawabganj", "Naogaon", "Joypurhat"],
    Rangpur: ["Rangpur", "Dinajpur", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
    Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
};

// Handle division change
divisionDropdown.addEventListener("change", () => {
    const selectedDivision = divisionDropdown.value;

    // Clear previous districts
    districtDropdown.innerHTML = "";

    if (selectedDivision) {
        districtDropdown.classList.remove("hidden");
        districtData[selectedDivision].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
        });
    } else {
        districtDropdown.classList.add("hidden");
    }
});
