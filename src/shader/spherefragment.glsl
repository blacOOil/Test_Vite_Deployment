varying vec3 vectorNormal;

void main() {
    // Light direction from camera (fake rim light)
    vec3 viewDir = vec3(1.0, 0.0, 1.0);
    float ndv = dot(normalize(vectorNormal), viewDir); // dot of normal and view

    // Rim lighting: stronger at glancing angles
    float rim = 1.0 - ndv;

    // Control falloff (simulate Gaussian blur effect)
    float glow = pow(rim, 2.0); // Try 2.0 to 6.0 for different softness

    // Red core with blue glow
    vec3 baseColor = vec3(1.0, 0.0, 0.0);
    vec3 glowColor = vec3(0.3, 0.6, 0.5);

    vec3 finalColor = baseColor + glowColor * glow;

    gl_FragColor = vec4(finalColor, 0.5);
}
