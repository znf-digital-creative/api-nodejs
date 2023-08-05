import  express from "express";
import roleController from "../controllers/roleController";
const router = express.Router()
router.get("/role", roleController.GetRole)
router.post('/role', roleController.CreteRole)
router.patch('/role/:id', roleController.UpdateRole)
router.delete('/role/:id', roleController.DeleteRole)
router.get('/role/:id', roleController.GetRoleById)

export default router