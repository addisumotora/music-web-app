import express, { Application, Request, Response} from 'express'
import cors from 'cors';

const app: Application = express();
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('server is connected')
})
app.listen(3000, () => {
    console.log('server is running')
})