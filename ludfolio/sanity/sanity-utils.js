import { createClient, groq } from "next-sanity";

export async function getProjects() {

    const client = createClient({
        projectId: "dxtnan7v",
        dataset: "production",
        apiVersion: "2023-11-27",
        useCdn: false
    })


    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    )
}