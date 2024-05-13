//Create this Image Class
function Img() {
    this.img = document.createElement('img');
    this.img.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    this.img.style.width = '200px';
    this.img.style.height = '200px';
    document.body.appendChild(this.img);
}   

console.log("this .Img");
export default Img;