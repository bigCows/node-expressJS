const jwt = require('jsonwebtoken')

const SECRET = 'mxf_key_adk2_j2d+2'

const JWT = {
  /**
   * 
   * @param {*} data 要加密的数据
   * @param {*} time token过期时间
   * @returns 返回生成的token
   */
  encrypt (data,time) {
    return jwt.sign(data,SECRET,{expiresIn: time})
  },

  /**
   * 
   * @param {*} token 需要解密的token 
   * @returns 返回解密数据
   */
  decrypt (token) {
    try {
      return jwt.verify(token,SECRET)
    } catch (error) {
      return false
    }
  }

}

module.exports = JWT
