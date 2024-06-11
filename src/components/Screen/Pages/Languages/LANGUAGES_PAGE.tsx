import {PAGE} from "../../../App/App.tsx";

import './Languages.css'
import english from '../../../../assets/english.png'
import portuguese from '../../../../assets/portuguese.png'

export const LANGUAGES_PAGE: PAGE = {
  title: 'Languages',
  content: <section className='languages'>
    <div className="language">
      <img src={english} className="iconsLanguages"/>
      <p>English</p>
    </div>
    <div className="language">
      <img src={portuguese} className="iconsLanguages"/>
      <p>Português</p>
    </div>
  </section>
}