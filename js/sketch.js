let myModel;
let myTexture;
let angle = 0;

function preload() {
    myModel = loadModel('assets/body4.obj', true);
    myTexture = loadImage('assets/mondrian.jpg');
}

function setup() {
    createCanvas(windowWidth, 700, WEBGL);
}

function draw() {
    // background(0);
    ambientLight(255);
    directionalLight(255, 255, 255, 0, 0, 1);
    // specularColor(0, 255, 0);
    rotateX(angle);
    rotateY(angle * 1.3);
    rotateZ(angle * 0.7);
    scale(2.6);
    normalMaterial();
    texture(myTexture);
    model(myModel);
    angle += 0.01;

}
