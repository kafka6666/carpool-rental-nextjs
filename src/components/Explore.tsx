import styles from '@/constants/styles'
import TitleText from './TitleText'

const Explore = () => {
  return (
    <section className='px-6 py-10'>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <TitleText>
              <span className="text-gray-900 font-extrabold">
                Why Ride With Us?
              </span>
            </TitleText>
        </div>
    </section>
  )
}

export default Explore