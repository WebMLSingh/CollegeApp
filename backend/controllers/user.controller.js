import mongoose from "mongoose";
import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    const user = req.body;

    if (!user.userName || !user.userPhone || !user.cycleId || !user.userPassword) {
        return res.status(400).json({ 'success': false, 'message': 'please provide all the fields' });
    }

    const newUser = new User(user);
    try {
        await newUser.save();
        return res.status(201).json({ 'success': true, 'data': newUser });
    } catch (err) {
        console.log("error in adding a new user", err.message);
        return res.status(500).json({ 'success': false, 'message': 'internal server error' });
    }
}

export const findUser = async (req, res) => {
    const { identifier } = req.params;
    try {
        const user = await User.findOne({
            $or: [
                { userName: identifier },
                { userPhone: identifier },
                { cycleId: identifier }
            ]
        });
        if (user) {
            return res.status(200).json({ 'success': true, 'data': user });
        } else {
            return res.status(404).json({ 'success': false, 'message': 'no user found' });
        }

    } catch (err) {
        console.log("error in finding a new user", err.message);
        return res.status(500).json({ 'success': false, 'message': 'internal server error' });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 'success': false, message: 'invalid user id' });
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({ 'success': true, updatedData: updatedUser });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).json({ 'success': false, message: 'Internal server error' });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const userlogin = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    try {
        const user = await User.findOne({ userName: username });
        if (!user) {
            return res.status(404).json({ 'success': false, message: 'User not found' });
        }

        // Assuming you're storing plain-text passwords (NOT RECOMMENDED)
        if (password !== user.userPassword) {
            return res.status(401).json({ 'success': false, message: 'Invalid password' });
        }

        return res.status(200).json({ 'success': true, message: 'User found', 'data': user });

    } catch (error) {
        console.error("Error during login:", error.message);
        return res.status(500).json({ 'success': false, message: 'Internal server error' });
    }
};

export const getalluser = async (req, res) => {

    try {
        const users = await User.find();
        if (users) {
            return res.status(200).json({ 'success': true, 'data': users });
        } else {
            return res.status(404).json({ 'success': false, 'message': 'no user found' });
        }

    } catch (err) {
        console.log("error in finding a new user", err.message);
        return res.status(500).json({ 'success': false, 'message': 'internal server error' });
    }
}