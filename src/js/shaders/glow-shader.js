AFRAME.registerShader('glow', {
    schema: {
        p: { type: 'float', is: 'uniform', default: 10 },
        c: { type: 'float', is: 'uniform', default: 10 },
        intensity: { type: 'float', is: 'varying', default: 5.0 },
        color: { type: 'color', is: 'uniform', default: '0x2BFECB' },
        viewVector: { type: 'vec3', is: 'uniform' }
    },
    vertexShader: [
    'uniform vec3 viewVector;',
    'uniform float c;',
    'uniform float p;',
    'varying float intensity;',
    'void main() {',
        'vec3 vNormal = normalize( normalMatrix * normal );',
        'vec3 vNormel = normalize( normalMatrix * cameraPosition );',
        'intensity = pow( c - dot(vNormal, vNormel), p );',
        
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
    '}'
    ].join('\n'),

    fragmentShader: [
    'uniform vec3 color;',
    'varying float intensity;',
    'void main() {',
        'vec3 glow = color * intensity;',
        'gl_FragColor = vec4( glow, 1.0 );',
    '}'
    ].join('\n')

});