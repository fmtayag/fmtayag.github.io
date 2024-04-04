import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        release: z.string(),
        summary: z.string(),
        techs: z.array(z.string()),
        roles: z.array(z.string()),
    })
})

export const collections = {
    'projects': projectCollection
}