import ContactList from "./ContactList";
import ContactRow from "./ContactRow";
import App from "../App";

export default function SelectedContact({contact}) {

    return (
            <tr>
                <td>{contact.name}</td>
                <td>{contact.address.city}</td>
                <td>{contact.website}</td>
                <td>{contact.company.name}</td>
            </tr>
            );
}