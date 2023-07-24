const Pool = require("pg").Pool
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { isValidemail, isValidpassword, isValidphone } = require("../Validations/validator")


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres-api',
    password: 'saurav',
    port: 5432
})


const registerUser = async (req, res) => {

    try {

        let { name, email, password, mobile } = req.body
        if (!name) {
            return res.status(400).json({ status: false, message: "Please provide name" })
        }
        if (!email) {
            return res.status(400).json({ status: false, message: "Please provide EmailId" })
        }
        if (!isValidemail(email)) {
            return res.status(400).json({ status: false, message: "Email is Invalid" })
        }

        if (!password) {
            return res.status(400).json({ status: false, message: "Please provide password" })
        }
        if (!mobile) {
            return res.status(400).send({ status: false, message: "Mobile is mandatory" })
        }

        if (!isValidphone(mobile)) {
            return res.status(400).send({ status: false, message: "Enter Valid Mobile No. only 10 digits." })
        }
        let hash = bcrypt.hashSync(password, 10)  // 10 is a saltrounds
        const query = 'INSERT INTO users (name, email, password,mobile) VALUES ($1, $2, $3,$4) RETURNING *';
        const values = [name, email, hash, mobile];

        const result = await pool.query(query, values);


        return res.status(201).json({ message: "register User Succesfully", data: result.rows[0] });


    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
//====================================================================================================================================


const loginUser = async function (req, res) {

    try {

        const { email, password } = req.body

        if (!email) {
            return res.status(400).json({ status: false, message: "Please provide EmailId" })
        }
        if (!isValidemail(email)) {
            return res.status(400).json({ status: false, message: "Email is Invalid" })
        }

        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        console.log(user.password)
        console.log(user.id)
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password) // compare logIN and DB password , return boolean value
        if (!isMatch) { return res.status(400).json({ Status: false, message: "incorrect credential" }) }
        const token = await jwt.sign({ userId: user.id }, "Project5", { expiresIn: '1h' });

        return res.status(200).json({ status: true, message: "User login successfull", data: { user: user._id, token: token } })

    }
    catch (err) {
        return res.status(500).json({ message: "server error", error: err.message })
    }

}




//=======================================================================================================================
const getUsers = async (req, res) => {

    try {
        const query = 'SELECT * FROM users';
        const result = await pool.query(query);

        return res.status(200).json({ message: "Users", data: result.rows })

    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}


//====================================================================================================================================
const getUserById=async(req,res)=>{

      const userId = req.params.id;

  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [userId]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

      return res.status(200).json({message:"User Found",data:user});
  } catch (error) {
    console.error(error);
   return  res.status(500).json({ error:error.message });
  }

}

//=================================================================================================================================================


const updateUserById=async(req,res)=>{
const userId = req.params.id;
  const userData = req.body;

  try {
    const query = `
      UPDATE users 
      SET name = $1, email = $2, mobile = $3, password = $4
      WHERE id = $5
    `;

    const values = [userData.name, userData.email, userData.mobile, userData.password, userId];

    await pool.query(query, values);

    res.json({ message: 'User updated successfully.' });
  } catch (error) {
    console.error(error);
return res.status(500).json({ error:error.message });  }
}

//=====================================================================================================================

const deleteUser=async()=>{
    const userId = req.params.id;

  try {
    const deleteQuery = 'DELETE FROM users WHERE id = $1';
    await pool.query(deleteQuery, [userId]);

    return res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error:error.message });  
}
;

}

module.exports = {
    registerUser, getUsers, loginUser,getUserById,updateUserById,deleteUser
}
