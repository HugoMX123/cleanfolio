import uniqid from 'uniqid'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  if (!education || !education.length) return null

  return (
    <section className='section education' id='education'>
      <h2 className='section__title'>Education</h2>
      <div className='education__list'>
        {education.map((item) => (
          <div key={uniqid()} className='education__item'>
            <div className='education__item-header'>
              <div className='education__item-left'>
                <h3 className='education__degree'>{item.degree}</h3>
                <span className='education__institution'>
                  {item.url ? (
                    <a href={item.url} target='_blank' rel='noreferrer' className='link'>
                      {item.institution}
                    </a>
                  ) : (
                    item.institution
                  )}
                </span>
              </div>
              <div className='education__item-right'>
                {item.period && (
                  <span className='education__period'>{item.period}</span>
                )}
                {item.location && (
                  <span className='education__location'>{item.location}</span>
                )}
              </div>
            </div>
            {item.description && (
              <p className='education__description'>{item.description}</p>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className='education__highlights'>
                {item.highlights.map((h) => (
                  <li key={uniqid()} className='education__highlight-item'>
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

export default Education
