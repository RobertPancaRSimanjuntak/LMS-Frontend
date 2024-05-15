import { createRouter, createWebHistory } from "vue-router";
// import HomeWeb from '@/Page/SignOut';
import dashboard from '@/Page/Master/dashboard';
import MyClass from '@/Page/MyClass';
import HomePage from '@/Page/HomePage';
import SettingPage from '@/Page/SettingPage';
import SignOut from '@/Page/SignOut';
import LoginPage from '@/components/Registrasi/LoginPage';
import RegistrasiPage from '@/components/Registrasi/RegistrasiPage';
import VerifikasiCard from '@/components/Registrasi/VerifikasiCard';


const routes = [
  // {
  //   name:'HomeWeb',
  // path:'/',
  // component: HomeWeb
    
  // },
  {
    name: 'dashboard',
    path: '/',
    component: dashboard,
    meta: {
      title: 'Dashboard'
    },
    redirect:'/',
    children:
      [
          {
          name: 'HomePage',
          path:'/',
          component: HomePage
        },
        {
          name: 'MyClass',
          path: '/myclass',
          component: MyClass,
          meta:{
            title:'My Class'
          }
        },
        {
          name: 'SettingPage',
          path: '/setting',
          component: SettingPage,
          meta:{
            title:'Setting'
          }
        },

      ]
  },
  {
    name: 'SignOut',
    path: '/menu',
    component: SignOut,
    children:
      [


      ]
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage
  },
  {
    name: 'RegistrasiPage',
    path: '/registrasi',
    component: RegistrasiPage,
    

    

  },
  {
    name: 'VerifikasiCard',
    path: '/verifikasi',
    component: VerifikasiCard
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
