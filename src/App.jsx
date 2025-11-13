import { useState } from 'react'
import './index.css'

function App() {
  const [title, settitle] = useState('')
  const [detials, setdetails] = useState('')
  const [task, settask] = useState([])

  const formsubmit = (e) => {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({ title, detials })
    settask(copytask)
    console.log(task);
    console.log("form is submitted");
    settitle('')
    setdetails('')
  }

  const notedelete = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* form is submitting here */}
          <form
            onSubmit={(e) => { formsubmit(e) }}
            className="mx-auto max-w-xl rounded-2xl bg-white/90 shadow-lg backdrop-blur p-6 sm:p-8 space-y-4"
          >
            <h1 className="text-2xl font-bold text-red-500 text-center">Write Notes</h1>

            <input
              type="text"
              placeholder="Enter Note heading"
              className="block w-full p-4 border border-slate-300 rounded-xl font-medium bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              value={title}
              onChange={(e) => { settitle(e.target.value) }}
            />

            <textarea
              name="text"
              placeholder="Enter details"
              className="block w-full p-4 h-36 border border-slate-300 rounded-xl font-medium bg-white placeholder:text-slate-400 resize-y focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              value={detials}
              onChange={(e) => { setdetails(e.target.value) }}
            />

            <button className="inline-flex items-center justify-center px-5 py-2.5 bg-red-500 text-white rounded-xl font-semibold shadow-sm hover:bg-red-600 active:bg-red-700 transition-colors mx-auto block w-fit">
              Add note
            </button>
          </form>

          {/* Notes list */}
          <h1 className="mt-8 text-2xl font-bold text-yellow-600 text-center">Your Notes</h1>

          <div className="mt-5 flex flex-wrap justify-center gap-4 sm:gap-6">
            {task.map((elem, idx) => (
              <div
                key={idx}
                className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm rounded-2xl bg-white p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => { notedelete(idx) }}
                  aria-label="Delete note"
                  className="absolute right-2 top-2 text-rose-600 hover:text-rose-700 font-bold"
                >
                  ×
                </button>

                <h3 className="text-lg font-bold text-slate-800 pr-6 break-words">
                  {elem.title}
                </h3>
                <p className="mt-1 text-slate-600 whitespace-pre-wrap break-words">
                  {elem.detials}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
