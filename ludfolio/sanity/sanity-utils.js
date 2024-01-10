import { createClient, groq } from "next-sanity";

export async function getProjects() {

    const client = createClient({
        projectId: "dxtnan7v",
        dataset: "production",
        apiVersion: "2023-12-04",
        useCdn: false
    })


    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            description,
            tech,
            url,
            content,
        }`
    )
}

export async function getProject(slug) {

    const client = createClient({
        projectId: "dxtnan7v",
        dataset: "production",
        apiVersion: "2023-12-04",
        useCdn: false
    })


    return client.fetch(
        groq`*[_type == "project" && slug.current ==  $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "images": images[].asset->url,
            description,
            tech,
            url,
            content
        }`,
        { slug }
    )
}