import {PAGE} from "../../../App/App.tsx";

import awsCertifiedCloudPractitioner from './../../../../assets/aws-certified-cloud-practitioner.png'

import './Certificates.css'

export const CERTIFICATES_PAGE: PAGE = {
  title: 'Certificates',
  content: <section className='certificates'>
    <a className="certificate" href="https://www.credly.com/badges/64de666a-5e2d-4278-9143-57e2bcfc940e/public_url"
       target="_blank">
      <img className="certificateImage" src={awsCertifiedCloudPractitioner}
           alt="AWS Certified Cloud Practitioner Badge"/>
      <p className="certificateTitle">AWS Certified Cloud Practitioner</p>
    </a>
  </section>
}