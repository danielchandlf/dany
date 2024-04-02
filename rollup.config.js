import fs from 'fs';
import image from '@rollup/plugin-image';
import { pascalCase } from 'pascal-case';
import styles from 'rollup-plugin-styles';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

/**
 * Create modular css file.
 *
 * @param {Object} style
 **/
const createCssFile = (style) => {
  const directories = style.name.split('/');
  const currentFilename = directories.pop();

  if (
    !currentFilename.includes('.module.scss.css') &&
    !currentFilename.includes('_')
  ) {
    return false;
  }

  const folder = `dist/${directories.join('/')}`;
  const fileName = pascalCase(currentFilename.split('.')[0]);

  try {
    fs.mkdirSync(folder, { recursive: true });
  } catch (e) {}

  fs.writeFileSync(`${folder}/${fileName}.css`, style.css);
};

/**
 * Create global css style file.
 *
 * @param {Object} styles
 **/
function createGlobalCss(styles) {
  const folder = `dist/src/components/global`;

  try {
    fs.mkdirSync(folder, { recursive: true });
  } catch (e) {}

  fs.writeFileSync(`${folder}/Global.css`, styles.css);
}

/**
 * Plugin function to import css on their respective js file.
 *
 * @param {Object} options
 *
 * @returns {Object}
 **/
function importCss(options = {}) {
  const { outputDir = 'dist' } = options;

  return {
    name: 'import-css-file',
    writeBundle(_, bundle) {
      return Object.values(bundle).map(({ fileName, code }) => {
        const extension = fileName.split('.').pop();

        if (!code) {
          return;
        }

        if (extension !== 'js') {
          return;
        }

        if (!code.includes('.scss') && !fileName.includes('Global.js')) {
          return;
        }

        const [file, _] = fileName.split('/').pop().split('.');

        const addStylesImport = `import "./${pascalCase(file)}.css"\n`;

        fs.writeFileSync(outputDir + '/' + fileName, addStylesImport + code);

        return;
      });
    }
  };
}

export default {
  input: 'src/index.ts',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      browser: true
    }),
    commonjs(),
    typescript(),
    styles({
      autoModules: true,
      mode: ['extract'],
      exclude: ['./src/components/global/**/**.*'],
      onExtract: createCssFile
    }),
    styles({
      include: ['./src/components/global/**/**.*'],
      mode: ['extract'],
      onExtract: createGlobalCss
    }),
    image(),
    importCss()
  ]
};
