
export const ContactsVarification = (data, contacts) => {
const name = data.name

if (contacts.length > 0) {
    let nameLIst = contacts.map(contact => contact.name);
    if (nameLIst.includes(name.toLowerCase())) {
      alert(`${name} is already in your contacts.`)
      return false;
    } else {
      return true
    }
  } else {
    return true
  }
  };
