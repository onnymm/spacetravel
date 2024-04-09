import DATA from "../data";

const DestinationCover = ({image}) => {
    const imagePath = DATA.destinations.find(item => item.name === image).name.toLowerCase();

    console.log(`image-${imagePath}.png`)

    return (
    <img src={`image-${imagePath}.png`} alt="" />
)}

export default DestinationCover;