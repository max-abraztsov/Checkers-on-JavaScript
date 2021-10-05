import '../scss/zero.scss';
import '../scss/style.scss';
import '../css/style.css';

const allRectangles = document.querySelectorAll('.rectangle');
let blackRectangles = [];
let allCheckers;

for (let i = 0; i < allRectangles.length; i++){
    if( i % 2 != 0 && !allRectangles[i].classList.contains('none')){
        blackRectangles.push(allRectangles[i]);
    }
}
console.log(blackRectangles);

blackRectangles.forEach( item => {
    item.addEventListener('click', (e) => {
        console.log(e);
    });
});



class Checker {
    constructor(height, width, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    spawn (rec) {
        const checkerOne = document.createElement('div');

        checkerOne.classList.add('checker');

        checkerOne.style.cssText = `
            width:${this.width}px;
            height:${this.height}px;
            border-radius:50%;
            background-color:${this.color};
        `;
        blackRectangles[rec].append(checkerOne);

        checkerOne.addEventListener('click', (e) => {
            blackRectangles.forEach( item => {
                item.style.border = '2px solid blue';
                item.addEventListener('click', go);
            }); 
        });

        function go(e){
            if(!e.target.hasChildNodes() && e.target.classList.contains('rectangle')){
                e.target.append(checkerOne);
                blackRectangles.forEach( item => {
                    item.style.border = '';
                });
            } 
        }
    }

    go () {
    
    }
}

const checker1 = new Checker(55, 55, 'white');
const checker2 = new Checker(55, 55, 'white');

checker1.spawn(26);
checker2.spawn(27);

console.log(allCheckers);
allCheckers = document.querySelectorAll('.checker');
// allCheckers.forEach( (item)=> {
//     item.addEventListener('click', (e) => {
//         e.target.go();
//     });
// });
