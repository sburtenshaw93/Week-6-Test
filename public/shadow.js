const { By } = require("selenium-webdriver");

const drawBtn = async (driver) => {
    await driver.findElement(By.id("draw")).click()
    const choices = await driver.findElements(By.className('bot-card'));
    const numBots = 5;
    expect(choices.length).toBe(numBots);
}

const playBtn = async (driver) => {
    driver.navigate().refresh();
    await driver.sleep(1000);
    await driver.findElement(By.id("draw")).click()
    let botBtns = await driver.findElements(By.className('bot-btn'));
    await botBtns[0].click();
    await driver.sleep(1000);
    botBtns = await driver.findElements(By.className('bot-btn'));
    await botBtns[0].click();
    await driver.sleep(1000);
    await driver.findElement(By.id('duel')).click();
    await driver.sleep(5000);
    const isPlayButtonDisplayed = await driver.findElement(By.id("play-again")).isDisplayed();
    expect(isPlayButtonDisplayed).toBe(true);
}

module.exports = {
   drawBtn,
   playBtn
}