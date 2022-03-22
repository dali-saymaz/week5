export default function PersonList({ list }) {
    return (
        <table className="table">
            <tr>
                <th>Firstname</th>
                <th>Last name</th>
                <th> email</th>
                <th> pasword</th>
                <th> about</th>
                <th> </th>
                <th> </th>
            </tr>
            {list.map((person, index) => 
                <tr key={index}>
               
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.email}</td>
                    <td>{person.password}</td>
                    <td>{person.about}</td>
                    <td><button onClick={() => this.deletePerson(person.id)} className='btn bg-btn'>DELETE</button></td>
                </tr>
            )}
        </table>
    )
}