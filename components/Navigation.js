import { AiOutlinePlus,AiFillFormatPainter } from 'react-icons/ai';
import { MdArrowDropDown,MdModeComment,MdOutlinePostAdd } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { FaCog } from 'react-icons/fa';
import { BsTable } from 'react-icons/bs';
import { IoIosPaper } from 'react-icons/io';


export default function Navigation(){
    return(
        <div className='w-1/6 flex flex-col items-center'>
            <div className='flex flex-row items-center w-full justify-between my-6'>
              <div  className='text-base mx-3 font-semibold'>Abdelfetah Dev</div>
              <MdArrowDropDown className='text-2xl text-gray-500 mx-3' />
            </div>
            <div className='flex flex-row px-4 py-2 items-center border-[1px] rounded-full self-start mx-4 my-2 shadow-md shadow-[#00000055]'>
              <AiOutlinePlus className='text-xl text-orange-500'/>
              <div className='text-base mx-1 text-orange-500'>New post</div>
            </div>
            <div className='flex flex-col w-full border-t-[1px] my-4'>
              <div className='flex flex-row items-center px-4 py-2'>
                <MdOutlinePostAdd className='mx-1 text-xl text-orange-400'/>
                <div className='mx-1 text-base text-orange-400'>Posts</div>
              </div>
              <div className='flex flex-row items-center px-4 py-2'>
                <GoGraph className='mx-1 text-xl text-gray-500'/>
                <div className='mx-1 text-base text-gray-500'>Statics</div>
              </div>
              <div className='flex flex-row items-center px-4 py-2'>
                <MdModeComment className='mx-1 text-xl text-gray-500'/>
                <div className='mx-1 text-base text-gray-500'>Comments</div>
              </div>
              <div className='flex flex-row items-center px-4 py-2'>
                <IoIosPaper className='mx-1 text-xl text-gray-500'/>
                <div className='mx-1 text-base text-gray-500'>Pages</div>
              </div>
              <div className='flex flex-row items-center px-4 py-2'>
                <BsTable className='mx-1 text-xl text-gray-500'/>
                <div className='mx-1 text-base text-gray-500'>Coordinations</div>
              </div>
              <div className='flex flex-row items-center px-4 py-2'>
                <AiFillFormatPainter className='mx-1 text-xl text-gray-500'/>
                <div className='mx-1 text-base text-gray-500'>Theme</div>
              </div>
              <div className='flex flex-row items-center px-4 py-2'>
                <FaCog className='mx-1 text-xl text-gray-500'/>
                <div className='mx-1 text-base text-gray-500'>Settings</div>
              </div>
            </div>
          </div>
    )
}