class Google {
    constructor() {
        this.apiKey = 'yourapikey';
    }
    // Get top Head lines for ISREAL 

    async getTopHeadLinesTextFIle() {

        const request = await fetch('topHEadLines');
        const result = await request.json();
        console.log(result);
        return result;

    }
    async getTopHeadLines() {
        const url = `https://newsapi.org/v2/top-headlines?country=il&apiKey=${this.apiKey}`;
        const request = await fetch(url);
        const result = await request.json();
        console.log(result);
        return result;

    }
    async get() {

        const url =
            `https://newsapi.org/v2/everything&apiKey=${this.apiKey}`;
        const url2 = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c5c31464ad544ab1bcba65ae79f73e1b";

        const top_headlines =
            `https://newsapi.org/v2/top-headlines?` +
            `country=us&` +
            `apiKey=${this.apiKey}`;

        const req = await fetch(top_headlines);
        const res = await req.json();

        // console.log(res);
        return res;
    }


    async getSources() {

        const url2 = `https://newsapi.org/v2/top-headlines/sources?apiKey=${this.apiKey}`;

        const url =
            `https://newsapi.org/v2/sources?apiKey=${this.apiKey}`;

        const req = await fetch(url2);
        const res = await req.json();

        // console.log(res);
        return res;
    }

    async getTopHeadLinesCategory(param) {
        // const url = `https://newsapi.org/v2/top-headlines?category=${param}&language=he&apiKey=${this.apiKey}`;
        const request = await fetch('sports');
        const response = await request.json();


        console.log('getTopHeadLinesCategory', param, response);
        return response;
    }
}



