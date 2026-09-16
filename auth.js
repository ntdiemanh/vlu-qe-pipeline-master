const lockedUsers = ["locked"];

function login(username, password) {
    if (!username || !password) {
        return false;
    }

    if (lockedUsers.includes(username)) {
        return false;
    }

    return username === "admin" && password === "123";
}

module.exports = { login };
