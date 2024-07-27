import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import { server, app } from "./socket/socket.js"  // Ensure these are properly configured

dotenv.config()

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err)
  })

const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cookieParser())

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World")
})

// Import routes
import authRoutes from "./routes/auth.routes.js"
import messageRoute from "./routes/message.routes.js"
import userRoute from "./routes/user.routes.js"

// Use routes
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// Error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"
  console.error(err.stack)  // Log stack trace for debugging

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})
