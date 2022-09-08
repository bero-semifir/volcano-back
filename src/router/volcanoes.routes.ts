import { Router } from "express";
import { VolcanoModel } from "../schemas/Volcano.schema";

const volcanoesRouter = Router();

volcanoesRouter.get('/', async (req, res) => {
    const volcanoes = await VolcanoModel.find();
    res.json(volcanoes);
});

volcanoesRouter.get('/:id', async (req, res) => {
    const volcano = await VolcanoModel.findById(req.params.id);
    if (volcano) {
        res.json(volcano);
    } else {
        res.status(404).json({ message: 'Aucun volcan avec cet ID' })
    }
});

volcanoesRouter.post('/', async (req, res) => {
    const newVolcano = req.body;
    try {
        const resp = await VolcanoModel.create(newVolcano);
        res
            .status(201)
            .json(resp);
    } catch (error) {
        res
            .status(400)
            .json({
                status: 'Validation Error',
                message: error,
            });
    }

})

volcanoesRouter.put('/:id', async (req, res) => {
    const newVolcano = req.body;

    try {
        const resp = await VolcanoModel.findByIdAndUpdate(req.params.id, newVolcano);
        res.json(resp);
    } catch (error) {
        console.log(typeof error);
        res.json({
            status: 'error',
            message: error
        });
    }
})

volcanoesRouter.delete('/:id', async (req, res) => {
    try {
        const resp = await VolcanoModel.findByIdAndDelete(req.params.id);
        res.json(resp);
    } catch (error) {
        res.json({
            status: 'error',
            message: error,
        });
    }
})

export default volcanoesRouter;
