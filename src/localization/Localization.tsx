import localJson from "./json/texts.json";

const allTexts: ILocalizationDetails = localJson;

interface ILocalizationDetails {
  [key: string]: string;
}

export interface ILocalization {
  getText(key: string): string;
}

export default class Localization implements ILocalization {
  private static instanceObject: Localization;

  private texts: ILocalizationDetails;
  private constructor(texts: ILocalizationDetails) {
    this.texts = texts;
  }

  getText(key: string): string {
    return this.texts[key] || key;
  }

  static getText(key: string): string {
    return Localization.getLocale().getText(key);
  }

  static getLocale(): ILocalization {
    if (!this.instanceObject) {
      Localization.instanceObject = new Localization(allTexts);
    }
    return Localization.instanceObject;
  }
}
