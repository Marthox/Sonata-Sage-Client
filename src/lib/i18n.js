/**
 * @fileoverview This file contains the implementation of internationalization (i18n) functionality.
 * It exports the `locale` and `locales` stores, as well as the `t` derived store for translation.
 * The `translate` function is used internally to retrieve translations based on the provided locale and key.
 * @module i18n
 */

import { derived, writable } from "svelte/store";
import translations from "$lib/locale/translations.js";

/**
 * The writable store representing the current locale.
 * @type {import("svelte/store").Writable<string>}
 */
export const locale = writable("en");

/**
 * An array of available locales.
 * @type {string[]}
 */
export const locales = Object.keys(translations);

/**
 * Translates the given key based on the provided locale and variables.
 * @param {string} locale - The locale to use for translation.
 * @param {string} key - The translation key.
 * @param {Object} vars - The variables to replace in the translation string.
 * @returns {string} The translated text.
 * @throws {Error} If no key is provided or if there is no translation for the key.
 */
function translate(locale, key, vars) {
    // Let's throw some errors if we're trying to use keys/locales that don't exist.
    // We could improve this by using Typescript and/or fallback values.
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);

    // Split the key into nested levels using the separator "."
    const keyLevels = key.split(".");

    // Grab the translation from the translations object.
    // @ts-ignore
    let text = translations[locale];

    // Traverse through the nested levels to get the final translation
    for (const level of keyLevels) {
        if (!text[level]) throw new Error(`no translation found for ${locale}.${key}`);
        text = text[level];
    }

    // Replace any passed in variables in the translation string.
    Object.keys(vars).map((k) => {
        const regex = new RegExp(`{{${k}}}`, "g ");
        // @ts-ignore
        text = text.replace(regex, vars[k]);
    });

    return text;
}

/**
 * The derived store for translation.
 * It automatically updates whenever the `locale` store changes.
 * @type {import("svelte/store").Readable<Function>}
 */
export const t = derived(locale, ($locale) => (/** @type {string} */ key, vars = {}) =>
    translate($locale, key, vars)
);
