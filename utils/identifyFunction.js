import { TestSession } from "./TestSession";



async function identify(page) {

    await page.evaluate(({ email, phone }) => {

        window.nitro.identify(
            email,
            phone,
            "TestUser"
        );

    },
    {
        email: TestSession.getEmail(),
        phone: TestSession.getPhone()
    });
}

export {identify}