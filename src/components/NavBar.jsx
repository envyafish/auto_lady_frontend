import {NavLink} from "react-router-dom";
import {themeChange} from "theme-change";
import {useEffect, useState} from 'react'
import API from "../utils/Api";
import {VERSION} from "lodash";

const themes = {
    light: "浅色",
    dark: "深色",
    cupcake: "纸杯蛋糕",
    bumblebee: "大黄蜂",
    emerald: "翡翠",
    corporate: "商务",
    synthwave: "合成波",
    retro: "复古",
    cyberpunk: "赛博朋克",
    valentine: "情人节",
    halloween: "万圣节",
    garden: "花园",
    forest: "森林",
    aqua: "水色",
    lofi: "低保真",
    pastel: "粉彩",
    fantasy: "幻想",
    wireframe: "线框",
    black: "黑色",
    luxury: "奢华",
    dracula: "德古拉",
    cmyk: "四色印刷",
    autumn: "秋天",
    business: "商业",
    acid: "酸性",
    lemonade: "柠檬水",
    night: "夜晚",
    coffee: "咖啡",
    winter: "冬季",
    dim: "昏暗",
    nord: "北欧",
    sunset: "日落"
};
const themeEntries = Object.entries(themes);


const Navbar = () => {

    const [version, setVersion] = useState()
    const [latestVersion, setLatestVersion] = useState()
    const [toastVisible, setToastVisible] = useState(false)

    useEffect(() => {
        themeChange(false)
        fetchVersion()
    }, [])

    const fetchVersion = () => {
        API.get('/version').then(res => {
            if (res.success) {
                setVersion(res.data.version)
                setLatestVersion(res.data.latest_version)
            }
        }).catch(e => {
            alert.error("服务器异常");
        })
    }

    const logout = () => {
        localStorage.removeItem("token")
        location.href = '/login'
    };
    return (
        <div className="navbar bg-base-100">
            {toastVisible &&
                <div className="toast toast-center toast-middle z-50">
                    <div className="alert alert-info">
                        <span>有新版本可更新，最新版本{latestVersion}</span>
                        <div>
                            <button className="btn btn-sm btn-primary" onClick={() => setToastVisible(false)}>关闭
                            </button>
                        </div>
                    </div>
                </div>
            }

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to="/app/subscribe">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"/>
                                </svg>
                                订阅
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/app/hot">
                                <svg className="h-5 w-5" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M493.789998 1023.53089C254.799718 1023.53089 85.536259 856.015932 85.536259 625.384341c0-122.523033 72.584129-254.513561 75.782607-259.92965a32.11272 32.11272 0 0 1 31.728902-16.162976c12.879205 1.705855 23.156981 11.088057 26.69663 23.540799 0.255878 0.682342 19.87321 74.887033 45.631621 115.955491 17.271782 27.720143 34.970027 47.16689 54.80059 60.81373-13.433608-58.724057-23.626091-147.129991-6.951359-237.668243C358.771578 63.305131 552.514055 3.642853 560.787452 1.21201a31.814195 31.814195 0 0 1 39.831713 36.93176c-0.213232 1.705855-32.325952 175.95894 35.481784 324.410968 6.183724 13.518901 14.712999 29.084827 23.967262 44.906632a422.199104 422.199104 0 0 1 13.135083-66.698929c24.990775-88.022116 89.344154-118.130456 92.116168-119.281909a31.64361 31.64361 0 0 1 32.496537 4.008759c9.382202 7.249884 13.732132 19.276161 11.64246 31.046561-0.341171 2.217611-9.382202 62.178413 41.196398 147.12999 45.674267 76.678181 58.681411 126.403853 58.68141 221.931731C909.123036 856.143872 734.614073 1023.53089 493.789998 1023.53089zM187.247861 475.269104a407.699336 407.699336 0 0 0-28.10396 147.129991c0 187.814632 138.43013 324.069797 334.774036 324.069797 197.879176 0 341.469517-136.255165 341.469518-324.112443 0-81.198696-9.936605-118.684859-48.275696-183.294116-25.587824-43.072838-38.381737-81.795746-44.181643-112.714367a144.272684 144.272684 0 0 0-15.864451 36.803821c-18.721758 66.10188-13.902718 143.718281-13.902718 144.571208a31.259792 31.259792 0 0 1-20.47026 31.259792 30.278926 30.278926 0 0 1-35.225905-11.301289c-2.430843-3.241124-56.975556-81.454575-81.028111-134.336078-49.896258-109.217364-49.213916-227.475759-44.181643-295.539373-50.5786 29.767169-128.408232 96.423452-153.526947 231.868336-24.308433 131.990528 22.943749 269.951548 23.412859 271.23094a31.430378 31.430378 0 0 1-5.586675 31.728902 30.278926 30.278926 0 0 1-30.278925 9.723373c-3.752881-0.93822-96.551391-23.668738-152.460788-112.970245a376.951301 376.951301 0 0 1-26.568691-54.118249z"
                                        fill="currentColor"></path>
                                </svg>
                                热门
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/app/actor">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                                </svg>
                                演员
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/app/search">
                                <svg stroke="currentColor" className="h-5 w-5" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                                    <path
                                        d="M874.666667 814.933333l-209.066667-209.066666C704 554.666667 725.333333 494.933333 725.333333 426.666667c0-166.4-132.266667-298.666667-298.666666-298.666667s-298.666667 132.266667-298.666667 298.666667 132.266667 298.666667 298.666667 298.666666c68.266667 0 128-21.333333 179.2-59.733333l209.066666 209.066667c17.066667 17.066667 42.666667 17.066667 59.733334 0s17.066667-42.666667 0-59.733334zM426.666667 640c-119.466667 0-213.333333-93.866667-213.333334-213.333333s93.866667-213.333333 213.333334-213.333334 213.333333 93.866667 213.333333 213.333334-93.866667 213.333333-213.333333 213.333333z"
                                        fill="currentColor"></path>
                                </svg>
                                搜索
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden lg:flex">AutoLady</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/app/subscribe">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"/>
                            </svg>
                            订阅
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/app/hot">
                            <svg className="h-5 w-5" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M493.789998 1023.53089C254.799718 1023.53089 85.536259 856.015932 85.536259 625.384341c0-122.523033 72.584129-254.513561 75.782607-259.92965a32.11272 32.11272 0 0 1 31.728902-16.162976c12.879205 1.705855 23.156981 11.088057 26.69663 23.540799 0.255878 0.682342 19.87321 74.887033 45.631621 115.955491 17.271782 27.720143 34.970027 47.16689 54.80059 60.81373-13.433608-58.724057-23.626091-147.129991-6.951359-237.668243C358.771578 63.305131 552.514055 3.642853 560.787452 1.21201a31.814195 31.814195 0 0 1 39.831713 36.93176c-0.213232 1.705855-32.325952 175.95894 35.481784 324.410968 6.183724 13.518901 14.712999 29.084827 23.967262 44.906632a422.199104 422.199104 0 0 1 13.135083-66.698929c24.990775-88.022116 89.344154-118.130456 92.116168-119.281909a31.64361 31.64361 0 0 1 32.496537 4.008759c9.382202 7.249884 13.732132 19.276161 11.64246 31.046561-0.341171 2.217611-9.382202 62.178413 41.196398 147.12999 45.674267 76.678181 58.681411 126.403853 58.68141 221.931731C909.123036 856.143872 734.614073 1023.53089 493.789998 1023.53089zM187.247861 475.269104a407.699336 407.699336 0 0 0-28.10396 147.129991c0 187.814632 138.43013 324.069797 334.774036 324.069797 197.879176 0 341.469517-136.255165 341.469518-324.112443 0-81.198696-9.936605-118.684859-48.275696-183.294116-25.587824-43.072838-38.381737-81.795746-44.181643-112.714367a144.272684 144.272684 0 0 0-15.864451 36.803821c-18.721758 66.10188-13.902718 143.718281-13.902718 144.571208a31.259792 31.259792 0 0 1-20.47026 31.259792 30.278926 30.278926 0 0 1-35.225905-11.301289c-2.430843-3.241124-56.975556-81.454575-81.028111-134.336078-49.896258-109.217364-49.213916-227.475759-44.181643-295.539373-50.5786 29.767169-128.408232 96.423452-153.526947 231.868336-24.308433 131.990528 22.943749 269.951548 23.412859 271.23094a31.430378 31.430378 0 0 1-5.586675 31.728902 30.278926 30.278926 0 0 1-30.278925 9.723373c-3.752881-0.93822-96.551391-23.668738-152.460788-112.970245a376.951301 376.951301 0 0 1-26.568691-54.118249z"
                                    fill="currentColor"></path>
                            </svg>
                            热门
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/app/actor">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                            </svg>
                            演员
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/app/search">
                            <svg stroke="currentColor" className="h-5 w-5" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                                <path
                                    d="M874.666667 814.933333l-209.066667-209.066666C704 554.666667 725.333333 494.933333 725.333333 426.666667c0-166.4-132.266667-298.666667-298.666666-298.666667s-298.666667 132.266667-298.666667 298.666667 132.266667 298.666667 298.666667 298.666666c68.266667 0 128-21.333333 179.2-59.733333l209.066666 209.066667c17.066667 17.066667 42.666667 17.066667 59.733334 0s17.066667-42.666667 0-59.733334zM426.666667 640c-119.466667 0-213.333333-93.866667-213.333334-213.333333s93.866667-213.333333 213.333334-213.333334 213.333333 93.866667 213.333333 213.333334-93.866667 213.333333-213.333333 213.333333z"
                                    fill="currentColor"></path>
                            </svg>
                            搜索
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">

                {version !== latestVersion &&
                    <div role="button" className="btn btn-ghost btn-circle" onClick={() => setToastVisible(true)}>
                        <div className="indicator">
                            <svg className="h-6 w-6 text-orange-600" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
                                    fill="currentColor"></path>
                                <path
                                    d="M513.61792 284.040192l40.225792 40.226816L694.636544 465.05984c11.108352 11.108352 11.108352 29.11744 0 40.225792-11.108352 11.108352-29.118464 11.108352-40.226816 0l-114.37056-114.37056V710.7072c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.709184 0-28.444672-12.734464-28.444672-28.443648V394.958848l-110.32576 110.326784c-11.109376 11.108352-29.119488 11.108352-40.226816 0-11.108352-11.108352-11.108352-29.11744 0-40.225792l140.792832-140.792832 40.225792-40.226816z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                }
                {
                    version && latestVersion && version === latestVersion &&
                    <span>V{version}</span>
                }


                <div className="dropdown dropdown-end [@supports(color:oklch(0%_0_0))]:block">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <svg className="h-6 w-6" viewBox="0 0 1026 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                            <path
                                d="M811.984589 328.552129c-57.139501 0-101.497797 44.358297-101.497798 101.497798s44.358297 101.497797 101.497798 101.497797 101.497797-44.358297 101.497797-101.497797c0.751836-57.139501-44.358297-101.497797-101.497797-101.497798z m0 163.900147c-35.33627 0-62.402349-27.066079-62.40235-62.402349 0-35.33627 27.066079-62.402349 62.40235-62.40235 35.33627 0 62.402349 27.066079 62.402349 62.40235 0 35.33627-26.314244 62.402349-62.402349 62.402349zM211.267995 328.552129c-57.139501 0-101.497797 44.358297-101.497797 101.497798s44.358297 101.497797 101.497797 101.497797 101.497797-44.358297 101.497798-101.497797-44.358297-101.497797-101.497798-101.497798z m0 163.900147c-35.33627 0-62.402349-27.066079-62.402349-62.402349 0-35.33627 27.066079-62.402349 62.402349-62.40235 35.33627 0 62.402349 27.066079 62.40235 62.40235 0 35.33627-27.066079 62.402349-62.40235 62.402349zM750.334075 211.265786c0-57.139501-44.358297-101.497797-101.497798-101.497798s-101.497797 44.358297-101.497797 101.497798 44.358297 101.497797 101.497797 101.497797c56.387665 0 101.497797-44.358297 101.497798-101.497797z m-102.249633 62.402349c-35.33627 0-62.402349-27.066079-62.40235-62.402349 0-35.33627 27.066079-62.402349 62.40235-62.40235s62.402349 27.066079 62.402349 62.40235c0 35.33627-26.314244 62.402349-62.402349 62.402349zM375.168142 109.767988c-57.139501 0-101.497797 44.358297-101.497797 101.497798s44.358297 101.497797 101.497797 101.497797S476.665939 268.405286 476.665939 211.265786s-44.358297-101.497797-101.497797-101.497798z m0 163.900147c-35.33627 0-62.402349-27.066079-62.402349-62.402349 0-35.33627 27.066079-62.402349 62.402349-62.40235 35.33627 0 62.402349 27.066079 62.40235 62.40235 0 35.33627-27.066079 62.402349-62.40235 62.402349z"
                                fill="currentColor"></path>
                            <path
                                d="M272.166674 921.750367l62.402349 27.817915c54.883994 22.555066 115.030837 34.584435 177.433187 34.584435 35.33627 0 62.402349-27.066079 62.402349-62.40235 0-15.788546-6.014684-30.073421-15.788546-40.599119-18.044053-18.044053-27.817915-42.10279-27.817915-68.417034 0-57.139501 44.358297-101.497797 101.497797-101.497797h98.490456c139.84141 0 253.368576-113.527166 253.368575-253.368576 0-230.061674-212.017621-417.268722-472.152716-417.268722C251.115279 39.847283 39.849493 251.864905 39.849493 512c0 124.052863 43.606461 231.565345 121.797357 316.522761 3.759178 15.036711-3.007342 25.562408-16.540382 26.314243-9.022026 0.751836-18.795888-8.270191-18.795888-8.27019l-4.511014-3.759178c-4.511013-5.262849-8.270191-9.773862-12.781204-15.036711-67.665198-87.212922-109.016153-196.98091-109.016152-315.770925 0-281.938326 229.309838-511.248164 511.248164-511.248164s511.248164 205.251101 511.248165 457.116005c0 161.64464-131.571219 293.215859-293.215859 293.215859H632.295895c-35.33627 0-62.402349 27.066079-62.402349 62.40235 0 15.788546 6.014684 30.073421 15.788546 40.599119 18.044053 18.044053 27.817915 42.10279 27.817915 68.417034 0 57.139501-44.358297 101.497797-101.497797 101.497797-93.227606 0-180.440529-24.810573-255.624083-68.417034-0.751836-0.751836-17.292217-28.56975 15.788547-33.832599z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <div tabIndex={0}
                         className="dropdown-content bg-base-200 text-base-content rounded-box z-[1] top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16">
                        <div className="grid grid-cols-1 gap-3 p-3">
                            {themeEntries.map(([key, value]) => (
                                <button className="outline-base-content text-start outline-offset-4"
                                        data-act-class="[&amp;_svg]:visible" data-set-theme={key} key={key}
                                        data-theme={key}>
                                    <span
                                        className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                                    >
                                        <span className="grid grid-cols-5 grid-rows-3">
                                            <span
                                                className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 24 24"
                                                     fill="currentColor"
                                                     className='h-3 w-3 shrink-0 invisible'>
                                                    <path
                                                        d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                                    </path>
                                                </svg>
                                                <span className="flex-grow text-sm">{value}</span>
                                                <span className="flex h-full shrink-0 flex-wrap gap-1">
                                                    <span className="bg-primary rounded-badge w-2"></span>
                                                    <span className="bg-secondary rounded-badge w-2"></span>
                                                    <span className="bg-accent rounded-badge w-2"></span>
                                                    <span className="bg-neutral rounded-badge w-2"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            ))}


                        </div>
                    </div>
                </div>
                <div role="button" className="btn btn-ghost btn-circle"
                     onClick={() => window.open("https://github.com/envyafish/AutoLadyIssue", "_blank")}>
                    <div className="indicator">
                        <svg className="h-6 w-6" viewBox="0 0 48 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619"
                                stroke="currentColor" strokeWidth="4" strokeLinecap="butt"></path>
                            <path
                                d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106"
                                stroke="currentColor" strokeWidth="4" strokeLinecap="butt"></path>
                            <path
                                d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107"
                                stroke="currentColor" strokeWidth="4" strokeLinecap="butt"></path>
                            <path
                                d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518"
                                stroke="currentColor" strokeWidth="4" strokeLinecap="butt"></path>
                        </svg>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M309.52 494.12c-1.94 0-3.47 0.28-4.67 0.76 1.63-0.49 3.37-0.76 5.16-0.76L309.52 494.12zM845.13 707.52c0.05-0.99 0.18-1.96 0.39-2.9C845.29 705.05 845.17 705.97 845.13 707.52zM880.86 313.29c0.01-0.04 0.01-0.09 0.01-0.13l0-0.46C880.87 312.9 880.87 313.1 880.86 313.29zM845.11 313.23c0 0.04 0 0.08 0.01 0.12-0.01-0.21-0.01-0.43-0.01-0.65L845.11 313.23zM866.673 849.43c-5.03-37.45-16.03-73.61-32.69-107.48-3.26-6.62-6.71-13.13-10.37-19.51-0.01-0.02-0.02-0.04-0.04-0.06-15.86-26.86-35.32-51.8-58-74.06l-0.01-0.01c-4.93-4.84-10.01-9.56-15.24-14.14-37.29-32.68-80.34-56.91-126.25-71.65 8.31-4.6 16.35-9.76 24.07-15.47 8.79-6.48 17.16-13.68 25.03-21.55 41.39-41.39 64.19-96.43 64.19-154.97 0-58.54-22.8-113.58-64.19-154.97-40.64-40.64-94.44-63.35-151.78-64.17-0.91-0.01-1.82-0.02-2.73-0.02-0.91 0-1.82 0.01-2.73 0.02-57.34 0.82-111.14 23.53-151.78 64.17-41.39 41.39-64.19 96.43-64.19 154.97 0 58.54 22.8 113.58 64.19 154.97 7.87 7.87 16.24 15.07 25.03 21.55 7.72 5.71 15.76 10.87 24.07 15.47-45.91 14.74-88.96 38.97-126.25 71.65-5.23 4.58-10.31 9.3-15.24 14.14-22.7 22.28-42.18 47.24-58.05 74.13-3.66 6.38-7.11 12.89-10.37 19.51-16.66 33.87-27.66 70.03-32.69 107.48-1.61 12 6.81 23.03 18.8 24.64 0.99 0.13 1.98 0.2 2.95 0.2 0.89 0 1.76-0.05 2.63-0.16 8.67-1.89 15.67-8.96 17.03-18.25 10.1-69.32 43.14-132.31 90.63-180.28 56.36-56.95 133.07-92.74 215.97-92.88l0.47 0c82.72 0.28 159.25 36.04 215.5 92.88 47.49 47.97 80.53 110.96 90.63 180.28 1.36 9.27 8.33 16.33 16.98 18.24 0.02 0 0.03 0.01 0.05 0.01 0.87 0.11 1.74 0.16 2.63 0.16 0.97 0 1.96-0.07 2.95-0.2C859.863 872.46 868.283 861.43 866.673 849.43zM518.193 545.86c-0.44 0-0.88 0-1.32-0.01-81.8-0.6-154.73-57.43-174.66-133.66-0.22-0.83-0.44-1.67-0.64-2.51-3.12-12.6-4.78-25.7-4.78-39.15 0-13.45 1.66-26.7 4.78-39.52 0.2-0.86 0.42-1.71 0.64-2.56 20.04-78.14 93.65-140.25 175.98-140.25l0.94 0c82.33 0 155.94 62.11 175.98 140.25 0.22 0.85 0.44 1.7 0.64 2.56 3.12 12.82 4.78 26.07 4.78 39.52 0 13.45-1.66 26.55-4.78 39.15-0.2 0.84-0.42 1.68-0.64 2.51-19.93 76.23-92.86 133.06-174.66 133.66C519.703 545.86 518.953 545.86 518.193 545.86z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="text-center">
                            V{version}
                        </li>
                        <li>
                            <NavLink to="/app/profile">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                                账号安全
                            </NavLink>
                        </li>
                        <li><NavLink to="/app/config">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>
                            配置中心
                        </NavLink>
                        </li>
                        <li>
                            <div onClick={logout}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
                                </svg>
                                登出
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;
