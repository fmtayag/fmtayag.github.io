import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
    })
})

export const collections = {
    'projects': projectCollection
}