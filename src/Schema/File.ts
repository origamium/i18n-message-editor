import { LanguageKey, i18nMessages } from "./Interfaces";

export interface File {
    projectName: string;
    supporting: {
        [key in LanguageKey]: boolean; // if `true`, enabling language.
    };
    messages: i18nMessages;

    // default: "%sign$%".
    // will be issued as follows "%sign1%", "%sign2%", ...
    // $ as a number. 1, 2, 3... $ is required characters.
    // example, "{msg_$}", produces this: "{msg_1}", "{msg_2}, ...
    // use as a mark of the replaceable part in produced message string.
    replaceableSign: string;
}
