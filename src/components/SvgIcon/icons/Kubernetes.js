import React from 'react'
import createIcon from '../createSvgIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path d="M32.26 41.53C31.71 42.2 30.88 42.6 30.01 42.6L13.3 42.61C12.43 42.61 11.59 42.21 11.04 41.53L0.63 28.57C0.08 27.89 -0.12 27 0.07 26.15L3.79 9.99C3.98 9.14 4.55 8.44 5.35 8.05L20.39 0.86C21.18 0.48 22.1 0.48 22.9 0.86L37.95 8.05C38.74 8.43 39.32 9.14 39.51 9.98L43.23 26.15C43.43 26.99 43.22 27.88 42.68 28.57L32.26 41.53ZM36.48 24.79C36.16 24.73 35.91 24.74 35.61 24.72C34.98 24.65 34.46 24.6 34 24.45C33.8 24.38 33.67 24.15 33.61 24.05L33.24 23.94C33.44 22.54 33.38 21.12 33.05 19.73C32.73 18.34 32.16 17.01 31.36 15.83L31.68 15.54C31.69 15.38 31.68 15.21 31.85 15.03C32.2 14.7 32.65 14.42 33.18 14.09C33.45 13.94 33.67 13.84 33.94 13.65L34.14 13.49C34.57 13.15 34.67 12.55 34.36 12.16C34.05 11.77 33.45 11.73 33.02 12.07L32.82 12.23C32.58 12.44 32.43 12.65 32.23 12.87C31.78 13.32 31.41 13.7 31.01 13.96C30.84 14.07 30.58 14.03 30.47 14.03L30.12 14.27C28.15 12.2 25.49 10.91 22.64 10.65L22.62 10.25C22.5 10.14 22.36 10.03 22.32 9.8C22.28 9.31 22.35 8.79 22.43 8.16C22.47 7.87 22.53 7.63 22.55 7.3L22.55 7.05C22.55 6.5 22.14 6.05 21.65 6.05C21.15 6.05 20.74 6.5 20.74 7.05L20.74 7.3C20.76 7.62 20.82 7.87 20.86 8.16C20.93 8.79 21 9.32 20.97 9.8C20.91 9.98 20.82 10.14 20.67 10.26L20.65 10.64C17.78 10.88 15.1 12.16 13.14 14.26L12.81 14.03C12.65 14.05 12.49 14.09 12.28 13.98C11.88 13.7 11.5 13.32 11.06 12.88C10.86 12.66 10.71 12.45 10.47 12.25L10.27 12.09C10.08 11.95 9.87 11.86 9.64 11.85C9.36 11.84 9.1 11.96 8.92 12.17C8.61 12.57 8.71 13.16 9.14 13.5L9.16 13.51L9.35 13.65C9.61 13.85 9.84 13.94 10.1 14.09C10.63 14.43 11.08 14.71 11.44 15.04C11.57 15.19 11.6 15.45 11.61 15.57L11.9 15.82C10.31 18.22 9.65 21.11 10.06 23.96L9.68 24.07C9.58 24.2 9.45 24.4 9.3 24.46C8.83 24.61 8.31 24.66 7.68 24.73C7.38 24.75 7.13 24.74 6.81 24.79L6.57 24.85L6.56 24.86L6.55 24.86C6.01 24.99 5.67 25.48 5.79 25.96C5.89 26.44 6.41 26.74 6.94 26.61L6.96 26.61L6.98 26.6L7.21 26.55C7.53 26.47 7.75 26.35 8.03 26.24C8.62 26.03 9.12 25.84 9.6 25.78C9.8 25.76 10.01 25.9 10.12 25.96L10.51 25.89C11.39 28.62 13.25 30.93 15.71 32.38L15.55 32.78C15.61 32.93 15.67 33.13 15.62 33.29C15.45 33.74 15.15 34.23 14.81 34.75C14.64 35 14.47 35.19 14.32 35.47L14.21 35.71C13.97 36.21 14.14 36.78 14.59 37C15.04 37.21 15.6 36.98 15.83 36.48L15.94 36.25C16.07 35.96 16.11 35.71 16.21 35.43C16.44 34.83 16.57 34.2 16.91 33.8C17 33.7 17.15 33.65 17.3 33.62L17.5 33.24C20.17 34.28 23.13 34.28 25.82 33.26L26.01 33.61C26.16 33.66 26.33 33.68 26.47 33.89C26.71 34.3 26.88 34.8 27.08 35.4C27.18 35.68 27.22 35.93 27.35 36.22L27.46 36.46C27.69 36.96 28.25 37.19 28.7 36.97C29.15 36.76 29.32 36.18 29.09 35.68L28.97 35.44C28.82 35.17 28.65 34.97 28.49 34.72C28.14 34.19 27.86 33.75 27.68 33.3C27.62 33.06 27.69 32.92 27.75 32.76L27.6 32.4C30.08 30.94 31.92 28.61 32.79 25.86L33.18 25.93C33.32 25.84 33.44 25.73 33.68 25.73C34.16 25.8 34.66 25.99 35.26 26.2C35.53 26.31 35.75 26.43 36.07 26.51L36.3 26.56L36.32 26.57L36.34 26.57C36.87 26.69 37.4 26.39 37.5 25.91C37.62 25.47 37.28 24.98 36.74 24.85L36.48 24.79ZM18.97 18.42L15.09 15.68C16.57 14.22 18.47 13.3 20.53 13.06L20.26 17.79L20.23 17.8C20.21 18.44 19.49 18.79 18.97 18.42ZM20.01 21.98L20.92 20.85L22.37 20.85L23.28 21.98L22.96 23.38L21.65 24.01L20.35 23.38L20.01 21.98ZM23.04 17.79L22.78 13.07C24.82 13.32 26.71 14.24 28.18 15.68L24.33 18.4L24.32 18.39C23.8 18.77 23.08 18.43 23.06 17.79L23.04 17.79ZM18.42 25.84L16.62 30.2C14.9 29.09 13.58 27.44 12.88 25.51L17.53 24.73L17.54 24.74C18.15 24.62 18.66 25.24 18.41 25.84L18.42 25.84ZM16.91 21.99L12.37 23.3C12.15 21.26 12.61 19.19 13.69 17.43L17.23 20.59L17.22 20.62C17.7 21.03 17.52 21.82 16.91 21.99ZM29.59 17.44C30.13 18.32 30.53 19.28 30.76 20.29C30.98 21.28 31.05 22.3 30.95 23.31L26.39 21.99L26.38 21.98C25.77 21.81 25.6 21.02 26.07 20.61L26.07 20.59L29.59 17.44ZM22.36 27.05L24.66 31.19C22.71 31.86 20.6 31.86 18.65 31.19L20.94 27.05C21.08 26.8 21.34 26.65 21.62 26.63C21.92 26.62 22.2 26.79 22.35 27.05L22.36 27.05ZM25.76 24.71L30.46 25.5C29.77 27.45 28.45 29.12 26.7 30.22L24.89 25.83L24.89 25.82C24.72 25.43 24.89 24.97 25.27 24.79C25.43 24.71 25.6 24.68 25.76 24.72L25.76 24.71Z"/>
    </g>

    /* eslint-enable */
);
const Kubernetes = createIcon(path, {
    width: 45,
    height: 44,
    viewBox: '0 0 45 44'
})

export default Kubernetes