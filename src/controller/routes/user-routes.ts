import express from 'express';
import { UserWrapper } from '../../data/interfaces/user-wrapper';
import { StatusCodes } from 'http-status-codes';

const UserRoutes = (database: UserWrapper) => {
    const userRoutes = express.Router();
    userRoutes.get('/users', async (req, res) => {
        // Create a new user
        const userList = await database.find();
        res.status(StatusCodes.CREATED).json({ userList });
    });
    userRoutes.post('/users', async (req, res) => {
        // Create a new user
        const user = await database.create(req.body);
        res.status(StatusCodes.CREATED).json({ user });
    });
    userRoutes.get('/users/:id', async (req, res) => {
        // Get a user by id
        const user = await database.findById(req.params.id);
        res.status(StatusCodes.OK).json({ user });
    });
    userRoutes.put('/users/:id', async (req, res) => {
        // Update a user by id
        const user = await database.update(req.body, req.params.id);
        res.status(StatusCodes.OK).json({ user });
    });
    userRoutes.delete('/users/:id', async (req, res) => {
        // Delete a user by id
        const user = await database.remove(req.params.id);
        res.status(StatusCodes.OK).json({ user });
    });

    return userRoutes;
}
export default UserRoutes;