
const LargeButton = ({setPage}) => {
    const activate = () => (
        setPage(1)
    )

    return (
        <div onClick={activate} className="large-button uppercase text-dark bg-white ">Explore</div>
)}

export default LargeButton;