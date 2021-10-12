import React from 'react';
import AppContent from '../components/AppContent.js';
import { Header, Sidebar, Switcher } from '../components/shared/index';

const DefaultLayout = () => {
  return (
    <div class="wrapper">
      <Header />
      <Sidebar />
      <main class="page-content">
        <AppContent></AppContent>
      </main>
      <Switcher />
    </div>
  );
};

export default DefaultLayout;