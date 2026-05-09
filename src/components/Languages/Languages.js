import uniqid from 'uniqid'
import { languages } from '../../portfolio'
import './Languages.css'

const Languages = () => {
  if (!languages || !languages.length) return null

  return (
    <section className='section languages' id='languages'>
      <h2 className='section__title'>Languages</h2>
      <div className='languages__list'>
        {languages.map((item) => (
          <div key={uniqid()} className='languages__item'>
            <span className='languages__name'>{item.language}</span>
            <span className='languages__level'>{item.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages