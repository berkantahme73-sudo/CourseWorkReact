import LordOfTheRings from "./LordOfTheRings.jpg"
import StarWars from "./StarWars.jpg"
import JohnWick3 from "./JohnWick3.jpg"
import { Link } from "react-router-dom"
console.log(LordOfTheRings.jpg)
console.log(StarWars.jpg)
console.log(JohnWick3.jpg)
function Foot() {
    return (
        <>
            
            <div className="Homebox">
                <div className="image1">
                    <img src={LordOfTheRings} alt="LordOfTheRings" width={200}></img>
                    <h3 className="Img1text">Властелина на пръстените</h3>
                </div>
                <div className="image2">
                    <img src={StarWars} alt="StarWars" width={200}></img>
                    <h3 className="img2text">Между звезни войни</h3>
                </div>
                <div className="image3">
                    <img src={JohnWick3} alt="JohnWick3" width={200}></img>
                    <h3 img3text>Джон Лик 3</h3>
                </div>
            </div>
        </>

    )
}
export default Foot;