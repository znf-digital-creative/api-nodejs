import { Request, Response } from "express";
import Role from "../db/models/Role";

const GetRole = async (req: Request, res: Response): Promise<Response> => {
    try {
        const roles = await Role.findAll({
            where: {
                active: true
            }
        })
        return res.status(200).send({
            status: 200,
            message: "OK",
            data: roles
        })
    } catch (err: any) {
        if (err != null && err instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: err.message,
                errors: err
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: err
        })
    }
}

const CreteRole = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { roleName, active } = req.body
        const create = await Role.create({
            roleName,
            active
        })
        return res.status(200).send({
            status: 200,
            message: "Created",
            data: create
        })
    } catch (err: any) {
        if (err != null && err instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: err.message,
                errors: err
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: err
        })
    }
}

const UpdateRole = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params
        const { roleName, active } = req.body
        const data = await Role.findByPk(id)

        if (!data) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            })
        }
        data.roleName = roleName
        data.active = active

        await data.save()
        return res.status(200).send({
            status: 200,
            message: "OK",
            data: data
        })
    } catch (err: any) {
        if (err != null && err instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: err.message,
                errors: err
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: err
        })
    }
}
const DeleteRole = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params
        const data = await Role.findByPk(id)

        if (!data) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            })
        }

        await data.destroy()
        return res.status(200).send({
            status: 200,
            message: "Deleted",
            data: null
        })
    } catch (err: any) {
        if (err != null && err instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: err.message,
                errors: err
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: err
        })
    }
}
const GetRoleById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params
        const roles = await Role.findOne({
            where: {
                id: id
            }
        })
        if (!roles) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            })
        }
        return res.status(200).send({
            status: 200,
            message: "OK",
            data: roles
        })
    } catch (err: any) {
        if (err != null && err instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: err.message,
                errors: err
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal Server error",
            errors: err
        })
    }
}
export default { GetRole, CreteRole, UpdateRole, DeleteRole, GetRoleById }