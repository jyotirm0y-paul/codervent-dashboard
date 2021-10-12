import {lazy} from 'react'

// Dashboard
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard/Dashboard.js'))
const Dashboard2 = lazy(() => import('./components/Dashboard/Dashboard2/Dashboard2.js'))

// App
const Calendar = lazy(() => import('./components/App/Calendar/Calendar.js'))
const ChatBox = lazy(() => import('./components/App/ChatBox/ChatBox.js'))
const EmailBox = lazy(() => import('./components/App/EmailBox/EmailBox.js'))
const EmailRead = lazy(() => import('./components/App/EmailRead/EmailRead.js'))
const FileManager = lazy(() => import('./components/App/FileManager/FileManager.js'))
const Invoice = lazy(() => import('./components/App/Invoice/Invoice.js'))
const ToDo = lazy(() => import('./components/App/ToDo/ToDo.js'))

// Charts
const ChartJs = lazy(() => import('./components/Charts/ChartJs/ChartJs.js'))
const ChartsApexChart = lazy(() => import('./components/Charts/ChartsApexChart/ChartsApexChart.js'))
const HighCharts = lazy(() => import('./components/Charts/HighCharts/HighCharts.js'))

// Component
const Accordions = lazy(() => import('./components/Component/Accordions/Accordions.js'))
const Alerts = lazy(() => import('./components/Component/Alerts/Alerts.js'))
const AvatarsChips = lazy(() => import('./components/Component/AvatarsChips/AvatarsChips.js'))
const Badges = lazy(() => import('./components/Component/Badges/Badges.js'))
const Buttons = lazy(() => import('./components/Component/Buttons/Buttons.js'))
const Cards = lazy(() => import('./components/Component/Cards/Cards.js'))
const Carousels = lazy(() => import('./components/Component/Carousels/Carousels.js'))
const ListGroups = lazy(() => import('./components/Component/ListGroups/ListGroups.js'))
const MediaObject = lazy(() => import('./components/Component/MediaObject/MediaObject.js'))
const Modals = lazy(() => import('./components/Component/Modals/Modals.js'))
const NavBar = lazy(() => import('./components/Component/NavBar/NavBar.js'))
const NavTabs = lazy(() => import('./components/Component/NavTabs/NavTabs.js'))
const Notifications = lazy(() => import('./components/Component/Notifications/Notifications.js'))
const Pagination = lazy(() => import('./components/Component/Pagination/Pagination.js'))
const PopoversTooltips = lazy(() => import('./components/Component/PopoversTooltips/PopoversTooltips.js'))
const ProgressBars = lazy(() => import('./components/Component/ProgressBars/ProgressBars.js'))
const Spinners = lazy(() => import('./components/Component/Spinners/Spinners.js'))
const Typography = lazy(() => import('./components/Component/Typography/Typography.js'))


// E-commerce
const AddNewProduct2 = lazy(() => import('./components/E-commerce/AddNewProduct2/AddNewProduct2.js'))
const AddNewProduct = lazy(() => import('./components/E-commerce/AddNewProduct/AddNewProduct.js'))
const Orders = lazy(() => import('./components/E-commerce/Orders/Orders.js'))
const ProductsCategories = lazy(() => import('./components/E-commerce/ProductsCategories/ProductsCategories.js'))
const OrdersDetail = lazy(() => import('./components/E-commerce/OrdersDetail/OrdersDetail.js'))
const Transactions = lazy(() => import('./components/E-commerce/Transactions/Transactions.js'))
const ProductsGrid = lazy(() => import('./components/E-commerce/ProductsGrid/ProductsGrid.js'))
const ProductsList = lazy(() => import('./components/E-commerce/ProductsList/ProductsList.js'))

// Form
const DateTimePicks = lazy(() => import('./components/Form/DateTimePicks/DateTimePicks.js'))
const Elements = lazy(() => import('./components/Form/Elements/Elements.js'))
const FileUpload = lazy(() => import('./components/Form/FileUpload/FileUpload.js'))
const InputGroup = lazy(() => import('./components/Form/InputGroup/InputGroup.js'))
const Layouts = lazy(() => import('./components/Form/Layouts/Layouts.js'))
const Select2 = lazy(() => import('./components/Form/Select2/Select2.js'))
const Validations = lazy(() => import('./components/Form/Validations/Validations.js'))

// Icons
const Boxicons = lazy(() => import('./components/Icons/Boxicons/Boxicons.js'))
const FeaterIcons = lazy(() => import('./components/Icons/FeaterIcons/FeaterIcons.js'))
const LineIcons = lazy(() => import('./components/Icons/LineIcons/LineIcons.js'))

// Map
const GoogleMaps = lazy(() => import('./components/Map/GoogleMaps/GoogleMaps.js'))
const VectorMaps = lazy(() => import('./components/Map/VectorMaps/VectorMaps.js'))

// Pages
const BlankPage = lazy(() => import('./components/Pages/BlankPage/BlankPage.js'))
const Errors404Error = lazy(() => import('./components/Pages/Errors404Error/Errors404Error.js'))
const Errors500Error = lazy(() => import('./components/Pages/Errors500Error/Errors500Error.js'))
const ErrorsComingSoon = lazy(() => import('./components/Pages/ErrorsComingSoon/ErrorsComingSoon.js'))
const Faq = lazy(() => import('./components/Pages/Faq/Faq.js'))
const PricingTables = lazy(() => import('./components/Pages/PricingTables/PricingTables.js'))
const Timeline = lazy(() => import('./components/Pages/Timeline/Timeline.js'))
const UserProfile = lazy(() => import('./components/Pages/UserProfile/UserProfile.js'))

// Table
const AdvanceTables = lazy(() => import('./components/Table/AdvanceTables/AdvanceTables.js'))
const BasicTable = lazy(() => import('./components/Table/BasicTable/BasicTable.js'))
const DataTable = lazy(() => import('./components/Table/DataTable/DataTable.js'))

// Widgets
const DataWidgets = lazy(() => import('./components/Widgets/DataWidgets/DataWidgets.js'))
const StaticWidgets = lazy(() => import('./components/Widgets/StaticWidgets/StaticWidgets.js'))


const routes =[
  { path: '/', name: 'Home', exact: true},
  { path: '/dashboard', name: 'Dashboard', title:'Application', component: Dashboard, exact:true, },
  { path: '/dashboard2', name: 'Dashboard2', title:'Applications', component: Dashboard2, exact:true, },
  { path: '/app', name: 'EmailBox', title:'Applications', component: EmailBox, exact:true},
  { path: '/app/email', name: 'EmailBox', title:'Applications', component: EmailBox },
  { path: '/app/emailRead', name: 'EmailRead', title:'Applications', component: EmailRead },
  { path: '/app/calendar', name: 'Calendar', title:'Applications', component: Calendar },
  { path: '/app/chatBox', name: 'ChatBox', title:'Applications', component: ChatBox },
  { path: '/app/fileManager', name: 'FileManager', title:'Applications', component: FileManager },
  { path: '/app/invoice', name: 'Invoice', title:'Applications', component: Invoice },
  { path: '/app/toDo', name: 'To Do List', title:'Applications', component: ToDo },
  { path: '/chart', name: 'ChartJs', title:'Charts', component: ChartJs, exact:true},
  { path: '/Chart/chartJs', name: 'ChartJs', title:'Charts', component: ChartJs },
  { path: '/chart/chartsApexChart', name: 'Charts Apex Chart', title:'Charts', component: ChartsApexChart },
  { path: '/chart/highCharts', name: 'High Charts', title:'Charts', component: HighCharts },
  { path: '/component', name: 'Alerts', title:'Component', component: Alerts, exact:true},
  { path: '/component/alerts', name: 'Alerts', title:'Component', component: Alerts },
  { path: '/component/accordions', name: 'Accordions', title:'Component', component: Accordions },
  { path: '/component/avatarsChips', name: 'Avatars Chips', title:'Component', component: AvatarsChips },
  { path: '/component/badges', name: 'Badges', title:'Component', component: Badges },
  { path: '/component/buttons', name: 'Buttons', title:'Component', component: Buttons },
  { path: '/component/cards', name: 'Cards', title:'Component', component: Cards },
  { path: '/component/carousels', name: 'Carousels', title:'Component', component: Carousels },
  { path: '/component/listGroups', name: 'List Groups', title:'Component', component: ListGroups },
  { path: '/component/mediaObject', name: 'Media Object', title:'Component', component: MediaObject },
  { path: '/component/modals', name: 'Modals', title:'Component', component: Modals },
  { path: '/component/navBar', name: 'Nav Bar', title:'Component', component: NavBar },
  { path: '/component/navTabs', name: 'Nav & Tabs', title:'Component', component: NavTabs },
  { path: '/component/notifications', name: 'Notifications', title:'Component', component: Notifications },
  { path: '/component/pagination', name: 'Pagination', title:'Component', component: Pagination },
  { path: '/component/popoversTooltips', name: 'Popovers Tooltips', title:'Component', component: PopoversTooltips },
  { path: '/component/progressBars', name: 'Progress Bars', title:'Component', component: ProgressBars },
  { path: '/component/spinners', name: 'Spinners', title:'Component', component: Spinners },
  { path: '/component/typography', name: 'Typography', title:'Component', component: Typography },
  { path: '/e-commerce', name: 'Add New Product2', title:'eCommerce', component: AddNewProduct2, exact:true},
  { path: '/e-commerce/addNewProduct2', name: 'Add New Product', title:'eCommerce', component: AddNewProduct2, exact:true},
  { path: '/e-commerce/addNewProduct', name: 'Add New Product', title:'eCommerce', component: AddNewProduct },
  { path: '/e-commerce/orders', name: 'Orders', title:'eCommerce', component: Orders },
  { path: '/e-commerce/productsCategories', name: 'Categories', title:'eCommerce', component: ProductsCategories },
  { path: '/e-commerce/ordersDetail', name: 'Orders Detail', title:'eCommerce', component: OrdersDetail },
  { path: '/e-commerce/transactions', name: 'Transactions', title:'eCommerce', component: Transactions },
  { path: '/e-commerce/productsGrid', name: 'Products Grid', title:'eCommerce', component: ProductsGrid },
  { path: '/e-commerce/productsList', name: 'Products List', title:'eCommerce', component: ProductsList },
  { path: '/form', name: 'Elements', title:'Form', component: Elements, exact:true},
  { path: '/form/elements', name: 'Form Elements', title:'Form', component: Elements },
  { path: '/form/dateTimePicks', name: 'Date Time Picks', title:'Form', component: DateTimePicks },
  { path: '/form/fileUpload', name: 'File Upload', title:'Form', component: FileUpload },
  { path: '/form/inputGroup', name: 'Input Group', title:'Form', component: InputGroup },
  { path: '/form/layouts', name: 'Layouts', title:'Form', component: Layouts },
  { path: '/form/select2', name: 'Select2', title:'Form', component: Select2 },
  { path: '/form/validations', name: 'Validations', title:'Form', component: Validations },
  { path: '/icon', name: 'Boxicons', title:'', component: Boxicons, exact:true},
  { path: '/icon/boxicons', name: 'Boxicons', title:'', component: Boxicons },
  { path: '/icon/featerIcons', name: 'Feater Icons', title:'Icons', component: FeaterIcons },
  { path: '/icon/lineIcons', name: 'Line Icons', title:'Icons', component: LineIcons },
  { path: '/map', name: 'Google Maps', title:'', component: GoogleMaps, exact:true},
  { path: '/map/googleMaps', name: 'Google Maps', title:'Maps', component: GoogleMaps },
  { path: '/map/vectorMaps', name: 'Vector Maps', title:'Maps', component: VectorMaps },
  { path: '/pages', name: 'Blank Page', title:'Errors', component: BlankPage, exact:true},
  { path: '/errors/blankPage', name: 'Blank Page', title:'Errors', component: BlankPage },
  { path: '/errors/404Error', name: '404 Error', title:'Errors', component: Errors404Error },
  { path: '/errors/500Error', name: '500 Error', title:'Errors', component: Errors500Error },
  { path: '/errors/comingSoon', name: 'Errors Coming Soon', title:'Errors', component: ErrorsComingSoon },
  { path: '/faq', name: 'Faq', title:'Faq', component: Faq, exact: true },
  { path: '/pricingTables', name: 'Pricing Tables', title:'Pricing Tables', component: PricingTables, exact: true },
  { path: '/timeline', name: 'Time line', title: 'Pages', component: Timeline, exact: true },
  { path: '/userProfile', name: 'User Profile', title:'', component: UserProfile, exact: true },
  { path: '/table', name: 'Basic Table', title:'Table', component: BasicTable, exact:true},
  { path: '/table/basicTable', name: 'Basic Table', title:'Table', component: BasicTable },
  { path: '/table/advanceTables', name: 'Advance Tables', title:'Table', component: AdvanceTables },
  { path: '/table/dataTable', name: 'Data Table', title:'Table', component: DataTable },
  { path: '/widgets', name: 'Data Widgets', title:'Widgets', component: DataWidgets, exact:true},
  { path: '/widgets/dataWidgets', name: 'Data Widgets', title:'Widgets', component: DataWidgets },
  { path: '/widgets/staticWidgets', name: 'Static Widgets', title:'Widgets', component: StaticWidgets },
]

export default routes;