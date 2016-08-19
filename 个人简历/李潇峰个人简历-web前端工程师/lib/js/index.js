var canvas = document.getElementById("cas");
var ctx = canvas.getContext("2d");
var fallLength =500 , centerX = canvas.width/2 , centerY = canvas.height/2;
Array.prototype.foreach = function(callback){
    for(var i=0;i< this.length;i++){
        callback.apply(this[i] , [i])
    }
}
var Vector = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this._get2d = function(){
        var scale = fallLength/(fallLength+this.z);
        var x = centerX + this.x*scale;
        var y = centerY + this.y*scale;
        return {x:x , y:y};
    }
}
var Pyramid  = function(length){
    this.length = length;
    this.faces = [];
}
Pyramid .prototype = {
    _initVector:function(){
        this.vectors = [];
        this.vectors.push(new Vector(-this.length/2 ,0, -this.length/2 )); //0
        this.vectors.push(new Vector(-this.length/2 ,0, this.length/2 )); //1
        this.vectors.push(new Vector(this.length/2 , 0,-this.length/2)); //2
        this.vectors.push(new Vector(this.length/2 , 0,this.length/2 )); //3
        this.vectors.push(new Vector(0,-2*this.length,0)); //4
    },

    _draw:function(){
        this.faces[0]=new Face(this.vectors[0],this.vectors[1],this.vectors[3],this.vectors[2],"#6c6");
        this.faces[1]=new Face(this.vectors[0],this.vectors[1],this.vectors[4],this.vectors[4],"#6cc");
        this.faces[2]=new Face(this.vectors[0],this.vectors[2],this.vectors[4],this.vectors[4],"#cc6");
        this.faces[3]=new Face(this.vectors[2],this.vectors[3],this.vectors[4],this.vectors[4],"#c6c");
        this.faces[4]=new Face(this.vectors[1],this.vectors[3],this.vectors[4],this.vectors[4],"#666");

        this.faces.sort(function(a , b){
            return b.zIndex - a.zIndex;
        });
        this.faces.foreach(function(){
            this.draw();
        })
    }
}
var Face = function(vector1,vector2,vector3,vector4,color){
    this.v1 = vector1;
    this.v2 = vector2;
    this.v3 = vector3;
    this.v4 = vector4;
    this.color = color;
    this.zIndex = this.v1.z + this.v2.z + this.v3.z + this.v4.z;
    this.draw = function(){
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.v1._get2d().x , this.v1._get2d().y);
        ctx.lineTo(this.v2._get2d().x , this.v2._get2d().y);
        ctx.lineTo(this.v3._get2d().x , this.v3._get2d().y);
        ctx.lineTo(this.v4._get2d().x , this.v4._get2d().y);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.fillStyle = "#229";
    }
}
var angleY = 0.05;
function rotateY(vectors){
    var cos = Math.cos(angleY);
    var sin = Math.sin(angleY);
    vectors.foreach(function(){
        var x1 = this.x * cos - this.z * sin;
        var z1 = this.z * cos + this.x * sin;
        this.x = x1;
        this.z = z1;
    })
}
Pyramid  = new Pyramid (80);
Pyramid ._initVector();
function initAnimate(){
    Pyramid ._draw();
    animate();
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    rotateY(Pyramid .vectors);
    Pyramid ._draw();
    requestAnimationFrame(animate);
}
initAnimate();

