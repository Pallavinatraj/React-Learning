function data(id) {
    return document.getElementById(id).value;
};



// POST DATA
async function register() {

    const formData = {
        name: data("name"),
        id: data("id"),
        price: data("price")
    };

    const dataInfo = JSON.stringify(formData);

    let url = "http://127.0.0.1:3000/products";

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: dataInfo,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

//GET DATA 
async function getData() {

    let url = "http://127.0.0.1:3000/products";

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

//DELETE DATA
async function deleteData() {
    let id = document.getElementById("id").value;

    let url = `http://127.0.0.1:3000/products/${id}`;


    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    let result = await response.json();

}

// UPDATE DATA using PUT  (everthing chnaged) / PATCH (other things will be same only required data changed)
async function updateDate() {

    let id = document.getElementById("id").value;

    const dataInfo = JSON.stringify(id);

    let url = `http://127.0.0.1:3000/products/${dataInfo}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: dataInfo,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}