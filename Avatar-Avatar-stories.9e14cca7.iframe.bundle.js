"use strict";(self.webpackChunk_renebfelix_library_storybook=self.webpackChunk_renebfelix_library_storybook||[]).push([[454],{"./src/stories/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});__webpack_require__("./node_modules/react/index.js");const StyleAvatar=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
    background: #00000085;
    font-family: Arial, Helvetica, sans-serif;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;

    ${props=>"small"===props.tamanho&&{height:"40px"}}

    ${props=>"bigger"===props.tamanho&&{height:"80px"}}

    .avatar{
        width: 60px;
        height: 60px;
        background: #546;

        ${props=>"small"===props.tamanho&&{width:"40px",height:"40px"}}

        ${props=>"bigger"===props.tamanho&&{width:"80px",height:"80px"}}
    }

    span{
        display: block;
        padding: 0px 15px;
        color: #FFFFFF;
        white-space: nowrap;
        line-height: 60px;
        text-overflow: ellipsis;
        overflow: hidden;
        box-sizing: border-box;
        
        ${props=>!0===props.showPoints?{width:"calc(100% - 120px)"}:{width:"calc(100% - 60px)"}}

        ${props=>"small"===props.tamanho&&{lineHeight:"40px",fontSize:"12px",padding:"0px 10px",width:!0===props.showPoints?"calc(100% - 80px)":"calc(100% - 40px)"}}

        ${props=>"bigger"===props.tamanho&&{lineHeight:"80px",fontSize:"18px",padding:"0px 20px",width:!0===props.showPoints?"calc(100% - 160px)":"calc(100% - 80px)"}}
    }

    .pontuacao{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        font-weight: 800;
        background: #e67e22;

        ${props=>"small"===props.tamanho&&{width:"40px",height:"40px"}}

        ${props=>"bigger"===props.tamanho&&{width:"80px",height:"80px"}}
    }

    &:hover{
        background: #000000;
    }
`;var lib=__webpack_require__("./node_modules/@dicebear/core/lib/index.js"),adventurer_neutral_lib=__webpack_require__("./node_modules/@dicebear/adventurer-neutral/lib/index.js"),esm=__webpack_require__("./node_modules/react-inlinesvg/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar({nameUser,click,tamanho,points,showPoints}){const svg=(0,lib.$i)(adventurer_neutral_lib,{seed:nameUser}).toString();return(0,jsx_runtime.jsxs)(StyleAvatar,{nameUser,title:nameUser,click,tamanho,showPoints,children:[(0,jsx_runtime.jsx)("div",{className:"avatar",children:(0,jsx_runtime.jsx)(esm.Z,{src:svg})}),(0,jsx_runtime.jsx)("span",{children:nameUser}),showPoints&&!0===showPoints&&(0,jsx_runtime.jsx)("div",{className:"pontuacao",children:points})]})}Avatar.displayName="Avatar";try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{nameUser:{defaultValue:null,description:"",name:"nameUser",required:!0,type:{name:"string"}},click:{defaultValue:null,description:"",name:"click",required:!1,type:{name:"VoidFunction"}},tamanho:{defaultValue:null,description:"",name:"tamanho",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"bigger"'}]}},points:{defaultValue:null,description:"",name:"points",required:!1,type:{name:"number"}},showPoints:{defaultValue:null,description:"",name:"showPoints",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/stories/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}const Avatar_stories={title:"Componentes/Avatar",component:Avatar},Default={args:{nameUser:"Rene Felix",tamanho:"default",points:0,showPoints:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    nameUser: 'Rene Felix',\n    tamanho: 'default',\n    points: 0,\n    showPoints: false\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=Avatar-Avatar-stories.9e14cca7.iframe.bundle.js.map