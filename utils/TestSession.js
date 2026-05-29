class TestSession {

    static phone = null;
    static email = null;

    static getPhone() {

        if (this.phone === null) {

            this.phone ="9" + Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join("");
        }

        return this.phone;
    }

    static getEmail() {

        if (this.email === null) {

            this.email =`test${Math.floor(10000 + Math.random() * 90000)}@nitrotest.com`;
        }

        return this.email;
    }
}

export {TestSession}