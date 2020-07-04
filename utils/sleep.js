/**
 * 睡眠
 * @time { Number } 睡眠时间
 * @return { Promise } 返回Promise对象
 */
export default time => {

  return new Promise(resolve => {

    setTimeout(() => {

      resolve(true)
    }, time)
  })
}
