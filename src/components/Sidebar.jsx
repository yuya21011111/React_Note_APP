import React from 'react'
import Main from './Main'
const Sidebar = () => {
  return (
    <div className='flex'>
     <div className=' bg-gray-100 h-screen p-20'>
      <div className='flex'>
        <h1 className='text-2xl font-medium'>ノート</h1>
        <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>追加</button>
     </div>
     <div className='mt-4  bg-gray-300 '>
            <div className='mx-8 p-8'>
                <div className='flex justify-between'>
                    <strong>タイトル</strong>
                    <button className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>削除</button>
                </div>
                <p>ノートの内容です</p>
                <small className='text-gray-500'>最後の修正日:xx/xx</small>
            </div>
        </div>
      </div>
      <Main />
    </div>
  )
}

export default Sidebar