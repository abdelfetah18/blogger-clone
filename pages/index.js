import { MdArrowDropDown,MdModeComment } from 'react-icons/md';
import { BiTag } from 'react-icons/bi';
import { GoGraph } from 'react-icons/go';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <div className='flex flex-row w-full'>
        <Navigation />
        <div className='flex flex-col items-center w-5/6'>
          <div className='flex flex-row w-2/3 justify-between my-8'>
            <div className='flex flex-row items-center'>
              <div  className='text-base mx-3'>all</div>
              <MdArrowDropDown className='text-xl mx-3' />
            </div>
            <div className='flex flex-row items-center'>
              <div className='text-base mx-3'>manage</div>
              <BiTag className='text-xl mx-3' />
            </div>
          </div>
          <div className='w-2/3 flex flex-col items-center'>
            <div className='flex flex-row w-full  border-[1px] rounded-md p-4 my-1'>
              
              <div className='w-1/6'>
                <img className='h-16 w-32 rounded-md' src='./thumb.png' />
              </div>
              <div className='flex flex-col w-8/12'>
                <div className='text-base mx-2 text-gray-600'>How to be a good programmer!</div>
                <div className='flex flex-row items-center my-2'>
                  <div className='text-xs mx-2 text-gray-400'>Post at 20 june 2022</div>
                  <div className='text-xs px-2 py-1 border-[1px] rounded-full text-gray-400'>Advices</div>
                </div>
              </div>
              <div className='flex flex-col w-2/12'>
                <div className='flex flex-row items-center'>
                  <img className='h-5' src='./favicon.ico' />
                  <div className='text-base mx-1 text-gray-500'>Abdelfetah Dev</div>
                </div>
                <div className='flex flex-row items-center justify-end my-2 text-gray-400'>
                  53 <GoGraph className='mx-2'/>
                  0 <MdModeComment className='mx-2' />
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
