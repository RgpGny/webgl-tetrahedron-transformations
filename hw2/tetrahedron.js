var canvas;
var gl;
var program;
var modelViewMatrix;
var uModelViewMatrix;

var translateX = 0;
var translateY = 0;
var rotateXAngle = 0;
var rotateYAngle = 0;
var rotateZAngle = 0;
var scaleX = 1;
var scaleY = 1;
var initialScale = 0.5;

window.onload = function init() {
    canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    
    var vertices = [
        vec4(0.0, 0.0, 0.5, 1.0),      
        vec4(0.0, 0.942809, -0.333333, 1.0), 
        vec4(-0.816497, -0.471405, -0.333333, 1.0), 
        vec4(0.816497, -0.471405, -0.333333, 1.0)  
    ];

    
    var red = vec4(1.0, 0.0, 0.0, 1.0);
    var green = vec4(0.0, 1.0, 0.0, 1.0);
    var blue = vec4(0.0, 0.0, 1.0, 1.0);
    var yellow = vec4(1.0, 1.0, 0.0, 1.0);

    
    var faceVertices = [];

    
    faceVertices.push(vertices[0], vertices[1], vertices[2]); 
    faceVertices.push(vertices[0], vertices[3], vertices[1]); 
    faceVertices.push(vertices[0], vertices[2], vertices[3]); 
    faceVertices.push(vertices[1], vertices[3], vertices[2]); 

    
    var faceColors = [];

    
    for (var i = 0; i < 3; i++) faceColors.push(red);    
    for (var i = 0; i < 3; i++) faceColors.push(green);  
    for (var i = 0; i < 3; i++) faceColors.push(blue);   
    for (var i = 0; i < 3; i++) faceColors.push(yellow); 

    
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(faceVertices), gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

   
    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(faceColors), gl.STATIC_DRAW);
    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    
    uModelViewMatrix = gl.getUniformLocation(program, "uModelViewMatrix");

    
    resetModelViewMatrix();

    
    document.getElementById("posX").oninput = function(event) {
        translateX = parseFloat(event.target.value);
        updateModelViewMatrix();
    };
    document.getElementById("posY").oninput = function(event) {
        translateY = parseFloat(event.target.value);
        updateModelViewMatrix();
    };
    document.getElementById("rotX").oninput = function(event) {
        rotateXAngle = parseFloat(event.target.value);
        updateModelViewMatrix();
    };
    document.getElementById("rotY").oninput = function(event) {
        rotateYAngle = parseFloat(event.target.value);
        updateModelViewMatrix();
    };
    document.getElementById("rotZ").oninput = function(event) {
        rotateZAngle = parseFloat(event.target.value);
        updateModelViewMatrix();
    };
    document.getElementById("scaleX").oninput = function(event) {
        scaleX = parseFloat(event.target.value);
        updateModelViewMatrix();
    };
    document.getElementById("scaleY").oninput = function(event) {
        scaleY = parseFloat(event.target.value);
        updateModelViewMatrix();
    };

    
    document.getElementById("ResetButton").addEventListener("click", function() {
        translateX = 0;
        translateY = 0;
        rotateXAngle = 0;
        rotateYAngle = 0;
        rotateZAngle = 0;
        scaleX = 1;
        scaleY = 1;
        resetModelViewMatrix();
        
        document.getElementById("posX").value = 0;
        document.getElementById("posY").value = 0;
        document.getElementById("rotX").value = 0;
        document.getElementById("rotY").value = 0;
        document.getElementById("rotZ").value = 0;
        document.getElementById("scaleX").value = 1;
        document.getElementById("scaleY").value = 1;
    });

    render();
};

function resetModelViewMatrix() {
    modelViewMatrix = scalem(initialScale, initialScale, initialScale);
    gl.uniformMatrix4fv(uModelViewMatrix, false, flatten(modelViewMatrix));
}

function updateModelViewMatrix() {
    modelViewMatrix = mat4();
    modelViewMatrix = mult(modelViewMatrix, translate(translateX, translateY, 0));
    modelViewMatrix = mult(modelViewMatrix, rotateX(rotateXAngle));
    modelViewMatrix = mult(modelViewMatrix, rotateY(rotateYAngle));
    modelViewMatrix = mult(modelViewMatrix, rotateZ(rotateZAngle));
    modelViewMatrix = mult(modelViewMatrix, scalem(scaleX, scaleY, 1));
    modelViewMatrix = mult(modelViewMatrix, scalem(initialScale, initialScale, initialScale));
    gl.uniformMatrix4fv(uModelViewMatrix, false, flatten(modelViewMatrix));
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    for (var i = 0; i < 12; i += 3) {
        gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    requestAnimFrame(render);
}
