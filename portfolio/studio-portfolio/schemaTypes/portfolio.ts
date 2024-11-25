import { title } from "process";
import { text } from "stream/consumers";

export default {
    name: 'portfolio',
    type: 'document',
    title: 'Portfolio',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Portfolio Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug for the portfolio',
            options: {
                source: 'title',
            }

        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
}