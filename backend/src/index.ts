import express, { Application, Request, Response} from 'express'

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('server is connected')
})
app.listen(3000, () => {
    console.log('server is running')
})