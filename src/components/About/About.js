import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about'>

      {/* Top row: title + picture side by side */}
      <div className='about__top'>
        <div className='about__titles'>
          {name && (
            <h1>Hi, I am <span className='about__name'>{name}.</span></h1>
          )}
          {role && <h2 className='about__role'>{role}.</h2>}
        </div>

        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}
      </div>

      {/* Bullet points below, full width */}
      {description && (
        Array.isArray(description) ? (
          <ul className='about__desc'>
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className='about__desc'>{description}</p>
        )
      )}

      {/* Contact buttons */}
      <div className='about__contact'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>Resume</span>
          </a>
        )}
        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label='github' className='link link--icon'>
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} aria-label='linkedin' className='link link--icon'>
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About