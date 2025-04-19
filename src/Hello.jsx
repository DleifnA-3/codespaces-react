import './Hello.css';
function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

const Hello = ({name,surname,age}) => {
    return(
        <>
        <Profile />
        <h1>Hello World {name} {surname} {age}</h1>
        </>
    )
}
export default Hello;