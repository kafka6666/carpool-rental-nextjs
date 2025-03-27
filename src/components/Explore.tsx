import styles from '@/constants/styles'
import TitleText from './TitleText'
import { exploreWorlds } from '@/constants/appdata'
import ExploreCard from './ExploreCard'

const Explore = () => {
  return (
    <section className='px-6 py-10'>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <TitleText>
              <span className="text-gray-700 font-extrabold">
                Why Ride With Us?
              </span>
              <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 mx-auto" style={{ maxWidth: '90%' }}>
                {exploreWorlds?.map((world, index) => (
                  <ExploreCard key={index} world={world} />
                ))}
              </div>
            </TitleText>
        </div>
    </section>
  )
}

export default Explore