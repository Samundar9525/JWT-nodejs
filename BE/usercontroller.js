
// function to get all the user from database
const db = require('./conn');

const getUsers = async () => {
    try {
        const result = await db.query('SELECT * FROM login');
        return result.rows;
    } catch (error) {
        console.error('Database error:', error);
        throw new Error('Unable to fetch users');
    }
  };
//   function to verify that the user credential from database
  const verifyUserCredentials = async (email, password) => {
    try {
        const result = await db.query('SELECT * FROM login WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return null;
        }
        const user = result.rows[0];
        if (password === user.password) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Database error:', error);
        throw new Error('Error querying the database');
    }
};


  module.exports = {
    getUsers,
    verifyUserCredentials
  };
  