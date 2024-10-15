const fs = require("fs").promises;
const path = require("path");

/**
 * Zwraca listę wszystkich kontaktów.
 * @returns {full path to contacts.json>}
 */
const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: udokumentuj każdą funkcję

/**
 * Zwraca listę wszystkich kontaktów.
 * @returns {Promise<Array>} JSDoc comment: zwraca obietnice, ktora po (resolve) zwraca tablice [Lista kontaktów].
 */

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(data);
}

/**
 * Zwraca kontakt o podanym ID.
 * @param {string} contactId - ID kontaktu.
 * @returns {Promise<Object|null>} Kontakt lub null, jeśli nie znaleziono.
 */

async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId) || null;
}

/**
 * Usuwa kontakt o podanym ID.
 * @param {string} contactId - ID kontaktu.
 * @returns {Promise<void>}
 */
async function removeContact(contactId) {
  const contacts = await listContacts();
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
}

/**
 * Dodaje nowy kontakt.
 * @param {string} name - Imię kontaktu.
 * @param {string} email - Email kontaktu.
 * @param {string} phone - Telefon kontaktu.
 * @returns {Promise<void>}
 */
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
