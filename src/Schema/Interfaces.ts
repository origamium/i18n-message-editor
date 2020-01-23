import { LanguageKeys } from "./LanguageKeys";

export type LanguageKey = keyof typeof LanguageKeys;

export interface i18nMessage {
    title: string;
    description: string;
    msg: {
        [key in LanguageKey]: {
            isMarkdown: boolean;
            text: string;
        };
    };
}

export interface i18nMessages {
    [uuid: string]: i18nMessage;
}
