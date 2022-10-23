
export const AnchorLink = ({ id }) => {
    return <a href={"#" + id} onClick={(e) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    }}>

        {id}</a>
}