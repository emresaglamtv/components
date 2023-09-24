import PropTypes from "prop-types";

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

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isLoggedIn: PropTypes.bool,
}

User.defaulProps = {
    name: "Unnamed",
    isLoggedIn: false
}

export default User;