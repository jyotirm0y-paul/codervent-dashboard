


const SidebarData = [
  {
    name: null, mainName: [
      {
        name: 'Dashboard', icon: 'bi bi-house-fill', arrow: 'has-arrow', subName: [
          { name: 'Blue Dashboard', path: '/dashboard' },
          { name: 'Color Dashboard', path: '/dashboard2' }]
      },

      {
        name: 'Application', icon: 'bi bi-grid-fill', arrow: 'has-arrow', subName: [
          { name: 'Email', path: '/app/email' },
          { name: 'Chat Box', path: '/app/chatBox' },
          { name: 'File Manager', path: '/app/fileManager' },
          { name: 'Todo List', path: '/app/toDo' },
          { name: 'Invoice', path: '/app/invoice' },
          { name: 'Calendar', path: '/app/calendar' }]
      },
      {
         name: 'Widgets', icon: 'bi bi-droplet-fill', arrow: 'has-arrow', subName: [
           { name: 'Static Widgets', path: '/widgets/staticWidgets' },
           { name: 'Data Widgets', path: '/widgets/dataWidgets' }]
      },
      {
         name: 'eCommerce', icon: 'bi bi-basket2-fill', arrow: 'has-arrow', subName: [
           { name: 'Products List', path: '/e-commerce/productsList' },
           { name: 'Products Grid', path: '/e-commerce/productsGrid' },
           { name: 'Categories', path: '/e-commerce/productsCategories' },
           { name: 'Orders', path: '/e-commerce/orders' },
           { name: 'Order details', path: '/e-commerce/ordersDetail' },
           { name: 'Add New Product', path: '/e-commerce/addNewProduct' },
           { name: 'Add New Product 2', path: '/e-commerce/addNewProduct2' },
           { name: 'Transactions', path: '/e-commerce/transactions' }]
       },
       {
         name: 'Components', icon: 'bi bi-award-fill', arrow: 'has-arrow', subName: [
           { name: 'Alerts', path: '/component/alerts' },
           { name: 'Accordions', path: '/component/accordions' },
           { name: 'Badges', path: '/component/badges' },
           { name: 'Buttons', path: '/component/buttons' },
           { name: 'Cards', path: '/component/cards' },
           { name: 'Carousels', path: '/component/carousels' },
           { name: 'List Groups', path: '/component/listGroups' },
           { name: 'Media Object', path: '/component/mediaObject' },
           { name: 'Modals', path: '/component/modals' },
           { name: 'Nav & Tabs', path: '/component/navTabs' },
           { name: 'Navbar', path: '/component/navBar' },
           { name: 'Pagination', path: '/component/pagination' },
           { name: 'Popovers & Tooltips', path: '/component/popoversTooltips' },
           { name: 'Progress', path: '/component/progress' },
           { name: 'Spinners', path: '/component/spinners' },
           { name: 'Notifications', path: '/component/notifications' },
           { name: 'Avatars & Chips', path: '/component/avatarsChips' }]
       },
 
       {
         name: 'Icons', icon: 'bi bi-cloud-arrow-down-fill', arrow: 'has-arrow', subName: [
           { name: 'Line Icons', path: '/icon/lineIcons' },
           { name: 'Boxicons', path: '/icon/boxicons' },
           { name: 'Feater Icons', path: '/icon/featerIcons' }]
       },
       {
         name: 'Forms', icon: 'bi bi-file-earmark-break-fill', arrow: 'has-arrow', subName: [
           { name: 'Form Elements', path: '/form/elements' },
           { name: 'Input Group', path: '/form/inputGroup' },
           { name: 'Form Layouts', path: '/form/layouts' },
           { name: 'Form Validation', path: '/form/validations' },
           { name: 'Form Wizard', path: '/form/fileUpload' },
           { name: 'Date Picks', path: '/form/dateTimePicks' },
           { name: 'Select2', path: '/form/select2' }]
       },
 
       {
         name: 'Tables', icon: 'bi bi-file-earmark-spreadsheet-fill', arrow: 'has-arrow', subName: [
           { name: 'Basic Table', path: '/table/basicTable' },
           { name: 'Advance Tables', path: '/table/advanceTables' },
           { name: 'Data Table', path: '/table/dataTable' }]
       },
       {
         name: 'Authentication', icon: 'bi bi-lock-fill', arrow: 'has-arrow', subName: [
           { name: 'Sign In', path: '/signIn' },
           { name: 'Sign Up', path: '/signUp' },
           { name: 'Sign In With HeaderAnd Footer', path: '/signInWithHAndF' },
           { name: 'Sign Up With HeaderAnd Footer', path: '/signUpWithHAndF' },
           { name: 'Forgot Password', path: '/forgotPassword' },
           { name: 'Reset Password', path: '/resetPassword' }]
       },
       
      {
         name: 'Errors', icon: 'bi bi-exclamation-triangle-fill', arrow: 'has-arrow', subName: [
           { name: '404 Error', path: '/errors/404Error' },
           { name: '505 Error', path: '/errors/500Error' },
           { name: 'Coming Soon', path: '/errors/comingSoon' },
           { name: 'Blank Page', path: '/errors/blankPage' }]
       },
       {
         name: 'Charts', icon: 'bi bi-bar-chart-line-fill', arrow: 'has-arrow', subName: [
           { name: 'Apex', path: '/chart/chartsApexChart' },
           { name: 'chartJs', path: '/chart/chartJs' },
           { name: 'High Charts', path: '/chart/highCharts' }]
       },
 
       {
         name: 'Maps', icon: 'bi bi-pin-map-fill', arrow: 'has-arrow', subName: [
           { name: 'Google Maps', path: '/map/googleMaps' },
           { name: 'Vector Maps', path: '/map/vectorMaps' }]
       },

       {
         name: 'Menu Levels', icon: 'bi bi-music-note-list', arrow: 'has-arrow', subName: [
           {
             name: 'Level One', subSubName: [
               {
                 name: 'Level Two', subSubSubName: [
                   { name: 'Level Three' }]
               }]
           }]
       },

   ]
  },

//   {
//     name: 'UI ELEMENTS', mainName: [

//       ]
//   },

  {
    name: 'FORMS & TABLES', mainName: [
      ]
  },

  {
    name: null, mainName: [

      { name: 'User Profile', icon: 'bi bi-person-lines-fill', path: '/userProfile', },
      { name: 'Timeline', icon: 'bi bi-collection-play-fill', path: '/timeline' },

      { name: 'FAQ', icon: 'bi bi-question-lg', path: '/faq', },
      { name: 'Pricing tables', icon: 'bi bi-tags-fill', path: '/pricingTables', }]
  },

  {
    name: 'CHARTS & MAPS', mainName: [
     ]
  },

  {
    name: 'OTHERS', mainName: [
      

      { name: 'Documentation', icon: 'bi bi-file-code-fill', path: '/https://codervent.com/skodash/documentation/index.html' },
      { name: 'Support', icon: 'bi bi-telephone-fill', path: '/https://themeforest.net/user/codervent' }]
  }]


export default SidebarData;