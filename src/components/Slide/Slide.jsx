import './Slide.css'

export const Slide = ({ id, children }) => {
    return (
        <div className="slide" id={id}>
            {children}
        </div>
    )
}