export default class Comment {
    constructor(hikeId, content) {
        this.CommentId = Date.now(),
        this.Content = content,
        this.HikeId = hikeId,
        this.CreatedDate = new Date()
        // this.Type  = 'hike'
    }
}