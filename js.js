document.getElementById("getUserBtn").onclick = function (evt) {
    evt.preventDefault();

    let idFromInput = document.getElementById("inputField").value;

    let url = "https://jsonplaceholder.typicode.com/users/" + idFromInput;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            let userInfo =
                "<h2>Person Info</h2>" +
                "User ID: " + data.id + "<br>" +
                "Name: " + data.name + "<br>" +
                "Phone: " + data.phone + "<br>" +
                "Username: " + data.username + "<br>" +
                "Email: " + data.email + "<br>";

            let userAddress =
                "<h2>Address</h2>" +
                "Street " + data.address.street + "<br>" +
                "Ciy: " + data.address.city + "<br>" +
                "Zip: " + data.address.zip + "<br>" +
                "Geo: " + data.address.geo.lat + ", " + data.address.geo.lng + "<br>";

            document.getElementById("displayUserInfo").innerHTML = userInfo;
            document.getElementById("displayUserAddress").innerHTML = userAddress;

            console.log(data);
            document.getElementById("userTable").innerHTML = ""
            document.getElementById("inputField").value = ""

        })
        .catch(error => {
            console.error("Fejl ved hentning af data:", error);
        });
}

document.getElementById("getAllBtn").onclick = function (evt) {
    evt.preventDefault()

    let url = "https://jsonplaceholder.typicode.com/users"

    fetch(url)
        .then(res => res.json())
        .then(data => {

            let tableHeader =
                "<thead><tr><th>Name</th><th>Phone</th></tr></thead>"

            data.forEach(person => {
                tableHeader += "<tbody>" +
                    "<tr>" +
                    "<td>" + person.name + "</td>" +
                    "<td>" + person.phone + "</td>" +
                    "</tr>" +
                    "</tbody>"
            })
            document.getElementById("userTable").innerHTML = tableHeader
            document.getElementById("displayUserInfo").innerHTML = ""
            document.getElementById("displayUserAddress").innerHTML = ""
            document.getElementById("inputField").value = ""
        })
        .catch(err => {
            consone.error("Fejl i indhentning af data:", err)
        })
}

document.getElementById("clearBtn").onclick = function (evt){
    evt.preventDefault()
    document.getElementById("displayUserInfo").innerHTML = ""
    document.getElementById("displayUserAddress").innerHTML = ""
    document.getElementById("userTable").innerHTML = ""
    document.getElementById("inputField").value = ""
}