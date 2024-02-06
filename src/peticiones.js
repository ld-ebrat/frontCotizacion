import envrironment from "./environment"

const ur = envrironment.url_Back

async function getInfo(token) {
    console.log("Entre")
    const response = await fetch(`${ur}/get-infoUser`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': token
        }
    })
    console.log("retorno bien")
    return response
}

async function getAllUsers() {
    const response = await fetch(`${ur}/getUsers`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    return response
}

async function getUsers() {
    const response = await fetch(`${ur}/get-all-user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    return response
}

async function postUser(data) {
    const response = await fetch(`${ur}/singup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response
}

async function postValidate(email) {
    const response = await fetch(`${ur}/validateUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    })

    return response
}
async function postGetInfoAndCity(userId) {
    const response = await fetch(`${ur}/getInfo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId })
    })

    return response
}

async function postImgProduct(formdata) {
    const response = await fetch(`${ur}/save/img/product`, {
        method: "POST",
        body: formdata
    })

    return response
}

async function getProducts(userId) {
    const response = await fetch(`${ur}/get/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId })
    })

    return response
}

async function getState() {
    const response = await fetch(`${ur}/getstate`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response
}

async function getCity(idstate) {
    const response = await fetch(`${ur}/getcity`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ stateid: idstate })
    })

    return response
}

async function postSaveImgProfile(formdata) {
    const response = await fetch(`${ur}/save/img/profile`, {
        method: "POST",
        body: formdata
    })

    return response
}
async function postProduct(product) {
    const response = await fetch(`${ur}/create/product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })

    return response
}

async function postClient(dataClient, userId) {
    dataClient.userId = userId
    const response = await fetch(`${ur}/create/client`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataClient)
    })

    return response
}

async function postQuotation(dataQuotation) {
    const response = await fetch(`${ur}/create/quotation`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataQuotation)
    })

    return response
}

async function postEmail(template, email) {
    const response = await fetch(`${ur}/send/email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ html: template, email: email })
    })

    return response
}

async function postQuotationProduct(data) {
    const response = await fetch(`${ur}/create/quotationProducts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response
}

async function postSingUp(user) {
    const responseCreate = await fetch(`${ur}/singup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    return responseCreate
}

async function postLogin(user) {
    console.log(user)
    const response = await fetch(`${ur}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    return response
}


export {
    getInfo,
    getProducts,
    getAllUsers,
    getState,
    getCity,
    getUsers,
    postSaveImgProfile,
    postUser,
    postValidate,
    postGetInfoAndCity,
    postClient,
    postQuotation,
    postQuotationProduct,
    postSingUp,
    postLogin,
    postEmail,
    postImgProduct,
    postProduct,

}