const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000)
  })
}

export default sleep
