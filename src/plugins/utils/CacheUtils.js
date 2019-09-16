/**
 * 保存对象缓存
 * @param key 主键
 * @param value 值
 */
const setObject = function (key, value) {
  if (value !== null && value !== undefined) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * 获取对象缓存
 * @param key 主键
 * @return {*}
 */
const getObject = function (key) {
  let value = sessionStorage.getItem(key)
  return value === null ? null : JSON.parse(value)
}

/**
 * 清楚所有缓存
 */
const clearAll = function () {
  sessionStorage.clear()
}

export default {
  setObject,
  getObject,
  clearAll
}
