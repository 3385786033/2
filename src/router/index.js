import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Home from '@/components/Home'
import ApplyCard from '@/components/ApplyCard'
import Record from "@/components/Record"
import Partnership from "@/components/Partnership"
import schedu from "@/components/schedu"
import Treasure from "@/components/Treasure"
import conversion from "@/components/conversion"
import Earnings from "@/components/Earnings"
import withdraw from "@/components/withdraw"
import share from "@/components/share"
import service from "@/components/service"
import equity from "@/components/equity"
Vue.use(Router)
Vue.use(MintUI)
export default new Router({
  routes: [
    {path: '/', redirect:'/Home'},
    {path:'/Home',name:'Home',component:Home},
    {path: '/ApplyCard', name: 'ApplyCard', component: ApplyCard},
    {path: '/Record', name: 'Record', component: Record},
    {path: '/Partnership', name: 'Partnership', component: Partnership},
    {path: '/schedu', name: 'schedu', component: schedu},
    {path: '/Treasure', name: 'Treasure', component: Treasure},
    {path: '/conversion', name: 'conversion', component: conversion},
    {path: '/Earnings', name: 'Earnings', component: Earnings},
    {path: '/withdraw', name: 'withdraw', component: withdraw},
    {path: '/share', name: 'share', component: share},
    {path: '/service', name: 'service', component: service},
    {path: '/equity', name: 'equity', component: equity}
  ]
})
