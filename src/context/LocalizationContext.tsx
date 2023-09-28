import { ReactNode, useContext, createContext, useState } from "react";
import Localization, { ILocalization } from "../localization/Localization";

interface ILocalizationContext {
  locale: ILocalization;
}

export const LocalizationContext = createContext({} as ILocalizationContext);

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

interface ILocalizationProvideProps {
  children: ReactNode;
}
export const LocalizationProvider = ({
  children,
}: ILocalizationProvideProps) => {
  const [locale, updateLocale] = useState({ locale: Localization.getLocale() });
  return (
    <LocalizationContext.Provider value={locale}>
      {children}
    </LocalizationContext.Provider>
  );
};
