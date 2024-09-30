module.exports = {
  extends: [
    'airbnb', // Reglas de Airbnb
    'airbnb/hooks', // Reglas adicionales para hooks de React
    'next/core-web-vitals', // Reglas de Next.js para rendimiento
    'plugin:@typescript-eslint/recommended', // Reglas para TypeScript
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser', // Usar el parser de TypeScript
  plugins: ['@typescript-eslint', 'prettier'], // Habilitar plugin de TypeScript
  rules: {
    // Añadir o sobrescribir reglas aquí
    'react/react-in-jsx-scope': 'off', // Next.js no necesita importar React
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Desactivar si no quieres definir el tipo en todas las funciones
    'import/prefer-default-export': 'off', // Desactivar si no quieres usar exportaciones por defecto
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Detectar la versión de React automáticamente
    },
  },
};
