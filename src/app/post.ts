import { Profile } from './profile';
import { Image } from './image';

export class Post {
    user: Profile;
    user_image: Image;

    constructor(user: Profile, user_image: Image){
        this.user = user;
        this.user_image = user_image;
    }
}
