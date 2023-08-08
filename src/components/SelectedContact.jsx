import { useState, useEffect } from 'react'

export default function SelectedContact({
  setSelectedContactId,
  selectedContactId,
}) {
  const [contact, setContact] = useState([])
  console.log(contact)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        )
        const result = await response.json()
        console.log(result)
        setContact(result)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr colSpan="4">{contact.name}</tr>
        </thead>
        <tbody>
        <tr>
          
          <td>City</td>
          <td>Website</td>
          <td>Company</td>
          </tr>
        <tr>
            
            <td>{contact.address && contact.address.city}</td>
            <td>{contact.website}</td>
            <td>{contact.company && contact.company.name}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
