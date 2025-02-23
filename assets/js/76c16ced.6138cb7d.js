"use strict";(self.webpackChunknotes_template=self.webpackChunknotes_template||[]).push([[8350],{6408:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"22","title":"k8s \u65e0\u72b6\u6001\u670d\u52a1","description":"\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u4ece\u5b9e\u8df5\u7684\u89d2\u5ea6\u8bb2\u89e3\u4e86 k8s \u7684\u65e0\u72b6\u6001\u670d\u52a1\u7684\u57fa\u672c\u90e8\u7f72\uff0c\u4ee5\u53ca\u5982\u4f55\u6253\u5305\u5e94\u7528\uff0c\u5982\u4f55\u914d\u7f6e\u7f51\u5173\u3002\u8fd9\u4e00\u8282\uff0c\u6211\u4eec\u4f1a\u4ecb\u7ecd k8s \u4e2d\u7684\u65e0\u72b6\u6001\u670d\u52a1\u7684\u751f\u4ea7\u7ea7\u90e8\u7f72\u3002","source":"@site/docs/22.md","sourceDirName":".","slug":"/22","permalink":"/micro-service-crashcourse/docs/22","draft":false,"unlisted":false,"editUrl":"https://github.com/finger-bone/micro-service-crashcourse/blob/main/docs/22.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"helm \u6253\u5305 istio \u7f51\u5173\u4e0e k8s \u547d\u4ee4\u884c\u5de5\u5177","permalink":"/micro-service-crashcourse/docs/21"},"next":{"title":"k8s \u6709\u72b6\u6001\u670d\u52a1","permalink":"/micro-service-crashcourse/docs/23"}}');var r=a(4848),i=a(8453);const c={},l="k8s \u65e0\u72b6\u6001\u670d\u52a1",o={},d=[{value:"k8s \u5bf9\u8c61",id:"k8s-\u5bf9\u8c61",level:2},{value:"\u5fc5\u987b\u5b57\u6bb5",id:"\u5fc5\u987b\u5b57\u6bb5",level:3},{value:"\u5bf9\u8c61\u5143\u6570\u636e",id:"\u5bf9\u8c61\u5143\u6570\u636e",level:3},{value:"\u65e0\u72b6\u6001\u670d\u52a1\u5bf9\u8c61",id:"\u65e0\u72b6\u6001\u670d\u52a1\u5bf9\u8c61",level:2},{value:"Pod",id:"pod",level:3},{value:"ReplicaSet",id:"replicaset",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Service",id:"service",level:3},{value:"ConfigMap",id:"configmap",level:3},{value:"\u5c06 ConfigMap \u4f5c\u4e3a\u6587\u4ef6",id:"\u5c06-configmap-\u4f5c\u4e3a\u6587\u4ef6",level:4},{value:"\u5c06 ConfigMap \u4f5c\u4e3a\u73af\u5883\u53d8\u91cf",id:"\u5c06-configmap-\u4f5c\u4e3a\u73af\u5883\u53d8\u91cf",level:4},{value:"Secret",id:"secret",level:3},{value:"HorizontalPodAutoscaler",id:"horizontalpodautoscaler",level:3},{value:"\u751f\u4ea7\u7ea7\u65e0\u72b6\u6001\u670d\u52a1\u90e8\u7f72",id:"\u751f\u4ea7\u7ea7\u65e0\u72b6\u6001\u670d\u52a1\u90e8\u7f72",level:2},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u670d\u52a1\u90e8\u7f72",id:"\u670d\u52a1\u90e8\u7f72",level:3},{value:"\u6d41\u91cf\u76d1\u63a7",id:"\u6d41\u91cf\u76d1\u63a7",level:3},{value:"\u81ea\u52a8\u6269\u5bb9",id:"\u81ea\u52a8\u6269\u5bb9",level:3}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"k8s-\u65e0\u72b6\u6001\u670d\u52a1",children:"k8s \u65e0\u72b6\u6001\u670d\u52a1"})}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u4ece\u5b9e\u8df5\u7684\u89d2\u5ea6\u8bb2\u89e3\u4e86 k8s \u7684\u65e0\u72b6\u6001\u670d\u52a1\u7684\u57fa\u672c\u90e8\u7f72\uff0c\u4ee5\u53ca\u5982\u4f55\u6253\u5305\u5e94\u7528\uff0c\u5982\u4f55\u914d\u7f6e\u7f51\u5173\u3002\u8fd9\u4e00\u8282\uff0c\u6211\u4eec\u4f1a\u4ecb\u7ecd k8s \u4e2d\u7684\u65e0\u72b6\u6001\u670d\u52a1\u7684\u751f\u4ea7\u7ea7\u90e8\u7f72\u3002"}),"\n",(0,r.jsx)(n.p,{children:"k8s \u4e2d\uff0c\u670d\u52a1\u53ef\u4ee5\u6839\u636e\u5176\u662f\u5426\u6709\u72b6\u6001\uff0c\u5373\u662f\u5426\u9700\u8981\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u5206\u4e3a\u65e0\u72b6\u6001\u670d\u52a1\u548c\u6709\u72b6\u6001\u670d\u52a1\u3002\u65e0\u72b6\u6001\u670d\u52a1\u662f\u6307\u670d\u52a1\u4e0d\u9700\u8981\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u53ef\u4ee5\u968f\u65f6\u91cd\u542f\uff0c\u800c\u6709\u72b6\u6001\u670d\u52a1\u5219\u9700\u8981\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u4e0d\u80fd\u968f\u65f6\u91cd\u542f\u3002\u65e0\u72b6\u6001\u670d\u52a1\u7684\u90e8\u7f72\u76f8\u5bf9\u7b80\u5355\uff0c\u56e0\u4e3a\u65e0\u72b6\u6001\u670d\u52a1\u53ef\u4ee5\u968f\u65f6\u91cd\u542f\uff0c\u800c\u6709\u72b6\u6001\u670d\u52a1\u5219\u9700\u8981\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"k8s-\u5bf9\u8c61",children:"k8s \u5bf9\u8c61"}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u9762\u6211\u4eec\u4e00\u76f4\u5728\u7f16\u5199\u4e00\u4e9b\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u4e9b\u914d\u7f6e\u6587\u4ef6\u5176\u5b9e\u662f k8s \u5bf9\u8c61\u7684\u5b9a\u4e49\u3002k8s \u4e2d\u6709\u5f88\u591a\u5bf9\u8c61\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u81ea\u5df1\u7684\u4f5c\u7528\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u8fd9\u4e9b\u5bf9\u8c61\uff0c\u7136\u540e\u901a\u8fc7 k8s \u7684 API \u6765\u521b\u5efa\u8fd9\u4e9b\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u67e5\u770b\u76ee\u524d\u5df2\u7ecf\u6ce8\u518c\u7684\u5bf9\u8c61\uff0c\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl api-resources\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5fc5\u987b\u5b57\u6bb5",children:"\u5fc5\u987b\u5b57\u6bb5"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a k8s \u5bf9\u8c61\u5305\u542b\uff0c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["API \u7248\u672c\uff0c",(0,r.jsx)(n.code,{children:"apiVersion"}),"\uff0c\u6307\u5b9a\u5bf9\u8c61\u7684 API \u7248\u672c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff0c",(0,r.jsx)(n.code,{children:"kind"}),"\uff0c\u6307\u5b9a\u5bf9\u8c61\u7684\u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5143\u6570\u636e\uff0c",(0,r.jsx)(n.code,{children:"metadata"}),"\uff0c\u6307\u5b9a\u5bf9\u8c61\u7684\u5143\u6570\u636e\uff0c\u4f8b\u5982\u540d\u79f0\u3001\u6807\u7b7e\u7b49\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u89c4\u8303\uff0c\u901a\u5e38\u662f",(0,r.jsx)(n.code,{children:"spec"}),"\uff0c\u6307\u5b9a\u5bf9\u8c61\u7684\u89c4\u8303\uff0c\u4f8b\u5982\u5bb9\u5668\u7684\u955c\u50cf\u3001\u7aef\u53e3\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e9b\u5b57\u6bb5\u662f k8s \u5bf9\u8c61\u7684\u57fa\u672c\u5b57\u6bb5\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u8fd9\u4e9b\u5b57\u6bb5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5bf9\u8c61\u5143\u6570\u636e",children:"\u5bf9\u8c61\u5143\u6570\u636e"}),"\n",(0,r.jsx)(n.p,{children:"\u4e4b\u524d\u6211\u4eec\u5728\u4f7f\u7528 Service \u65f6\u53d1\u73b0\uff0cService \u662f\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u5230\u8fbe\u82e5\u5e72 Pod \u8bf7\u6c42\u7684\u5bf9\u8c61\uff0c\u6211\u4eec\u9700\u8981\u9009\u4e2d\u4e00\u4e9b Pod\u3002\u5f53\u65f6\u6211\u4eec\u4f7f\u7528\u7684\u662f\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"selector:\n  app: producer\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u5728\u521b\u5efa deployment \u65f6\uff0c\u4e3a pod \u6307\u5b9a\u7684\u6a21\u7248\u4e3a\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  labels:\n    app: producer\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u5c31\u662f\u4e00\u4e2a\u9009\u62e9\u5668\uff0cService \u4f1a\u6839\u636e\u8fd9\u4e2a\u9009\u62e9\u5668\u9009\u62e9\u5bf9\u5e94\u7684 Pod\u3002\u8fd9\u91cc\u7684 label \u5c31\u662f\u5bf9\u8c61\u7684\u5143\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"k8s \u4e2d\uff0c\u9996\u5148\u6309\u547d\u540d\u7a7a\u95f4\u5212\u5206\u903b\u8f91\u96c6\u7fa4\u3002\u6bcf\u4e2a\u903b\u8f91\u96c6\u7fa4\u5305\u542b\u82e5\u5e72\u5bf9\u8c61\u3002\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684 UID\u3002\u540c\u65f6\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u8fd8\u53ef\u4ee5\u5e26\u6709 metadata\uff0c\u5305\u62ec\u540d\u79f0\u3001\u547d\u540d\u7a7a\u95f4\u3001\u6807\u7b7e\u3001\u6ce8\u89e3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u540d\u79f0\u901a\u5e38\u662f\u7528\u6237\u4e3a\u4e86\u65b9\u4fbf\u6307\u5b9a\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u4e0e UID \u529f\u80fd\u76f8\u540c\uff0c\u4f46\u662f UID \u662f k8s \u81ea\u52a8\u751f\u6210\u7684\uff0c\u540d\u79f0\u662f\u7528\u6237\u6307\u5b9a\u7684\u3002\u8fd9\u662f metadata \u7684 name \u5b57\u6bb5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["labels \u662f\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b\u4e86\u4e00\u4e9b\u952e\u503c\u5bf9\u3002\u8fd9\u4e9b\u952e\u503c\u5bf9\u53ef\u4ee5\u7528\u6765\u9009\u62e9\u5bf9\u8c61\u3002\u4f8b\u5982\uff0cService \u4f1a\u6839\u636e selector \u9009\u62e9\u5bf9\u5e94\u7684 Pod\u3002\u8fd9\u662f metadata \u7684 labels \u5b57\u6bb5\u3002\u5e38\u7528\u7684\u4e00\u4e2a\u4f8b\u5b50\u662f",(0,r.jsx)(n.code,{children:"app: producer"}),"\uff0c\u8868\u793a\u8fd9\u4e2a\u5bf9\u8c61\u662f\u4e00\u4e2a producer \u670d\u52a1\u3002\u6b64\u5916\uff0c\u6709\u7684\u670d\u52a1\u7f51\u683c\uff08\u540e\u9762\u4f1a\u4ecb\u7ecd\uff09\u4f1a\u6839\u636e",(0,r.jsx)(n.code,{children:"version: v1"}),"\u9009\u62e9\u5bf9\u5e94\u7684\u7248\u672c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u4e3a\u5bf9\u8c61\u6307\u660e\u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528 metadata \u7684 namespace \u5b57\u6bb5\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u90a3\u4e48\u9ed8\u8ba4\u4e3a default \u547d\u540d\u7a7a\u95f4\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u89e3\u6211\u4eec\u4e4b\u524d\u6ca1\u6709\u4f7f\u7528\u8fc7\uff0c\u5b83\u662f metadata \u7684 annotations \u5b57\u6bb5\u3002\u6ce8\u89e3\u662f\u4e00\u4e9b\u952e\u503c\u5bf9\u3002\u4e0e labels \u4e0d\u540c\uff0c\u6ce8\u89e3\u4e0d\u662f\u5355\u7eaf\u7684\u6807\u8bb0\uff0c\u800c\u662f\u6709\u529f\u80fd\u7684\uff0c\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"imagerregistory"}),"\u6ce8\u89e3\u6307\u5b9a Pod \u955c\u50cf\u7684\u4ed3\u5e93\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u65e0\u72b6\u6001\u670d\u52a1\u5bf9\u8c61",children:"\u65e0\u72b6\u6001\u670d\u52a1\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\u6211\u4eec\u4ecb\u7ecd\u9700\u8981\u4f7f\u7528\u5230\u7684\u5bf9\u8c61\uff0c\u524d\u9762\u4ecb\u7ecd\u5230\u7684\u4f1a\u4e00\u7b14\u5e26\u8fc7\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"pod",children:"Pod"}),"\n",(0,r.jsx)(n.p,{children:"Pod \u662f k8s \u7684\u6700\u5c0f\u90e8\u7f72\u5355\u5143\uff0c\u662f\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u7684\u96c6\u5408\u3002Pod \u4e2d\u7684\u5bb9\u5668\u5171\u4eab\u7f51\u7edc\u548c\u5b58\u50a8\uff0c\u53ef\u4ee5\u901a\u8fc7 localhost \u76f4\u63a5\u901a\u4fe1\u3002Pod \u662f\u65e0\u72b6\u6001\u670d\u52a1\u7684\u57fa\u672c\u90e8\u7f72\u5355\u5143\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"replicaset",children:"ReplicaSet"}),"\n",(0,r.jsx)(n.p,{children:"ReplicaSet \u662f Pod \u7684\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u4fdd\u8bc1 Pod \u7684\u6570\u91cf\u3002ReplicaSet \u4f1a\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684 Pod \u6a21\u677f\uff0c\u4fdd\u8bc1 Pod \u7684\u6570\u91cf\u3002\u5982\u679c Pod \u6302\u6389\uff0cReplicaSet \u4f1a\u81ea\u52a8\u91cd\u542f Pod\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,r.jsx)(n.p,{children:"Deployment \u662f ReplicaSet \u7684\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u4fdd\u8bc1 ReplicaSet \u7684\u6570\u91cf\u3002Deployment \u4f1a\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684 ReplicaSet \u6a21\u677f\uff0c\u4fdd\u8bc1 ReplicaSet \u7684\u6570\u91cf\u3002\u5982\u679c ReplicaSet \u6302\u6389\uff0cDeployment \u4f1a\u81ea\u52a8\u91cd\u542f ReplicaSet\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0cDeployment \u53ea\u80fd\u7528\u4e8e\u90e8\u7f72\u65e0\u72b6\u6001\u670d\u52a1\uff0c\u56e0\u4e3a\u65e0\u72b6\u6001\u670d\u52a1\u53ef\u4ee5\u968f\u65f6\u91cd\u542f\u3002\u5982\u679c\u670d\u52a1\u6709\u72b6\u6001\uff0c\u90a3\u4e48\u91cd\u542f\u540e\u6570\u636e\u4f1a\u4e22\u5931\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Deployment \u53ef\u4ee5\u6307\u5b9a Resources\uff0c\u4f8b\u5982 CPU \u548c\u5185\u5b58\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'resources:\n  requests:\n    memory: "64Mi"\n    cpu: "250m"\n  limits:\n    memory: "128Mi"\n    cpu: "500m"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc",(0,r.jsx)(n.code,{children:"m"}),"\u8868\u793a milli\uff0c\u5373 1/1000\uff0cCPU \u7684\u5355\u4f4d\u662f\u6838\u5fc3\u6570\u3002",(0,r.jsx)(n.code,{children:"requests"}),"\u8868\u793a\u8bf7\u6c42\u7684\u8d44\u6e90\uff0c",(0,r.jsx)(n.code,{children:"limits"}),"\u8868\u793a\u9650\u5236\u7684\u8d44\u6e90\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"service",children:"Service"}),"\n",(0,r.jsx)(n.p,{children:"Service \u662f Pod \u7684\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u7528\u4e8e\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230 Pod\u3002Service \u4f1a\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684 Pod Selector\uff0c\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u5bf9\u5e94\u7684 Pod\u3002Service \u6709\u56db\u79cd\u7c7b\u578b\uff0c\u5206\u522b\u662f ClusterIP\uff0cNodePort\uff0cLoadBalancer \u548c ExternalName\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"configmap",children:"ConfigMap"}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u9762\u6211\u4eec\u4f7f\u7528 helm \u6a21\u7248\u5b9e\u73b0\u4e86\u7528\u6237\u81ea\u5b9a\u4e49\uff0c\u4f46\u662f\u5982\u6b64\u64cd\u4f5c\uff0c\u6bcf\u6b21\u90fd\u9700\u8981\u91cd\u65b0\u90e8\u7f72\u3002ConfigMap \u53ef\u4ee5\u5c06\u914d\u7f6e\u6587\u4ef6\u72ec\u7acb\u51fa\u6765\uff0c\u7136\u540e\u6302\u8f7d\u5230 Pod \u4e2d\u3002\u8fd9\u6837\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ConfigMap \u6765\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u65b0\u90e8\u7f72 Deployment\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["ConfigMap \u6709\u4e00\u4e2a\u989d\u5916\u7684\u5b57\u6bb5\uff0c",(0,r.jsx)(n.code,{children:"data"}),"\uff0c\u7528\u4e8e\u5b58\u653e\u914d\u7f6e\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: username-password-config\ndata:\n  username: admin\n  password: admin\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u7684 data \u5c31\u662f\u666e\u901a\u7684 yaml\uff0c\u53ef\u4ee5\u5b58\u653e\u4efb\u610f\u914d\u7f6e\u4fe1\u606f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u5982\u679c\u4f60\u786e\u5b9a\u4f60\u7684 ConfigMap \u4e0d\u4f1a\u5728\u91cd\u65b0\u90e8\u7f72\u524d\u6539\u53d8\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"immutable"}),"\u5b57\u6bb5\u6765\u6307\u5b9a ConfigMap \u662f\u4e0d\u53ef\u53d8\u7684\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# ...\nmetadata:\n  name: username-password-config\n# ...\nimmutable: true\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8981\u8ba9 Pod \u8bfb\u53d6\u5230 ConfigMap\uff0c\u5e38\u7528\u7684\u662f\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u5c06-configmap-\u4f5c\u4e3a\u6587\u4ef6",children:"\u5c06 ConfigMap \u4f5c\u4e3a\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"Pod \u672c\u8eab\u5c31\u662f Docker \u5bb9\u5668\uff0c\u800c Docker \u5bb9\u5668\u6709 Volume\uff0c\u7528\u4e8e\u6302\u8f7d\u5916\u90e8\u6587\u4ef6\u3002ConfigMap \u81ea\u8eab\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6587\u4ef6\uff0c\u88ab\u6302\u8f7d\u5230 Pod \u4e2d\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: producer\nspec:\n  containers:\n  - name: producer\n    image: producer\n    volumeMounts:\n    - name: username-password-volume\n      mountPath: "/conf"\n      readOnly: true\n  volumes:\n  - name: username-password-volume\n    configMap:\n      name: username-password-config\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684 Pod \u914d\u7f6e\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u5728 volumes \u4e2d\u5c06 ConfigMap \u5b9a\u4e49\u6210\u4e86\u4e00\u4e2a Volume\u3002\u7136\u540e\u5728 containers \u4e2d\u5c06\u8fd9\u4e2a Volume \u6302\u8f7d\u5230\u4e86",(0,r.jsx)(n.code,{children:"/conf"}),"\u8def\u5f84\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u8bfb\u53d6",(0,r.jsx)(n.code,{children:"/conf"}),"\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\uff0c\u5373 ConfigMap\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 Javascript\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import * as fs from 'fs';\n\nconst username = fs.readFileSync('/conf/username', 'utf8');\nconst password = fs.readFileSync('/conf/password', 'utf8');\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u5728\u9664\u4e86\u73af\u5883\u53d8\u91cf\u6a21\u5f0f\u4ee5\u5916\u7684\u6a21\u5f0f\u4e0b\uff0cConfigMap \u66f4\u65b0\u65f6\uff0c\u5176\u88ab\u6620\u5c04\u7684\u5185\u5bb9\uff08\u4f8b\u5982\u8fd9\u91cc\u7684\u6587\u4ef6\uff09\uff0c\u4f1a\u88ab\u4e00\u5e76\u5237\u65b0\u3002\u4f46\u662f\uff0c\u7a0b\u5e8f\u9700\u8981\u91cd\u65b0\u8bfb\u53d6\u624d\u80fd\u83b7\u53d6\u5230\u65b0\u7684\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u5c06-configmap-\u4f5c\u4e3a\u73af\u5883\u53d8\u91cf",children:"\u5c06 ConfigMap \u4f5c\u4e3a\u73af\u5883\u53d8\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u7684\u914d\u7f6e\u65b9\u5f0f\u6765\u628a ConfigMap \u52a0\u8f7d\u6210\u73af\u5883\u53d8\u91cf\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: producer\nspec:\n  containers:\n  - name: producer\n    image: producer\n    env:\n    - name: CONFIG_MAP_USERNAME\n      valueFrom:\n        configMapKeyRef:\n          name: username-password-config\n          key: username\n    - name: CONFIG_MAP_PASSWORD\n      valueFrom:\n        configMapKeyRef:\n          name: username-password-config\n          key: password\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u6ce8\u610f\uff0cPod \u4e2d\u73af\u5883\u53d8\u91cf\u540d\u79f0\u5141\u8bb8\u7684\u5b57\u7b26\u8303\u56f4\u662f\u6709\u9650\u7684\u3002\u5982\u679c\u67d0\u4e9b\u53d8\u91cf\u540d\u79f0\u4e0d\u6ee1\u8db3\u8fd9\u4e9b\u89c4\u5219\uff0c\u5219\u5373\u4f7f Pod \u53ef\u4ee5\u88ab\u542f\u52a8\uff0c\u4f60\u7684\u5bb9\u5668\u4e5f\u65e0\u6cd5\u8bbf\u95ee\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"secret",children:"Secret"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u6709\u4e00\u4e9b\u654f\u611f\u4fe1\u606f\uff0c\u4f8b\u5982\u5bc6\u7801\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528 Secret \u6765\u5b58\u50a8\u8fd9\u4e9b\u4fe1\u606f\u3002Secret \u4e0e ConfigMap \u7c7b\u4f3c\uff0c\u4f46\u662f Secret \u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Secret \u4e5f\u6709 data \u5b57\u6bb5\uff0c\u4e0e ConfigMap \u884c\u4e3a\u57fa\u672c\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: password-secret\ntype: Opaque\ndata:\n  password: password\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc type \u5b57\u6bb5\u662f Opaque\uff0c\u5373\u7528\u6237\u81ea\u5b9a\u4e49\u52a0\u5bc6\u65b9\u5f0f\u3002type \u8fd8\u6709\u8bb8\u591a\u7c7b\u578b\uff0c\u6709\u4e0d\u540c\u7684\u52a0\u5bc6\u65b9\u5f0f\uff0c\u5177\u4f53\u53ef\u4ee5",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"\u67e5\u770b\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff0ck8s \u53ea\u662f\u5c06 Secret \u52a0\u5bc6\u5b58\u50a8\uff0c\u800c\u4e0d\u662f\u52a0\u5bc6\u4f20\u8f93\u3002\u5373\u8fd9\u91cc\u6211\u4eec\u7684\u6587\u4ef6\u91cc\u5199\u7684\u662f\u660e\u6587\u5bc6\u7801\uff0c\u4f46\u662f k8s \u4f1a\u5c06\u5176\u52a0\u5bc6\u5b58\u50a8\u3002\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u660e\u6587\u5bc6\u7801\u51fa\u73b0\u5728\u6587\u4ef6\u4e2d\uff0c\u624b\u52a8\u8fdb\u884c\u5bf9\u79f0\u6216\u975e\u5bf9\u79f0\u52a0\u5bc6\uff0c\u7136\u540e\u5c06\u52a0\u5bc6\u540e\u7684\u5bc6\u7801\u5b58\u50a8\u5728 Secret \u4e2d\uff0c\u516c\u94a5\u516c\u5f00\u5728 ConfigMap\uff0c\u79c1\u94a5\u88ab\u5bf9\u5e94\u7684 Pod \u6301\u6709\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8981\u52a0\u8f7d Secret\uff0c\u628a\u4e0a\u6587\u4e2d ConfigMap \u7684\u5bf9\u8c61\u540d\u6539\u4e3a Secret \u5373\u53ef\uff0c\u4f8b\u5982\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: secret-dotfiles-pod\nspec:\n  volumes:\n    - name: secret-volume\n      secret:\n        secretName: dotfile-secret\n  containers:\n    - name: dotfile-test-container\n      image: registry.k8s.io/busybox\n      command:\n        - ls\n        - "-l"\n        - "/etc/secret-volume"\n      volumeMounts:\n        - name: secret-volume\n          readOnly: true\n          mountPath: "/etc/secret-volume"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff0cSecret \u5bf9\u6240\u6709\u6302\u8f7d\u7684\u5bb9\u5668\u90fd\u662f\u660e\u6587\u7684\u3002\u5982\u679c\u9700\u8981\u66f4\u5b89\u5168\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u624b\u52a8\u5b9e\u73b0\u975e\u5bf9\u79f0\u52a0\u5bc6\uff0c\u5e76\u628a\u79c1\u94a5\u50a8\u5b58\u5728\u552f\u4e00\u5141\u8bb8\u8bbf\u95ee\u7684 Pod \u4e2d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"horizontalpodautoscaler",children:"HorizontalPodAutoscaler"}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u4e86\u670d\u52a1\u7684\u90e8\u7f72\u3002\u4f46\u662f\uff0c\u4f7f\u7528 Deployment \u53ea\u80fd\u7ed9\u5b9a\u4e00\u4e2a Pod \u7684\u6570\u91cf\u3002\u4f46\u5728\u73b0\u5b9e\u4e2d\uff0c\u5927\u90e8\u5206\u670d\u52a1\u4e0b\uff0c\u6211\u4eec\u90fd\u5e0c\u671b\u80fd\u81ea\u52a8\u6269\u7f29\uff0c\u4ee5\u8282\u7701\u8ba1\u7b97\u8d44\u6e90\u3002\u4f8b\u5982\uff0c\u5728\u8d2d\u7269\u6de1\u5b63\uff0c\u6211\u4eec\u5e0c\u671b\u51cf\u5c11\u670d\u52a1\u5668\u6570\u91cf\u6765\u7f29\u51cf\u6210\u672c\uff0c\u800c\u5728\u8d2d\u7269\u65fa\u5b63\uff0c\u6211\u4eec\u5e0c\u671b\u589e\u52a0\u670d\u52a1\u5668\u6570\u91cf\u6765\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bb9\u5668\u7684\u6269\u7f29\u5bb9\u662f k8s \u7684\u6838\u5fc3\u529f\u80fd\u4e4b\u4e00\u3002\u6269\u5bb9\u6709\u4e24\u4e2a\u7ef4\u5ea6\uff0c\u4e00\u4e2a\u662f\u6c34\u5e73\u6269\u5bb9\uff0c\u5373\u589e\u52a0 Pod \u7684\u6570\u91cf\uff0c\u53e6\u4e00\u4e2a\u662f\u5782\u76f4\u6269\u5bb9\uff0c\u5373\u589e\u52a0 Pod \u7684\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6269\u7f29\u662f\u5341\u5206\u590d\u6742\u7684\uff0c\u6211\u4eec\u53ea\u4ecb\u7ecd\u6700\u7b80\u5355\u7684\u81ea\u52a8\u6c34\u5e73\u6269\u5bb9\u3002HorizontalPodAutoscaler \u662f k8s \u7684\u6c34\u5e73\u6269\u5bb9\u5668\u3002\u5b83\u4f1a\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684 CPU \u4f7f\u7528\u7387\u548c\u5185\u5b58\u4f7f\u7528\u7387\uff0c\u81ea\u52a8\u8c03\u6574 Pod \u7684\u6570\u91cf\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: producer-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: producer\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 50\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684",(0,r.jsx)(n.code,{children:"minReplicas"}),"\u548c",(0,r.jsx)(n.code,{children:"maxReplicas"}),"\u5206\u522b\u662f\u6700\u5c0f\u548c\u6700\u5927 Pod \u6570\u91cf\u3002",(0,r.jsx)(n.code,{children:"metrics"}),"\u662f\u6c34\u5e73\u6269\u5bb9\u7684\u6307\u6807\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86 CPU \u4f7f\u7528\u7387\u3002",(0,r.jsx)(n.code,{children:"averageUtilization"}),"\u662f CPU \u4f7f\u7528\u7387\u7684\u76ee\u6807\u503c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u914d\u7f6e\u65b9\u5f0f\u4e0b\uff0c\u5982\u679c CPU \u7684\u5e73\u5747\u4f7f\u7528\u7387\u8d85\u8fc7 50%\uff0c\u90a3\u4e48\u5c31\u4f1a\u589e\u52a0 Pod \u7684\u6570\u91cf\u3002\u5982\u679c CPU \u7684\u5e73\u5747\u4f7f\u7528\u7387\u4f4e\u4e8e 50%\uff0c\u90a3\u4e48\u5c31\u4f1a\u51cf\u5c11 Pod \u7684\u6570\u91cf\u3002\u4f46\u662f\u65e0\u8bba\u5982\u4f55\uff0c\u6700\u591a\u53ea\u4f1a\u589e\u52a0\u5230 10 \u4e2a Pod\uff0c\u6700\u5c11\u53ea\u4f1a\u51cf\u5c11\u5230 1 \u4e2a Pod\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u5e38\u7528\u7684\u6307\u6807\u8fd8\u6709\u5185\u5b58\uff0c\u4f7f\u7528\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"metrics:\n- type: Resource\n  resource:\n    name: memory\n    target:\n      type: Utilization\n      averageUtilization: 50\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u7b97\u6cd5\u662f\u6ed1\u52a8\u7a97\u53e3\u7b97\u6cd5\u3002\u5982\u679c\u8981\u914d\u7f6e\u7b97\u6cd5\u7684\u53c2\u6570\uff0c\u4f7f\u7528",(0,r.jsx)(n.code,{children:"behavior"}),"\u5b57\u6bb5\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"behavior:\n  scaleDown:\n    stabilizationWindowSeconds: 300\n  scaleUp:\n    stabilizationWindowSeconds: 300\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u9762\u7684 behavior \u4e2d\uff0cscaleDown \u548c scaleUp \u5206\u522b\u662f\u7f29\u5bb9\u548c\u6269\u5bb9\u7684\u914d\u7f6e\u3002",(0,r.jsx)(n.code,{children:"stabilizationWindowSeconds"}),"\u662f\u7a33\u5b9a\u7a97\u53e3\u7684\u65f6\u95f4\uff0c\u5373\u4e0a\u6587\u5e73\u5747\u503c\u8ba1\u7b97\u7684\u65f6\u95f4\u7a97\u53e3\u3002\u5f53\u7136\uff0c\u8fd8\u6709\u66f4\u590d\u6742\u7684\u914d\u7f6e\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u751f\u4ea7\u7ea7\u65e0\u72b6\u6001\u670d\u52a1\u90e8\u7f72",children:"\u751f\u4ea7\u7ea7\u65e0\u72b6\u6001\u670d\u52a1\u90e8\u7f72"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u91cd\u65b0\u90e8\u7f72\u6211\u4eec\u4e4b\u524d\u7684\u7b80\u5355\u9879\u76ee\u3002\u6709\u4e00\u4e2a producer \u670d\u52a1\uff0c\u4e00\u4e2a\u5185\u5bb9\u968f\u65f6\u53ef\u4ee5\u4e22\u5f03\u7684\u6d88\u606f\u961f\u5217\uff0c\u4e00\u4e2a consumer \u670d\u52a1\u3002\u6211\u4eec\u5e0c\u671b\u6240\u6709\u7684\u670d\u52a1\u90fd\u662f\u65e0\u72b6\u6001\u670d\u52a1\uff0c\u53ef\u4ee5\u968f\u65f6\u91cd\u542f\uff0c\u4e14\u80fd\u81ea\u52a8\u6269\u5bb9\u3002\u6b64\u5916\uff0c\u914d\u7f6e\u4fe1\u606f\u4f7f\u7528 ConfigMap \u5b58\u50a8\uff0c\u654f\u611f\u4fe1\u606f\u4f7f\u7528 Secret \u5b58\u50a8\uff0c\u8fd8\u8981\u652f\u6301\u81ea\u52a8\u6269\u5bb9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u6211\u4eec\u4f7f\u7528 helm \u6765\u6253\u5305\uff0c\u5e76\u5b9e\u73b0\u6a21\u7248\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u53c2\u6570",children:"\u914d\u7f6e\u53c2\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u5e0c\u671b\u80fd\u4f7f\u7528 ConfigMap \u5b58\u50a8 RabbitMQ \u7684\u7528\u6237\u540d\u4ee5\u53ca\u961f\u5217\u540d\u79f0\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: rabbitmq-config\ndata:\n  username: guest\n  queue: food\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u8fd8\u6709\u4e00\u4e2a Secret\uff0c\u5b58\u50a8 RabbitMQ \u7684\u5bc6\u7801\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: rabbitmq-secret\ntype: Opaque\ndata:\n  password: password\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u670d\u52a1\u90e8\u7f72",children:"\u670d\u52a1\u90e8\u7f72"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u8981\u4fee\u6539\u4e00\u4e0b\u6211\u4eec\u7684 Producer \u4e0e Consumer \u7684\u8fde\u63a5\u90e8\u5206\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Hono } from 'hono'\nimport { connect } from 'amqplib'\nimport { config } from 'dotenv'\n\nconfig()\nconst mq = `amqp://${process.env.RABBITMQ_USERNAME}:${process.env.RABBITMQ_PASSWORD}@message-queue:5672`\n\n\nasync function connectMq() {\n  const connection = await connect(mq)\n  const channel = await connection.createChannel()\n  await channel.assertQueue(process.env.RABBITMQ_QUEUE)\n  return channel\n}\n\nconst channel = connectMq()\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u4fee\u6539 deployment \u90e8\u5206\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: producer\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: producer\n  template:\n    metadata:\n      labels:\n        app: producer\n    spec:\n      resources:\n        requests:\n          memory: "64Mi"\n          cpu: "100m"\n        limits:\n          memory: "128Mi"\n          cpu: "100m"\n      containers:\n      - name: producer\n        image: producer\n        env:\n        - name: RABBITMQ_USERNAME\n          valueFrom:\n            configMapKeyRef:\n              name: rabbitmq-config\n              key: username\n        - name: RABBITMQ_QUEUE\n          valueFrom:\n            configMapKeyRef:\n              name: rabbitmq-config\n              key: queue\n        - name: RABBITMQ_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: rabbitmq-secret\n              key: password\n'})}),"\n",(0,r.jsx)(n.p,{children:"Consumer \u90e8\u5206\u7c7b\u4f3c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u5bf9\u4e8e RabbitMQ\uff0c\u6211\u4eec\u540c\u6837\u8fdb\u884c\u914d\u7f6e\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: message-queue\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: message-queue\n  template:\n    metadata:\n      labels:\n        app: message-queue\n    spec:\n      resources:\n        requests:\n          memory: "64Mi"\n          cpu: "100m"\n        limits:\n          memory: "128Mi"\n          cpu: "100m"\n      containers:\n      - name: message-queue\n        image: rabbitmq\n        ports:\n        - containerPort: 5672\n        env:\n        - name: RABBITMQ_DEFAULT_USER\n          valueFrom:\n            configMapKeyRef:\n              name: rabbitmq-config\n              key: username\n        - name: RABBITMQ_DEFAULT_PASS\n          valueFrom:\n            secretKeyRef:\n              name: rabbitmq-secret\n              key: password\n'})}),"\n",(0,r.jsx)(n.p,{children:"Service \u5bf9\u8c61\u4e0d\u53d8\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6d41\u91cf\u76d1\u63a7",children:"\u6d41\u91cf\u76d1\u63a7"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u7ee7\u7eed\u4f7f\u7528\u4e4b\u524d\u7684\u7f51\u5173\u5373\u53ef\uff0c\u914d\u7f6e\u8fc7\u7a0b\u7701\u7565\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u8fc7\uff0c\u6211\u4eec\u524d\u9762\u6ca1\u6709\u4ecb\u7ecd\u5bf9\u8c03\u8bd5\u5f88\u91cd\u8981\u7684\u670d\u52a1\u94fe\u8def\u8ffd\u8e2a\u3002\u670d\u52a1\u94fe\u8def\u8ffd\u8e2a\u662f\u4e00\u79cd\u76d1\u63a7\u624b\u6bb5\uff0c\u7528\u4e8e\u76d1\u63a7\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528\u3002kiali \u662f Istio \u7684\u76d1\u63a7\u5de5\u5177\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6dfb\u52a0 Istio\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.23/samples/addons/kiali.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u5c31\u50cf\u6211\u4eec\u4e4b\u524d\u5b66\u4e60 MicroMeter \u4e00\u6837\uff0ckiali \u53ea\u662f\u4e00\u4e2a dashboard\u3002\u5b83\u9700\u8981\u4ece Prometheus \u548c Grafana \u4e2d\u83b7\u53d6\u6570\u636e\u3002\u6211\u4eec\u9700\u8981\u5148\u5b89\u88c5 Prometheus \u548c Grafana\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.23/samples/addons/grafana.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u53ca\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.23/samples/addons/prometheus.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u540e\u8005 prometheus \u7684\u9ed8\u8ba4\u914d\u7f6e\u9002\u5408\u5c0f\u96c6\u7fa4\u800c\u975e\u5927\u96c6\u7fa4\u3002\u5982\u679c\u96c6\u7fa4\u53d8\u5f97\u592a\u5927\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 Service Mesh \u6765\u4e3a\u96c6\u7fa4\u63d0\u4f9b\u57fa\u7840\u8bbe\u65bd\uff0c\u6211\u4eec\u4f1a\u5728\u540e\u9762\u4ecb\u7ecd Service Mesh\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u4f7f\u7528\uff0c",(0,r.jsx)(n.code,{children:"istioctl dashboard kiali"}),"\u6765\u6253\u5f00 kiali\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528\u5173\u7cfb\uff0c\u8c03\u7528\u56fe\uff0c\u6d41\u91cf\u7b49\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u5982\u679c\u6211\u4eec\u4f7f\u7528 helm\uff0c\u5e94\u8be5\u628a\u4e0a\u9762\u7684\u6587\u4ef6\u653e\u5165 template \u4e2d\uff0c\u7136\u540e\u4f7f\u7528",(0,r.jsx)(n.code,{children:"helm install"}),"\u6765\u5b89\u88c5\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u8fc7\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u6d88\u606f\u961f\u5217\u7684\u6d41\u91cf\u6ca1\u6709\u663e\u793a\u51fa\u6765\u3002\u6211\u4eec\u9700\u8981\u7ed9 RabbitMQ \u6dfb\u52a0\u63d2\u4ef6\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rabbitmq-plugins enable rabbitmq_prometheus\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u9700\u8981\u6211\u4eec\u4f7f\u7528 dockerfile \u542f\u52a8 RabbitMQ \u65f6\u6dfb\u52a0\u63d2\u4ef6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:"FROM rabbitmq:4.0-rc-management\n\nRUN rabbitmq-plugins enable rabbitmq_prometheus\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u4f7f\u7528\u8fd9\u4e2a dockerfile \u6765\u6784\u5efa\u955c\u50cf\u5373\u53ef\u3002\u91cd\u542f\u6d88\u606f\u961f\u5217\u540e\uff0c\u8bb0\u5f97\u91cd\u542f Consumer \u548c Producer\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u52a8\u6269\u5bb9",children:"\u81ea\u52a8\u6269\u5bb9"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u4f7f\u7528 HorizontalPodAutoscaler \u6765\u5b9e\u73b0\u81ea\u52a8\u6269\u5bb9\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: producer-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: producer\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 50\n"})}),"\n",(0,r.jsx)(n.p,{children:"consumer \u540c\u7406\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>l});var s=a(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);