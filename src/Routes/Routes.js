import { createBrowserRouter } from 'react-router-dom';

// Home Layouts
import HomeLayout from '../Layouts/HomeLayout';
import About from '../Pages/About';
import Blog01 from '../Pages/Blogs/Blog01';
import Blog02 from '../Pages/Blogs/Blog02';
import ContactPage from '../Pages/ContactPage';
import FAQ from '../Pages/FAQ';
import Home01 from '../Pages/Homes/Home01';
import ProjectDetails from '../Pages/Projects/ProjectDetails';
import Projects01 from '../Pages/Projects/Projects01';
import Projects02 from '../Pages/Projects/Projects02';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Services01 from '../Pages/Services/Services01';
import Services02 from '../Pages/Services/Services02';
import TeamPage from '../Pages/TeamPage';

// Home Layouts02
import HomeLayout02 from '../Layouts/HomeLayout02';
import Home02 from '../Pages/Homes/Home02';

// Shop Layouts
import ShopLayout from '../Layouts/ShopLayout';
import ProductDetails from '../Pages/Shops/ProductDetails';
import Shop01 from '../Pages/Shops/Shop01';
import Shop02 from '../Pages/Shops/Shop02';
import Shop03 from '../Pages/Shops/Shop03';
import ShopCart from '../Pages/Shops/ShopCart';
import ShopCheckout from '../Pages/Shops/ShopCheckout';

// Shared Layouts
import BlogDetails from '../Pages/Blogs/BlogDetails';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: '/',
                element: <Home01/>
            },
            {
                path: '/project',
                element: <Projects01/>
            },
            {
                path: '/project-2',
                element: <Projects02/>
            },
            {
                path: '/project-details',
                element: <ProjectDetails/>
            },
            {
                path: '/services',
                element: <Services01/>
            },
            {
                path: '/services-2',
                element: <Services02/>
            },
            {
                path: '/service-details',
                element: <ServiceDetails/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/team',
                element: <TeamPage/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/blog-1',
                element: <Blog01/>
            },
            {
                path: '/blog-2',
                element: <Blog02/>
            },
            {
                path: '/blog-details',
                element: <BlogDetails/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    },
    {
        path: "/",
        element: <HomeLayout02/>,
        children: [
            {
                path: '/home-2',
                element: <Home02/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    },
    {
        path: "/",
        element: <ShopLayout/>,
        children: [
            {
                path: '/shop-1',
                element: <Shop01/>
            },
            {
                path: '/shop-2',
                element: <Shop02/>
            },
            {
                path: '/shop-3',
                element: <Shop03/>
            },
            // {
            //     path: '/shop-4',
            //     element: <Shop04/>
            // },
            {
                path: '/product',
                element: <ProductDetails/>
            },
            {
                path: '/cart',
                element: <ShopCart/>
            },
            {
                path: '/checkout',
                element: <ShopCheckout/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    },
])

