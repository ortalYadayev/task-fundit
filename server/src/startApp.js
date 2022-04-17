import createExpressInstance from './createExpressInstance.js'

const startApp = async () => {
    const app = createExpressInstance()

    const PORT = 8888;

    try {
        await app.listen(PORT)
        console.log(`Server running on port ${PORT}`)
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }

    return app
}

export default startApp