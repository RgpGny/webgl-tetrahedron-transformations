# WebGL 3D Tetrahedron Transformations

A WebGL-based interactive 3D application that renders a colorful tetrahedron with real-time transformation controls. This project demonstrates fundamental computer graphics concepts including 3D geometry, matrix transformations, and shader programming.

## 📋 Project Information

**Course:** Computer Graphics  
**Assignment:** Homework 2  
**Authors:** 
- Ragıp Günay : ragipgunay09@gmail.com
- Duygu Kamalak : duygukamaalak@gmail.com

## 🎯 Features

### 3D Rendering
- **WebGL-based rendering pipeline** with vertex and fragment shaders
- **Regular tetrahedron geometry** with mathematically precise vertex coordinates
- **Multi-colored faces** - Each of the four triangular faces has a distinct color:
  - Red face
  - Green face  
  - Blue face
  - Yellow face

### Interactive Transformations
- **Translation Controls**
  - X-axis translation: -1.0 to 1.0
  - Y-axis translation: -1.0 to 1.0

- **Rotation Controls**
  - X-axis rotation: -90° to 90°
  - Y-axis rotation: -90° to 90°
  - Z-axis rotation: -90° to 90°

- **Scaling Controls**
  - X-axis scaling: -2.0 to 2.0
  - Y-axis scaling: -2.0 to 2.0

- **Reset Functionality**
  - One-click reset to return tetrahedron to its original state

### Real-time Rendering
- **Continuous rendering loop** for smooth real-time updates
- **Depth testing** for proper 3D visualization
- **Matrix transformations** applied in real-time as controls are adjusted

## 🛠️ Technology Stack

- **WebGL** - Low-level graphics API for 3D rendering
- **HTML5 Canvas** - Rendering surface
- **JavaScript** - Application logic and interaction handling
- **GLSL** - Shader Language for vertex and fragment shaders

### Dependencies
The project uses several utility libraries located in the `Common/` directory:

- `webgl-utils.js` - Standard WebGL context setup utilities
- `MV.js` - Matrix and vector mathematics library
- `initShaders.js` - Shader initialization and compilation utilities

## 📁 Project Structure

```
HW2_Ragıp_Günay_200316007_Duygu_Kamalak_200316046/
├── Common/                    # Shared WebGL utilities
│   ├── initShaders.js        # Shader initialization functions
│   ├── initShaders2.js       # Alternative shader initialization
│   ├── MV.js                 # Matrix/vector mathematics library
│   ├── MV2.js                # Alternative matrix/vector library
│   ├── README.txt            # Documentation for common files
│   └── webgl-utils.js        # WebGL context setup utilities
├── hw2/                      # Main application files
│   ├── tetrahedron.html      # Main HTML file with UI
│   └── tetrahedron.js        # JavaScript application logic
├── recording_for_html.mkv    # Video demonstration of the application
└── README.md                 # This file
```

## 🚀 Setup and Installation

### Prerequisites
- Modern web browser with WebGL support (Chrome, Firefox, Safari, Edge)
- Web server (for local development) or direct file access capability

### Installation Steps

1. **Clone or download the repository**
   ```bash
   git clone [repository-url]
   cd HW2_Ragıp_Günay_200316007_Duygu_Kamalak_200316046
   ```

2. **Set up a local web server** (recommended)
   
   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Using Node.js:
   ```bash
   npx http-server
   ```

3. **Open the application**
   - Navigate to `http://localhost:8000/hw2/tetrahedron.html`
   - Or open `hw2/tetrahedron.html` directly in your browser

## 💻 Usage Guide

### Basic Operation
1. Open the application in your web browser
2. The tetrahedron will be displayed in the center of the canvas
3. Use the control panel on the right to manipulate the tetrahedron

### Control Panel
- **Translations**: Drag sliders to move the tetrahedron along X and Y axes
- **Rotations**: Adjust rotation angles around X, Y, and Z axes
- **Scaling**: Modify the size along X and Y axes
- **Reset Button**: Click to restore all transformations to default values

### Tips
- Combine multiple transformations for complex effects
- Use rotation controls to view different faces of the tetrahedron
- Negative scaling values will flip the tetrahedron along that axis

## 🔧 Technical Implementation

### Geometry Definition
The tetrahedron vertices are mathematically calculated to form a regular tetrahedron:
```javascript
var vertices = [
    vec4(0.0, 0.0, 0.5, 1.0),                    // Top vertex
    vec4(0.0, 0.942809, -0.333333, 1.0),         // Front vertex
    vec4(-0.816497, -0.471405, -0.333333, 1.0),  // Left vertex
    vec4(0.816497, -0.471405, -0.333333, 1.0)    // Right vertex
];
```

### Transformation Pipeline
The application applies transformations in the following order:
1. Initial scaling (0.5 factor for proper canvas fitting)
2. User-defined scaling
3. Rotations (X → Y → Z order)
4. Translation

### Shader Programs
- **Vertex Shader**: Applies model-view matrix transformations and passes color to fragment shader
- **Fragment Shader**: Renders each pixel with interpolated colors

## 🎥 Demonstration

A video recording (`recording_for_html.mkv`) is included showing the application in action, demonstrating all transformation capabilities.

## 🔍 Educational Value

This project demonstrates key computer graphics concepts:

- **3D Geometry**: Understanding and implementing 3D coordinate systems
- **Matrix Mathematics**: Transformation matrices for translation, rotation, and scaling
- **WebGL Pipeline**: Vertex processing, rasterization, and fragment processing
- **Shader Programming**: Writing and using GLSL shaders
- **Interactive Graphics**: Real-time user interaction and rendering updates
- **Color Theory**: Per-vertex color assignment and interpolation

## 🐛 Troubleshooting

### Common Issues

1. **Blank Canvas**
   - Ensure WebGL is supported and enabled in your browser
   - Check browser console for JavaScript errors

2. **Controls Not Responding**
   - Verify all JavaScript files are loaded correctly
   - Check that the HTML file is served from a web server

3. **Incorrect Colors**
   - Ensure shaders are compiled successfully
   - Verify color buffer is properly bound

### Browser Compatibility
- ✅ Chrome 15+
- ✅ Firefox 4+
- ✅ Safari 8+
- ✅ Edge 12+

## 📚 Learning Resources

For those interested in learning more about the technologies used:

- [WebGL Fundamentals](https://webglfundamentals.org/)
- [MDN WebGL Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
- [OpenGL ES Shading Language](https://www.khronos.org/files/opengles_shading_language_3.00_specification.pdf)

## 📄 License

This project is created for educational purposes as part of a Computer Graphics course assignment.

---

**Note**: This application requires a modern web browser with WebGL support for proper functionality. 