const { Command } = require("commander");
const contacts = require("./contacts");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

/** Funkcja wywołująca odpowiednią metodę z pliku contacts.js */
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log("Lista kontaktów:", allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(`Kontakt o ID ${id}:`, contact);
      break;

    case "add":
      await contacts.addContact(name, email, phone);
      console.log("Kontakt dodany.");
      break;

    case "remove":
      await contacts.removeContact(id);
      console.log(`Kontakt o ID ${id} został usunięty.`);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
