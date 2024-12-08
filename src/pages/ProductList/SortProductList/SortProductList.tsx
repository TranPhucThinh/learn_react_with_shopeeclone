export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <p>Sắp xếp theo</p>
          <button className='h-8 px-4 text-center text-sm capitalize bg-orange text-white hover:bg-orange/80'>
            Phổ biến
          </button>
          <button className='h-8 px-4 text-center text-sm capitalize bg-white text-black hover:bg-slate-100'>
            Mới nhất
          </button>
          <button className='h-8 px-4 text-center text-sm capitalize bg-white text-black hover:bg-slate-100'>
            Bán chạy
          </button>

          <select
            className='h-8 px-4 text-left text-sm capitalize  outline-none bg-white text-black hover:bg-slate-100'
            defaultValue=''
          >
            <option value='' disabled className='bg-white text-black'>
              Giá
            </option>
            <option value='price:asc' className='bg-white text-black'>
              Giá: Thấp đến cao
            </option>
            <option value='price:desc' className='bg-white text-black'>
              Giá: Cao đến thấp
            </option>
          </select>
        </div>

        <div className='flex items-center'>
          <span className='text-orange'>1</span>
          <span>/2</span>
          <div className='ml-2 flex'>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100 shadow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
