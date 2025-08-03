import fastify from "fastify"
import { readFileSync } from "fs"

const PORT = 1234
const URL = "http://127.0.0.1:" + PORT

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for(let i=0; i<1000; i++) {
    sitemap += '<url><loc>' + URL + '/target/' + i + '</loc></url>'
}

sitemap += '</urlset>'

const pageTemplate = readFileSync("template.html").toString()


const app = fastify()

app.get("/sitemap.xml", (request, reply) => {
    reply.type("text/xml")
    reply.send(sitemap)
})

app.get("/target/:id", (request, reply) => {
    const id = Number(request.params.id)
    reply.type("text/html")
    reply.send(
        pageTemplate
            .replace("SECRET_DATA_1", ""+id)
            .replace("SECRET_DATA_2", ""+(id+1))
            .replace("SECRET_DATA_3", ""+(id+2))
    )
})

app.listen({ port: PORT })