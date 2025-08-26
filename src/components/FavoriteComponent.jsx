import React from 'react'
import { useDispatch } from 'react-redux'
import {updateFavoriteAction} from '../store/favoriteSlice'

function FavoriteComponent({favorite}) {

    const dispatch = useDispatch();
    
  return (
    <div className='flex flex-col gap-[10px] items-center justify-between p-3 border border-slate-600 rounded-[20px] w-[250px]'>
      <img className='w-[200px] h-[200px] ' src={favorite.thumbnail} alt="thumbnail" />
      <p className='text-[14px] font-semibold text-center'>{favorite.title}</p>
      <button className='bg-red-600 text-white py-[12px] px-[40px] rounded-[20px]' onClick={() => dispatch(updateFavoriteAction(favorite))}>Remove</button>
    </div>
  )
}

export default FavoriteComponent
