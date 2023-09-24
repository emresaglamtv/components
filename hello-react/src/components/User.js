function User({ name, age, isLoggedIn, friends }) {
    return (
        <>
            <h1>
                {isLoggedIn ? `${name} ${age}` : "You logged to your account"}
            </h1>

            {friends.map((friend) => (
                <div key={friend.id}> {friend.name}
                </div>
            ))}
        </>
    );
}

export default User;