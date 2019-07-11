import { BasePage } from "../pages/BasePage";
import { Selector } from "testcafe";

const page = new BasePage();

fixture`Home`.page(page.baseUrl);

test("Correct title displays", async t => {
  await t.expect(page.title.textContent).eql("name game");
});

// COUNTERS

test('"tries" counter increments after selecting a photo', async t => {
  const initialAttemptsCount = Number(await page.attempts.textContent);

  await t.click(page.firstPhoto);

  const finalAttemptsCount = Number(await page.attempts.textContent);

  await t.expect(finalAttemptsCount).eql(initialAttemptsCount + 1);
});

test('"correct" counter increments after selecting the photo that corresponds to the name', async t => {
  const initialCorrectCount = Number(await page.correct.textContent);
  console.log("initialCorrectCount", initialCorrectCount);
  const nameOfPersonToFind = await page.nameOfPersonToFind.textContent;

  const correctImage = Selector(".name")
    .withText(nameOfPersonToFind)
    .parent(".photo");

  await t.click(correctImage);

  const finalCorrectCount = Number(await page.correct.textContent);
  console.log("finalCorrectCount", finalCorrectCount);

  await t.expect(finalCorrectCount).eql(initialCorrectCount + 1);
});

test('"streak" counter increments after selecting the photo that corresponds to the name', async t => {
  const initialStreakCount = Number(await page.streak.textContent);

  const nameOfPersonToFind = await page.nameOfPersonToFind.textContent;

  const correctImage = Selector(".name")
    .withText(nameOfPersonToFind)
    .parent(".photo");

  await t.click(correctImage);

  const finalStreakCount = Number(await page.streak.textContent);

  await t.expect(finalStreakCount).eql(initialStreakCount + 1);
});

test('"streak" counter resets to 0 after selecting an incorrect photo', async t => {
  const initialAttemptsCount = Number(await page.attempts.textContent);

  await t.click(page.firstPhoto);

  const finalAttemptsCount = Number(await page.attempts.textContent);

  await t.expect(finalAttemptsCount).eql(initialAttemptsCount + 1);
});



//test("photo's background becomes red when it's selected and it's the incorrect answer", async t => {});

// test('"streak" counter resets to 0 after selecting an incorrect photo', async t => {});

// // INCORRECT GUESS UI TREATMENT

// test("name becomes visible (color changes from transparent to white) when it's selected and it's the incorrect answer", async t => {});

// // CORRECT UI TREATMENT

// test("photo's background becomes green when it's selected and it's the correct answer", async t => {});

// test("when the correct photo is selected, each photo is replaced with a new one", async t => {});