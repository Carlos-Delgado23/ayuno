const initState = {
  fasts: [
    { id: '1', title: 'pckurdu1', content: 'first project' },
    { id: '2', title: 'pckurdu1', content: 'second project' },
    { id: '3', title: 'pckurdu1', content: 'third project' },
  ]
}

const fastReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_FAST':
      console.log('created fast', action.fast)
  }
  return state
}

export default fastReducer