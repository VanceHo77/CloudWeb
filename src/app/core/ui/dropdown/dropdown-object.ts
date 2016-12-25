export class DropdownObject {
    category: string;
    title: string;
    uri: string;
    imgUrl: string

    constructor(category, title, uri, imgUrl) {
        this.category = category;
        this.title = title;
        this.uri = uri;
        this.imgUrl = imgUrl;
    }
}