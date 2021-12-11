// import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// import Main from './pages/Main';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';

// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('Home');

//     const renderPage = () => {
//         if (currentPage === 'Home') {
//             return <Main />;
//         }
//         if (currentPage === 'About') {
//             return <About />;
//         }
//         if (currentPage === 'Resume') {
//             return <Resume />;
//         }
//         if (currentPage === 'Contact') {
//             return <Contact />;
//         }

//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div>

//             <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

//             {renderPage()}
//         </div>
//     );
// }
