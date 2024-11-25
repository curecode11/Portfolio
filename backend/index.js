import { config } from 'dotenv'
config();
import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import emailValidator from 'email-validator'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

const dbproj = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour rate limit 
  max: 5, //max 5 req per hour
  message: {
    status: 429,
    message: "Too many requests. Please try again after a minute.",
  },
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,  // Your email address (for sending emails)
    pass: process.env.EMAIL_PASS,  // Your email password or app password
  },
});

app.post('/send',contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Email validation
    if (!emailValidator.validate(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Prepare email for admin
    const mailOptionsAdmin = {
      from: email,  // The user's email
      to: process.env.ADMIN_EMAIL,  // Admin email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email to admin
    await transporter.sendMail(mailOptionsAdmin);

    // Prepare email for the user (confirmation)
    const mailOptionsUser = {
      from: process.env.EMAIL_USER,  // Your email (for sending confirmation)
      to: email,                    // The user's email (for receiving confirmation)
      subject: 'Thank You for Contacting Us!',
      text: `Hi ${name},\n\nThank you for contacting us. I have received your message and will get back to you shortly.\n\nBest regards,\nRonak Bhowmik`,
    };

    // Send confirmation email to the user
    await transporter.sendMail(mailOptionsUser);

    // After both emails are sent, insert the data into the database
    const query = 'INSERT INTO users (name, email, message) VALUES (?)';
    const values = [name, email, message];

    // Insert into MySQL database
    db.query(query, [values], (err, result) => {
      if (err) {
        console.error('Database insertion error:', err);
        return res.status(500).json({ error: 'Failed to insert data into database.' });
      }

      // Everything is successful
      return res.status(200).json({ message: 'Your message was sent successfully!' });
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});


app.get('/', (req, res) => {
  const q = "select * from users";
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data);
  })
})

app.get('/projects', (req, res) => {
  const query = 'SELECT * FROM project';
  dbproj.query(query, (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch projects' });
    res.status(200).json(data);
  });
});

app.listen(process.env.PORT, () => {
  console.log("jai shri ram");
})