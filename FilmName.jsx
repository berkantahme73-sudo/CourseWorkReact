import LordOfTheRings from "./LordOfTheRings.jpg"
import StarWars from "./StarWars.jpg"
import JohnWick3 from "./JohnWick3.jpg"
console.log(LordOfTheRings.jpg)
console.log(StarWars.jpg)
console.log(JohnWick3.jpg)
function Foot() {
    return (
        <div>
            <div>
                <img src={LordOfTheRings} alt="LordOfTheRings" width={200}></img>
                <h3>Властелина на пръстените</h3>
            </div>
            <div>
                <img src={StarWars} alt="StarWars" width={200}></img>
                <h3>Между звезни войни</h3>
            </div>
            <div>
                <img src={JohnWick3} alt="JohnWick3" width={200}></img>
                <h3>Джон Лик 3</h3>
            </div>

        </div>
    )
}
export default Foot;