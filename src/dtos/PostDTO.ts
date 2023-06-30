export interface PostDTO {
    id: string;
    title: string;
    slug: string;
    description: string;
    body: string;
}

export class PostDTO {
    
    public constructor({id, title, slug, description, body}: PostDTO) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.body = body;
    }

    public static fromArray(array: Array<PostDTO | unknown>): Array<PostDTO> {
        return array.map((post) => new PostDTO(post as PostDTO));
    }
}