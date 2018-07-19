/**
 * Class 사용자 클래스
 */
class User {
	/**
	 * Create a user
	 * @param {string} name 이름
	 * @param {?number} age 나이
	 */
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	/**
	 * @description 인사하기
	 * @param {string=} msg=hello 인사말 
	 * @returns {string} `${msg}!, I'm ${this.name}`
	 * @example
const user = User('hak')
user.greeting('Hi') // Hi!, I'm hak
	 */
	greeting(msg = 'hello') {
		return `${msg}!, I'm ${this.name}`
	}

	/**
	 * @async
	 * @description db 객체
	 * @param {string} database database name
	 * @param {string} username database username
	 * @param {string} password database password
	 * @param {{host: string, port: number}=} options={}
	 * @param {string=} options.host=127.0.0.1 database host
	 * @param {number=} options.port=3306 options port
	 * @example
	 * const db = user.sequelize('db', 'admin', 'pass1234', {port: 3307})
	 * @returns {Promise.<boolean>} 
	 */
	async sequelize(database, username, password, options = {}) {
		return new Promise((resolve, reject) => {
			if (1) {
				return resolve(true)
			} else {
				return reject(false)
			}
		})
	}
}

module.exports = User