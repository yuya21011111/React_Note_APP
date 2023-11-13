import { useState } from "react"

const Main = () => {
  const [val_t, setVal_t] = useState('')
  const [val_n, setVal_n] = useState('')


  const onVal_t = (e) => {
   let newTitle = e.target.value
   setVal_t(newTitle)
  }

  const onVal_n = (e) => {
    let newNote = e.target.value
    setVal_n(newNote)
   }
  return (
  <div className="w-64">
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900">タイトル</label>
      <input onChange={onVal_t} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"　placeholder="タイトルを入力" />
  </div>
  <div className="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">ノート内容</label>
    <textarea onChange={onVal_n} type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ノート内容入力" />
  </div>

  <div className="mb-2 text-2xl font-medium text-gray-900">プレビュー</div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900">タイトル</label>
      <div type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"　placeholder="タイトルを入力" >{val_t}</div>
  </div>
  <div className="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">ノート内容</label>
    <div type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ノート内容入力" >{val_n}</div>
  </div>
</div>
  )
}

export default Main