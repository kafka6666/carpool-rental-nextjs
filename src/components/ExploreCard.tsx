interface WorldProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
}

import Image from 'next/image';

const ExploreCard = ({world}: {world: WorldProps}) => {
  return (
    <div className="w-full sm:w-[200px] p-1 group">
      <div 
          className="text-center py-3 px-4 shadow-md text-gray-900 gradient-05 rounded-lg border-orange-700 border relative cursor-pointer flex flex-col items-center w-full h-full transition-all duration-100 group-hover:shadow-lg group-hover:shadow-orange-400 group-hover:border-2 z-10"
      >
          <div
              key={world.id}
              className="mx-auto w-16 h-16 border-2 border-white rounded-full overflow-hidden mb-2 sm:-mt-[45px] relative"
          >
              <Image 
                  src={world.imgUrl} 
                  alt={world.title} 
                  fill
                  className='object-cover object-center'
              />
          </div>
          <div className="mt-1">
              <h2 className='text-sm font-bold text-orange-700'>{world.title}</h2>
              <p className='text-xs text-gray-500 mt-1'>{world.description}</p>
          </div>
      </div>
    </div>
  )
}

export default ExploreCard