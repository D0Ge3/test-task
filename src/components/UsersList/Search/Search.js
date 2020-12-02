import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setFilterQuery } from '../../../redux/actions/usersActions'

import { TextField } from '../../../ui/TextField/TextField'

export let Search = () => {
  const dispatch = useDispatch()
  const filterQuery = useSelector((state) => state.users.filterQuery)
  const handleQuery = (e) => {
    dispatch(setFilterQuery(e.target.value))
  }

  return (
    <TextField
      onChange={handleQuery}
      value={filterQuery}
      placeholder="Поиск..."
    />
  )
}
Search = React.memo(Search)
