
export const AnchorLink = ({ id }) => {
    return <a href={"#" + id} onClick={(e) => {
        e.preventDefault();
        let rect = document.getElementById(id).getBoundingClientRect()
        console.log(rect)
        document.getElementById(id).scrollIntoView({ behavior: "smooth", timeout: 100 })
    }}>

        {id}</a>
}