import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        release: z.coerce.date(),
        summary: z.string(),
        techs: z.array(z.string()),
        roles: z.array(z.string()),
        pubDate: z.coerce.date(),
        type: z.string(),
        links: z.record(z.string(), z.string()),
    })
})

export const collections = {
    'projects': projectCollection
}