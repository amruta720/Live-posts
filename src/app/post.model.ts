export class Post{
    constructor(
        public title: String,
        public desc: String,
        public imagePath: String,
        public postAddedBy: String,
        public postDateTime: Date
        ){}
}