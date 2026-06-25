import useFetchData from "../hooks/useFetchData";

const UserCards = () => {

const {
users,
loading,
error,
fetchUsers
}=useFetchData("https://jsonplaceholder.typicode.com/users");

if(loading)
return <h1 className="loading">Loading...</h1>;

if(error)
return(
<div className="error">
<h2>{error}</h2>

<button onClick={fetchUsers}>
Retry
</button>

</div>
);

return(

<div className="cards">

{users.map((user)=>(

<div className="card" key={user.id}>

<div className="avatar">
{user.name.charAt(0)}
</div>

<h2>{user.name}</h2>

<p><strong>Username :</strong> {user.username}</p>

<p><strong>Email :</strong> {user.email}</p>

<p><strong>Phone :</strong> {user.phone}</p>

<p><strong>Website :</strong> {user.website}</p>

</div>

))}

</div>

);

};

export default UserCards;