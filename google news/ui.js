class Ui {
    constructor() {

    }


    displayHeadLines2(newsList) {
        //A.0 Create The Parent Div's for Nice Flex Display 
        const divParent = document.createElement('div');
        divParent.className = 'parent-div';

        // A.1 create Three Divs 
        const divL = document.createElement('div'),
            divM = document.createElement('div'),
            divR = document.createElement('div');
        divL.className = 'DivL';
        divM.className = 'DivM';
        divR.className = 'DivR';

        divM.style.width = '33%';
        divR.style.width = '33%';
        divL.style.width = '33%';


        // <div class="article">
        //                 <div class="article-image">
        //                     <!-- image goes here -->
        //                     <img src="https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/4/3/8/3438766-46.jpg" alt="">
        //                 </div>
        //                 <div class="article-content">
        //                     <h1 class="title">the Article title Goes here</h1>
        //                     <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        //                         provident fugiat, eum error modi dolorum necessitatibus praesentium ullam libero
        //                         perspiciatis!</p>
        //                 </div>
        //</div>



        // console.log(divarticle.innerHTML);
        newsList.forEach((element, i) => {

            // Article
            const divarticle = document.createElement('div');
            divarticle.className = 'article';

            // image Div
            const divimage = document.createElement('div');
            divimage.className = 'article-image';

            // image
            const image = document.createElement('img');
            image.src = '';
            image.alt = '';

            divimage.appendChild(image);
            divarticle.appendChild(divimage);

            //  Article Content
            const divcontent = document.createElement('div');
            divcontent.classList = 'article-content';

            const title = document.createElement('h3'),
                description = document.createElement('p');
            title.className = 'title';
            description.className = 'description';
            divcontent.appendChild(title);
            divcontent.appendChild(description);
            divarticle.appendChild(divcontent);


            // Create l

            title.innerText = element.title;
            try {
                description.innerText = element.description;
            } catch (error) {

            }

            // not adding the image 
            try {

                image.src = element.urlToImage;;
            } catch (error) {
                console.log('Append');
            }

            image.alt = element.title;

            // A.2: append to To Each one og the three Diva
            let reminderFixed = (i) % 3;
            reminderFixed.toFixed(0);
            switch (reminderFixed) {
                case 0:
                    divL.appendChild(divarticle);
                    break;
                case 1:
                    divM.appendChild(divarticle);
                    break;
                case 2:
                    divR.appendChild(divarticle);
                    break;
                default:
            }


            // console.log(element);
        });

        // A.4 append threes columns / divs to the parent Div
        divParent.appendChild(divL);
        divParent.appendChild(divM);
        divParent.appendChild(divR);
        divParent.style.display = 'flex';
        divParent.style.gap = '10px';
        // divParent.style.alignItems = 'center';

        // A.5 Append to the Static HTML
        document.querySelector('.headlines').appendChild(divParent);


    }


    Displaycols2(newsList) {
        //A.0 Create The Parent Div's for Nice Flex Display 
        const divParent = document.createElement('div');
        divParent.className = 'parent-div';

        // A.1 create Three Divs 
        const divL = document.createElement('div'),
            divR = document.createElement('div');
        divL.className = 'DivL';
        divR.className = 'DivR';

        // divM.style.width = '33%';
        divR.style.width = '50%';
        divL.style.width = '50%';


        // <div class="article">
        //                 <div class="article-image">
        //                     <!-- image goes here -->
        //                     <img src="https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/4/3/8/3438766-46.jpg" alt="">
        //                 </div>
        //                 <div class="article-content">
        //                     <h1 class="title">the Article title Goes here</h1>
        //                     <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        //                         provident fugiat, eum error modi dolorum necessitatibus praesentium ullam libero
        //                         perspiciatis!</p>
        //                 </div>
        //</div>



        // console.log(divarticle.innerHTML);
        newsList.forEach((element, i) => {

            // Article
            const divarticle = document.createElement('div');
            divarticle.className = 'article';

            // image Div
            const divimage = document.createElement('div');
            divimage.className = 'article-image';

            // image
            const image = document.createElement('img');
            image.src = '';
            image.alt = '';

            divimage.appendChild(image);
            divarticle.appendChild(divimage);

            //  Article Content
            const divcontent = document.createElement('div');
            divcontent.classList = 'article-content';

            const title = document.createElement('h3'),
                description = document.createElement('p');
            title.className = 'title';
            description.className = 'description';


            // Articlde TIme 
            const timeP = document.createElement('p');
            // timeP.innerText = getTimestr(element.publishedAt);

            timeP.innerText = this.getTimestr(element.publishedAt);

            divcontent.appendChild(title);

            divcontent.appendChild(description);
            divcontent.appendChild(timeP);
            divarticle.appendChild(divcontent);



            title.innerText = element.title;
            try {
                description.innerText = element.description;
            } catch (error) {

            }

            // not adding the image 
            try {

                image.src = element.urlToImage;;
            } catch (error) {
                console.log('Append');
            }

            image.alt = element.title;

            // A.2: append to To Each one og the three Diva
            let reminderFixed = (i) % 2;
            reminderFixed.toFixed(0);
            switch (reminderFixed) {
                case 0:
                    divL.appendChild(divarticle);
                    break;
                case 1:
                    divR.appendChild(divarticle);
                    break;

                default:
            }

        });

        // A.4 append threes columns / divs to the parent Div
        divParent.appendChild(divL);

        divParent.appendChild(divR);
        divParent.style.display = 'flex';
        divParent.style.gap = '10px';
        // divParent.style.alignItems = 'center';

        // A.5 Append to the Static HTML
        document.querySelector('.headlines').appendChild(divParent);


    }

    DisplayRow(dataList) {
        //A.0 Create The Parent Div's for Nice Flex Display 
        const divParent = document.createElement('div');
        divParent.className = 'parent-div';
        divParent.id = 'sports';


        dataList.forEach((element, i) => {

            // Article
            const divarticle = document.createElement('div');
            divarticle.className = 'article-row';

            // image Div
            const divimage = document.createElement('div');
            divimage.className = 'article-image';


            // image
            const image = document.createElement('img');
            image.src = '';
            image.alt = '';

            divimage.appendChild(image);



            //  Article Content
            const divcontent = document.createElement('div');
            divcontent.className = 'article-content';

            const title = document.createElement('h3'),
                description = document.createElement('p');
            title.className = 'title';
            description.className = 'description';


            // Articlde TIme 
            const timeP = document.createElement('p');
            // timeP.innerText = getTimestr(element.publishedAt);

            timeP.innerText = this.getTimestr(element.publishedAt);

            divcontent.appendChild(title);

            divcontent.appendChild(description);
            divcontent.appendChild(timeP);
            divarticle.appendChild(divcontent);

            divarticle.appendChild(divimage);


            title.innerText = element.title;
            try {
                description.innerText = element.description;
            } catch (error) {

            }

            // not adding the image 
            try {

                image.src = element.urlToImage;;
            } catch (error) {
                console.log('Append');
            }

            image.alt = element.title;

            divParent.appendChild(divarticle);

        });

        // A.4 append threes columns / divs to the parent Div
        // divParent.style.display = 'flex';


        // divParent.style.gap = '10px';
        // divParent.style.flexWrap = 'wrap';

        // A.5 Append to the Static HTML
        document.querySelector('.headlines').innerHTML = '';
        document.querySelector('.headlines').appendChild(divParent);
        divParent.style.alignItems = 'right';


    }

    getTimestr(publishedAt) {
        let str = ''

        // Artile time 
        const timeUI = document.createElement('p');
        const utcTime = publishedAt;
        // will convert from utc to isreal time utc+3
        const mDate = new Date(utcTime);

        const cuurentDate = new Date();
        // the top headline always from the same data 
        // console.log(publishedAt, + "\n" + mDate);
        const isTheSameDay = true;
        const h = cuurentDate.getHours() - mDate.getHours();
        const isTheSameHour = h == 0 ? true : false;

        if (isTheSameDay && !isTheSameHour)
            str = h + " hours ago";

        if (isTheSameDay && isTheSameHour) {
            const m = cuurentDate.getMinutes() - mDate.getMinutes();
            str = m + " Munites ago";
        }
        return str;
        // const dtr1 
    }


}