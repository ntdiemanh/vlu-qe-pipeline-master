const { login } = require("./auth");

describe("Regression Test - Login", () => {

    test("Mật khẩu sai trả về false", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username rỗng trả về false", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Password rỗng trả về false", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Mật khẩu chứa ký tự đặc biệt trả về false", () => {
        expect(login("admin", "123@#")).toBe(false);
    });

    test("Username không tồn tại trả về false", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Tài khoản bị khóa trả về false", () => {
        expect(login("locked", "123")).toBe(false);
    });

    test("Cả username và password đều rỗng trả về false", () => {
        expect(login("", "")).toBe(false);
    });

    test("Username và password là null trả về false", () => {
        expect(login(null, null)).toBe(false);
    });
});
