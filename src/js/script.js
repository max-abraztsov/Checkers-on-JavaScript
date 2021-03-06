import '../scss/zero.scss';
import '../scss/style.scss';
import '../css/style.css';


const deck = document.querySelector('.deck');
const allRectangles = deck.querySelectorAll('.rectangle');
let blackRectangles = [];
let p = 0;
// let allCheckers;

for (let i = 0; i < allRectangles.length; i++){
    if( i % 2 != 0 && !allRectangles[i].classList.contains('none')){
        blackRectangles.push(allRectangles[i]);
    }
}
console.log(blackRectangles);

blackRectangles.forEach( item => {
    item.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target.offsetLeft);
        // console.log(e.target.offsetTop);
    });
});



class Checker {
    constructor(height, width, color, index){
        this.height = height;
        this.width = width;
        this.color = color;
        this.index = index;
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
            if(e.target == checkerOne){
                e.target.classList.add('active');
            }
            // console.log(e.target);
            blackRectangles.forEach( item => {
                item.style.border = '2px solid blue';
                item.addEventListener('click', go);
            }); 
        });

        function go(e){
            p++;
            if (p == 2){
                if(!e.target.hasChildNodes() && e.target.classList.contains('rectangle')){    
                    e.target.append(checkerOne);
                    nullFunc();
                }
                if(e.target.hasChildNodes()){
                    nullFunc();
                }
                p = 0;
            }
            if(p == 0){
                nullFunc();
            }
        }

        function nullFunc(){
            blackRectangles.forEach( item => {
                item.style.border = '';
                item.removeEventListener('click', go);
            });
        }
    }
}

function spawnTeam(begin, color){
    for (let i = 0; i < 12; i++){
        const checker = new Checker(55, 55, color);
        checker.spawn(begin + i);
    }
}

spawnTeam(20, 'white');
spawnTeam(0, 'black');



// console.log(allCheckers);
// allCheckers = document.querySelectorAll('.checker');

// const checker1 = new Checker(55, 55, 'white');
// const checker2 = new Checker(55, 55, 'white');

// checker1.spawn(26);
// checker2.spawn(27);


