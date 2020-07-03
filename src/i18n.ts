import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// The translations
const resources = {
    en: {
        translation: {
            "Chat": "Chat",
            "Settings": "Settings",
            "Reset to Defaults": "Reset to Defaults",
            "Language": "Language",
            "English": "English",
            "French": "French",
            "User name": "User name",
            "Light": "Light",
            "Dark": "Dark",
            "Interface color": "Interface color",
            "12 hours": "12 hours",
            "24 hours": "24 hours",
            "Clock display": "Clock display",
            "On": "On",
            "Off": "Off",
            "Send messages on CTRL+Enter": "Send messages on CTRL+Enter",
            "Type your message here": "Type your message here",
            "Send": "Send"
        }
    },
    fr: {
        translation: {
            "Chat": "Bavarder",
            "Settings": "Paramètres",
            "Reset to Defaults": "Rétablir les valeurs par défaut",
            "Language": "Langue",
            "English": "Anglaise",
            "French": "Française",
            "User name": "Nom d'utilisateur",
            "Light": "Claire",
            "Dark": "Sombre",
            "Interface color": "Couleur d'interface",
            "12 hours": "12 heures",
            "24 hours": "24 heures",
            "Clock display": "Affichage de l'horloge",
            "On": "Allumé",
            "Off": "Éteint",
            "Send messages on CTRL+Enter": "Envoyer des messages sur CTRL + Entrée",
            "Type your message here": "Tapez votre message ici",
            "Send": "Envoyer"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;