import PersonalImage from "../assets/images/salahineo.jpg";
// Image component
function Image() {
  return (
    <div id="img">
      <img
        src={PersonalImage}
        alt="Personal picture of Salahineo"
      />
    </div>
  )
}

export default Image
