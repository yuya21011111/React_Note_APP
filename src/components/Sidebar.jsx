import React from 'react'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-gray-300'>
        <div className='flex justify-between'>
            <h1 className='text-gray-700 text-3xl'>ノート</h1> 
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>追加</button>
        </div>
        <div className=''>
            <div className=''>
                <div>
                    <strong>タイトル</strong>
                    <button>削除</button>
                </div>
                <p>ノートの内容です</p>
                <small>最後の修正日:xx/xx</small>
            </div>
        </div>
    </div>
  )
}

export default Sidebar