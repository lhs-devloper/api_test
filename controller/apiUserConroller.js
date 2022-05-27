import User from "../Model/User";

export const getUser = (req, res) => {
    const userData = User
    res.json(userData)
}
export const searchUser = (req, res) => {
    let responseData = ""
    const { name } = req.query;
    const userData = User
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].name === name) {
            console.log(userData[i])
            responseData = userData[i]
            break
        }
    }
    res.json(responseData)
}
export const loggedUser = (req, res) => {
    const { name } = req.body;
    console.log(name)
    const logged = true
    res.json({
        "login": {
            "name": name,
            "logged": logged
        }
    })
}