export default (ctx) => {
  ctx.$axios.onError((error) => {
    const errorMsg = error.response ? error.response.data.message : 'Unknown error'
    const errorCode = error.response ? parseInt(error.response.status) : -1
    if (errorCode === 401) {
      ctx.redirect('/')
      // eslint-disable-next-line no-console
      console.log(errorCode + ' - ' + errorMsg)
    } else {
      throw new Error(error)
    }
  })
}
