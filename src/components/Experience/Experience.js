import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience || !experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>work experience</h2>
      <div className='experience__list'>
        {experience.map((item) => (
          <div key={uniqid()} className='experience__item'>
            <div className='experience__item-header'>
              <div className='experience__item-left'>
                <h3 className='experience__role'>{item.role}</h3>
                <span className='experience__company'>
                  {item.url ? (
                    <a href={item.url} target='_blank' rel='noreferrer' className='link'>
                      {item.institution}
                    </a>
                  ) : (
                    item.institution
                  )}
                </span>
              </div>
              <div className='experience__item-right'>
                {item.period && (
                  <span className='experience__period'>{item.period}</span>
                )}
                {item.location && (
                  <span className='experience__location'>{item.location}</span>
                )}
              </div>
            </div>
            {item.description && (
              <p className='experience__description'>{item.description}</p>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className='experience__highlights'>
                {item.highlights.map((h) => (
                  <li key={uniqid()} className='experience__highlight-item'>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience