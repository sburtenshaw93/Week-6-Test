
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { drawBtn, playBtn } = require("./public/shadow")

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe('Draw list', () => {
    test('Draw button', async () => {
        await drawBtn(driver)
        await driver.sleep(1000)
    })
})

describe('Play again', () => {
    test("play-again button", async () => {
        await playBtn(driver)
    })
})

// describe("movie list functionality", () => {
//     it("add a movie", async () => {
//         await addMovie(driver);
//         await driver.sleep(3000);

//     })

// describe('Some tests', () => {
//     it('should do something else', () => {
//         const input = someThing;
//         const output = someFunction(input);
//         expect(output).shouldHave(someExpectedProperty);
//     });
// });