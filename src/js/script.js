import '../scss/zero.scss';
import '../scss/style.scss';
import '../css/style.css';

const allRectangles = document.querySelectorAll('.rectangle');
let blackRectangles = [];

for (let i = 0; i < allRectangles.length; i++){
    if( i % 2 != 0 && !allRectangles[i].classList.contains('none')){
        blackRectangles.push(allRectangles[i]);
    }
}
console.log(blackRectangles);



class Checker {
    constructor(height, width, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    spawn () {
        const checkerOne = document.createElement('div');
        checkerOne.style.cssText = `
            width:${this.width}px;
            height:${this.height}px;
            border-radius:50%;
            background-color:${this.color};
        `;
        blackRectangles[26].append(checkerOne);
    }
}

const checker = new Checker(55, 55, 'white');

checker.spawn();