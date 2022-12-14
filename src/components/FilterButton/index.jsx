import { Button } from '../../globalStyles'
import {useState, useEffect} from 'react'

export const FilterButton = ({clickHandler, status, isActive, id}) => {
	
  return (
	<Button
		id={id}
		className={id===isActive? ' active' : ' '}
		style={{margin: '0 4px'}}
		value={status}
		onClick={clickHandler}>{status}</Button>
  )
}




