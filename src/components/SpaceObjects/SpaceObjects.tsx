import rocket from '../../assets/space/rocket.svg'
import earth from '../../assets/space/earth.svg'
import moon from '../../assets/space/moon.svg'
import astronaut from '../../assets/space/astronaut.svg'

import './SpaceObjects.css'

export default function SpaceObjects() {
    return (
        <div className="objects">
            <img className="object_rocket" src={rocket} width="40px" alt='rocket'/>
            <div className="earth-moon">
                <img className="object_earth" src={earth} width="100px" alt='earth'/>
                <img className="object_moon" src={moon} width="80px" alt='moon'/>
            </div>
            <div className="box_astronaut">
                <img className="object_astronaut" src={astronaut} width="140px" alt='astronaut'/>
            </div>
        </div>
    )
}