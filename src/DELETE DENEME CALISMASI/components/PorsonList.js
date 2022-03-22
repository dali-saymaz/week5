export default function PersonList({ list,deletePerson }) {
    return (
        <table className="table">
            <tr>
                <th>Firstname</th>
                <th>Last name</th>
                <th> email</th>
                <th> pasword</th>
                <th> about</th>
            </tr>
            {list.map((person, index) =>
                <tr key={index}>
                <td>{person.id}</td>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.email}</td>
                    <td>{person.password}</td>
                    <td>{person.about}</td>
                    <td><button onClick={() => deletePerson(person.id)} className='btn bg-btn'>DELETE</button></td>
                    <td><button onClick={() => { handleEdit(x); setuserId(person.id) }} className='btn bg-btn'>EDIT</button></td>

                </tr>
            )}
        </table>
    )
}