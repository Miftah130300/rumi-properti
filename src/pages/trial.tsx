import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";


async function getStrapiData() {
    const res = await fetch("http://localhost:1337/api/articles?populate=*")
    const data = await res.json()
    return data
}

export default async function Trial() {
    const { data } = await getStrapiData()
    const content: BlocksContent = data[0].tittle;

    return (
        <main>
            <BlocksRenderer content={content} />
        </main>
    )
}