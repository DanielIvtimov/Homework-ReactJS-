
export const UserDetails = () => {
    const user = {
        fullName: "Rick James",
        age: 20,
        profession: "Programmer",
        from: "New York"
    }
    return(
        <div>
            <h2>User Details:</h2>
            <p>Full Name: {user.fullName}</p>
            <p>Age: {user.age}</p>
            <p>Profession: {user.profession}</p>
            <p>From: {user.from}</p>
        </div>
    )
}
