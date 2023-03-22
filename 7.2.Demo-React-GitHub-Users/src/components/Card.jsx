/*
Creating a reusable Card component to show a single user data.
This component will display the image and details as gathered from GitHub.
It gets the data via props:
    * props.avatar_url - the user avatar
    * props.login - the user handle
    * props.name - the user name
    * props.blog - the user website URL
*/

function Card(props) {
    return <div>{props.name}</div>
}

export default Card
