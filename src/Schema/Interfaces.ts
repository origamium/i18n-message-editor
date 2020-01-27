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

export interface i18nMessageGroup {
    groupName: string;
    messages: i18nMessage[];
}

export interface i18nMessages extends Array<i18nMessageGroup> {}
