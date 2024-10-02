const express = require('express');
const app = express();
const cors = require('cors');
const dbInstance = require('./usercontroller')
const PORT = process.env.PORT || 3000;
const tokenHandler = require('./tokenhandler');
app.use(express.json());
app.use(cors());
// --------------------------------------------------------Routes-------------------------------------------------
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await dbInstance.verifyUserCredentials(email, password);
        if (user) {
            res.status(200).json({
                message: 'Login successful',
                user: {
                    username: user.username,
                    email: user.email,
                    role: user.role
                },
                token: tokenHandler.generateToken(user)
            });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

app.get('/allUser',async (req,res)=>{
    try {
        const userData = await dbInstance.getUsers()
        console.log(userData)
        res.send(userData)
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Function for admin access
const adminPage = (req, res) => {
    if (req.user.role === 'Admin') {
        res.json({ message: `Hi ${req.user.email}, you are ${req.user.role}, hence accessing this page.` });
    } else {
        res.status(403).json({ message: 'Access denied. Only admins can access this page.' });
    }
};

// Function for manager access
const managerPage = (req, res) => {
    if (req.user.role === 'Manager' || req.user.role === 'Admin' ) {
        res.json({ message: `Hi ${req.user.email}, you are ${req.user.role}, hence accessing this page.` });
    } else {
        res.status(403).json({ message: 'Access denied. Only managers can access this page.' });
    }
};

// Function for employee access
const employeePage = (req, res) => {
    if (req.user.role === 'Employee' || req.user.role === 'Admin' ) {
        res.json({ message: `Hi ${req.user.email}, you are ${req.user.role}, hence accessing this page.` });
    } else {
        res.status(403).json({ message: 'Access denied. Only employees can access this page.' });
    }
};


// Routes that use the authenticateJWT middleware
app.get('/admin', tokenHandler.authenticateJWT, adminPage);
app.get('/manager', tokenHandler.authenticateJWT, managerPage);
app.get('/employee', tokenHandler.authenticateJWT, employeePage);
// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
