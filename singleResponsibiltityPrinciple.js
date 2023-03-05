class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true
    }
}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    toJSON(){
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }
}

const news = new News('CSGO', 'New source 2');

const newsFormatHtml = new NewsPrinter(news).html();
const newsFormatJSON = new NewsPrinter(news).toJSON();

console.log(newsFormatHtml);
console.log(newsFormatJSON);