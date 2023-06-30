import { FindAllPostResponse } from '@/domain/usecases/Post';

export interface PostDTO {
    id: string;
    title: string;
    slug: string;
    description: string;
    body: string;
}

export interface PostDTOIncludesUser extends PostDTO {
    User: {
        name: string;
        username: string;
    }
}

export class PostDTO {

    public constructor({ id, title, slug, description, body }: PostDTO) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.body = body;
    }

    public static fromArray(array: Array<PostDTO | unknown>): Array<PostDTO> {
        return array.map((post) => new PostDTO(post as PostDTO));
    }

    public static fromArrayIncludesUser(array: Array<FindAllPostResponse>): Array<PostDTOIncludesUser> {
        return array.map((p) => {
            const post = new PostDTO(p as PostDTO);
            const user = {
                name: p.User.name,
                username: p.User.username,
            };

            return { ...post, User: user };
        });
    }
}