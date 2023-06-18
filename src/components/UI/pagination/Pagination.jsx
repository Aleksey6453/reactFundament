import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({totalPages, page, changePage}) => {
    let pageArray = getPagesArray(totalPages)
  return (
    <div className='pagination'>
        {
          pageArray.map(p => 
            <button key = {p}
                    onClick= {()=> changePage(p)} 
                    className={page === p ?
                      'btn page_current max_w_95' :
                      'btn max_w_95'
             }>{p}</button>
            )
        }
      </div>
  )
}

export default Pagination
