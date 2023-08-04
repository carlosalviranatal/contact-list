import ContactList from "./ContactList";

const ContactRow = ({contact}) => {

    return (
        contact.map((contact, index) => {
            return (
            <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
            </tr>
            )
        })
    );

};

export default ContactRow;