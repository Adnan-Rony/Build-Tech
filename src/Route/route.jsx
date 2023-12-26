import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import Home from '../Pages/Home/Home';

import Buildcpu from '../Dynamic-Route/Buildcpu/Buildcpu';
import BuildcpuDetails from '../Dynamic-Route/Buildcpu/BuildcpuDetails';
import Buildram from '../Dynamic-Route/Buildram/Buildram';
import BuildramDetails from '../Dynamic-Route/Buildram/BuildramDetails';
import BuildcoolerDetails from '../Dynamic-Route/Buildcooler/BuildcoolerDetails';
import Buildcooler from '../Dynamic-Route/Buildcooler/Buildcooler';
import BuildKeyboardDetails from '../Dynamic-Route/BuildKeyboard/BuildKeyboardDetails';
import BuildKeyboard from '../Dynamic-Route/BuildKeyboard/BuildKeyboard';
import Buildmonitor from '../Dynamic-Route/Buildmonitor/Buildmonitor';
import BuildmonitorDetails from '../Dynamic-Route/Buildmonitor/BuildmonitorDetails';
import Buildgraphics from '../Dynamic-Route/Buildgraphics/Buildgraphics';
import BuildgraphicsDetails from '../Dynamic-Route/Buildgraphics/BuildgraphicsDetails';

const route = createBrowserRouter ([
    {
        path:"/",
        element:<Mainlayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
          

              {
                path:"/buildcpu",
                element:<Buildcpu/>,
               
              },
              {
                path:"/buildram",
                element:<Buildram/>,
               
              },
              {
                path:"/buildcooler",
                element:<Buildcooler/>,
               
              },
              {
                path:"/buildkeyboards",
                element:<BuildKeyboard/>,
               
              },
            
              {
                path:"/buildmonitor",
                element:<Buildmonitor/>,
               
              },
              {
                path:"/Buildgraphics",
                element:<Buildgraphics/>,
               
              },
            


              {
                path:"/buildcpuDetails/:id",
                element:<BuildcpuDetails/>,
                 loader: ({ params }) => {
                  console.log(params);
                  return fetch(`http://localhost:5000/buildcpu/${params.id}`);
                },
              },
              {
                path:"/buildramDetails/:id",
                element:<BuildramDetails/>,
                 loader: ({ params }) => {
                  console.log(params);
                  return fetch(`http://localhost:5000/buildram/${params.id}`);
                },
              },
              {
                path:"/buildcoolerDetails/:id",
                element:<BuildcoolerDetails/>,
                 loader: ({ params }) => {
                  console.log(params);
                  return fetch(`http://localhost:5000/buildcooler/${params.id}`);
                },
              },
              {
                path:"/buildkeyboardsDetails/:id",
                element:<BuildKeyboardDetails/>,
                 loader: ({ params }) => {
                  console.log(params);
                  return fetch(`http://localhost:5000/buildkeyboards/${params.id}`);
                },
              },
              {
                path:"/buildmonitorDetails/:id",
                element:<BuildmonitorDetails/>,
                 loader: ({ params }) => {
                  console.log(params);
                  return fetch(`http://localhost:5000/buildmonitor/${params.id}`);
                },
              },
              {
                path:"/BuildgraphicsDetails/:id",
                element:<BuildgraphicsDetails/>,
                 loader: ({ params }) => {
                  console.log(params);
                  return fetch(`http://localhost:5000/buildgraphics/${params.id}`);
                },
              }
           
        ]
    }
])

export default route;