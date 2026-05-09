import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null


  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => {
          const name = typeof skill === 'string' ? skill : skill.name
          const icon = typeof skill === 'object' ? skill.icon : null
          
          return (
            <li key={name} className='skills__list-item btn btn--plain'>
              {icon && (
                <>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}.svg`}
                    alt={name} // Keep the alt text clean
                    className='skills__icon'
                  />
                  {' '} {/* This forces a physical space between the img and the name */}
                </>
              )}
              {name}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
