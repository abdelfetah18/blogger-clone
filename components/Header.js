import { CgMenuGridO } from 'react-icons/cg';
import { AiOutlineSearch,AiOutlineMenu } from 'react-icons/ai';

export default function Header(){
    return(
        <div className='flex flex-row  h-16 border-b-[1px] justify-between'>
            <div className='flex flex-row h-full items-center'>
            <AiOutlineMenu className='mx-3 text-xl' />
            <img className='h-10 mx-3' src='./logo.png' />
            </div>
            <div className='flex flex-row items-center w-5/12'>
            <div className='flex flex-row items-center w-full'>
                <div className='flex flex-row bg-gray-200 rounded-xl items-center w-full'>
                <input className='bg-gray-200 rounded-xl text-xl px-4 py-2 w-11/12' placeholder='Search... '/>
                <AiOutlineSearch className='text-gray-500 mx-4 text-xl' />
                </div>
            </div>
            </div>
            <div className='flex flex-row flex-wrap h-full items-center'>
            <CgMenuGridO className='mx-3 text-2xl text-gray-500' />
            <img className='h-9 mx-3' src='favicon.ico'/>
            </div>
        </div>
    )
}