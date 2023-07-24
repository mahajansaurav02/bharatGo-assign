const Pool=require("pg").Pool


const pool=new Pool({
user:'postgres',
host:'localhost',
database:'postgres-api',
password:'saurav',
port:5432
})


const registerUser= async(req,res)=>{

    try {
        
        let {name,email,password,mobile}=req.body

        const query = 'INSERT INTO users (name, email, password,mobile) VALUES ($1, $2, $3,$4) RETURNING *';
        const values = [name, email, password,mobile];
    
        const result = await pool.query(query, values);
    
        return res.status(201).json({message:"register User Succesfully",data:result.rows[0]});


    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


const getUsers=async(req,res)=>{
    
    try {
        const query = 'SELECT * FROM users';
        const result = await pool.query(query);

        return res.status(200).json({message:"Users",data:result.rows})

        } catch (error) {
            return res.status(500).json({error:error.message})

    }
}
module.exports={
    registerUser,getUsers
}