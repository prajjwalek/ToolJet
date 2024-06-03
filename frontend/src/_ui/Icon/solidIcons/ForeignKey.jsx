import React from 'react';

const ForeignKey = ({ fill = '#889096', width = '25', height = '15', className = '', viewBox = '0 0 24 15' }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect y="0.338867" width="24" height="14" rx="7" fill={fill} />
    <path
      d="M12.0006 10.8742C11.5115 11.3633 10.9222 11.6078 10.2328 11.6078C9.54337 11.6078 8.95411 11.3633 8.46503 10.8742C7.97595 10.3851 7.73141 9.79587 7.73141 9.10645C7.73141 8.41702 7.97595 7.82776 8.46503 7.33868L9.52569 6.27802C9.62587 6.17784 9.74372 6.12776 9.87925 6.12776C10.0148 6.12776 10.1326 6.17784 10.2328 6.27802C10.333 6.37819 10.3831 6.49604 10.3831 6.63157C10.3831 6.7671 10.333 6.88495 10.2328 6.98513L9.17214 8.04579C8.87751 8.34041 8.7302 8.69397 8.7302 9.10645C8.7302 9.51892 8.87751 9.87248 9.17214 10.1671C9.46677 10.4617 9.82032 10.609 10.2328 10.609C10.6453 10.609 10.9988 10.4617 11.2935 10.1671L12.3541 9.10645C12.4543 9.00627 12.5721 8.95619 12.7077 8.95619C12.8432 8.95619 12.9611 9.00627 13.0612 9.10645C13.1614 9.20662 13.2115 9.32447 13.2115 9.46C13.2115 9.59553 13.1614 9.71338 13.0612 9.81355L12.0006 10.8742ZM11.2935 8.75289C11.1933 8.85307 11.0754 8.90315 10.9399 8.90315C10.8044 8.90315 10.6865 8.85307 10.5864 8.75289C10.4862 8.65272 10.4361 8.53487 10.4361 8.39934C10.4361 8.26381 10.4862 8.14596 10.5864 8.04579L12.7077 5.92446C12.8078 5.82429 12.9257 5.7742 13.0612 5.7742C13.1968 5.7742 13.3146 5.82429 13.4148 5.92446C13.515 6.02464 13.565 6.14249 13.565 6.27802C13.565 6.41355 13.515 6.5314 13.4148 6.63157L11.2935 8.75289ZM14.4754 8.39934C14.3753 8.49951 14.2574 8.5496 14.1219 8.5496C13.9864 8.5496 13.8685 8.49951 13.7683 8.39934C13.6682 8.29917 13.6181 8.18131 13.6181 8.04579C13.6181 7.91026 13.6682 7.79241 13.7683 7.69223L14.829 6.63157C15.1236 6.33694 15.2709 5.98339 15.2709 5.57091C15.2709 5.15843 15.1236 4.80488 14.829 4.51025C14.5344 4.21562 14.1808 4.06831 13.7683 4.06831C13.3559 4.06831 13.0023 4.21562 12.7077 4.51025L11.647 5.57091C11.5468 5.67108 11.429 5.72117 11.2935 5.72117C11.1579 5.72117 11.0401 5.67108 10.9399 5.57091C10.8397 5.47074 10.7896 5.35289 10.7896 5.21736C10.7896 5.08183 10.8397 4.96398 10.9399 4.8638L12.0006 3.80314C12.4896 3.31406 13.0789 3.06952 13.7683 3.06952C14.4578 3.06952 15.047 3.31406 15.5361 3.80314C16.0252 4.29223 16.2697 4.88148 16.2697 5.57091C16.2697 6.26034 16.0252 6.8496 15.5361 7.33868L14.4754 8.39934Z"
      fill="white"
    />
  </svg>
);

export default ForeignKey;