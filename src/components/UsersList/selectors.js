export const sortModeSelector = (state) => state.users.sortMode
export const usersSelector = (state) => state.users.users
export const filterQuerySelector = (state) => state.users.filterQuery
export const showFilteredSelector = (state) => state.users.showFiltered

export const universalUserSelector = (state) => {
  const users = state.users.users
  const query = state.users.filterQuery
  const sortMode = state.users.sortMode
  if (query && sortMode) {
    return users
      .filter((u) => u.username.includes(query))
      .sort((u1, u2) => (sortMode === 'up' ? u1.id - u2.id : u2.id - u1.id))
  } else if (query) {
    return users.filter((u) => u.username.includes(query))
  } else if (sortMode) {
    return users.sort((u1, u2) =>
      sortMode === 'up' ? u1.id - u2.id : u2.id - u1.id
    )
  } else {
    return users
  }
}