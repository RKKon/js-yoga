class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    creatDiv() {    
        let creatNewDiv = document.createElement('div');   
        document.body.appendChild(creatNewDiv);
        let param = `
        height:${this.height}px; 
        width:${this.width}px; 
        background-color:${this.bg};
        font-size:${this.fontSize};
        text-align:${this.textAlign}`;
        creatNewDiv.style.cssText = param;
    }
}

const item = new Options(200, 400, 'red', '16px', 'center');
item.creatDiv();

