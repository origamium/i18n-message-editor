import { LanguageKeys } from "./LanguageKeys";

export type LanguageKey = keyof typeof LanguageKeys;

export type messageType = "plain" | "markdown" | "html";

export interface i18nMessage {
    title: string;
    description: string;
    msg: {
        [key in LanguageKey]: {
            type: messageType;
            text: string;
        };
    };
}

export interface i18nMessages {
    [uuid: string]: i18nMessage;
}
