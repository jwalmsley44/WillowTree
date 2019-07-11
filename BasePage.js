import { Selector } from "testcafe";

export class BasePage {
  baseUrl = "http://www.ericrochester.com/name-game/";

  title = Selector(".header");
  firstPhoto = Selector(".photo");
  attempts = Selector("#stats > .attempts");
  correct = Selector("#stats > .correct");
  streak = Selector("#stats > .streak");
  nameOfPersonToFind = Selector("#name");
}