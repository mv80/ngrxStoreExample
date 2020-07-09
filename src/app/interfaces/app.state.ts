import { Tutorial} from '../store/models/tutorial.model';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { Post } from '../store/models/post';
export interface AppState {
    readonly tutorial : Tutorial[];
    readonly shopping : Array<ShoppingItem>
    // post: Post;
    // message: string;
};