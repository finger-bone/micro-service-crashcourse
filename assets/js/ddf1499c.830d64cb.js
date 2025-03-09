"use strict";(self.webpackChunknotes_template=self.webpackChunknotes_template||[]).push([[1857],{704:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-3-b2076a72f0bb6b77351d7c6c996ebfde.png"},1424:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-8-3255e35a0ecebe3b709e24942a27c15d.png"},3132:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-10e953ba331b932afd747ef61e5a6384.png"},4210:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-1-ba6d5fa007d8d1a84a51387ff1b35498.png"},4412:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-4-353351b2e804e1be65ddaba54f295faf.png"},5094:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-5-1244e6c1211013e271d93ae372e052d7.png"},5172:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-7-e23748d0819ae21e4218da647cc84394.png"},6334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"15","title":"Spring Security OAuth \u8ba4\u8bc1\u4e0e KeyCloak","description":"\u4e0a\u6b21\u4ecb\u7ecd\u4e86\u5355\u4f53\u5e94\u7528\u4f7f\u7528 Spring Security \u7684\u57fa\u672c\u914d\u7f6e\uff0c\u8fd9\u6b21\u8bb2\u89e3 OAuth2 \u6846\u67b6\u7684\u4f7f\u7528\u3002","source":"@site/docs/15.md","sourceDirName":".","slug":"/15","permalink":"/micro-service-crashcourse/docs/15","draft":false,"unlisted":false,"editUrl":"https://github.com/finger-bone/micro-service-crashcourse/blob/main/docs/15.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Spring Security","permalink":"/micro-service-crashcourse/docs/14"},"next":{"title":"Rabbit MQ","permalink":"/micro-service-crashcourse/docs/16"}}');var r=t(4848),c=t(8453);const o={},s="Spring Security OAuth \u8ba4\u8bc1\u4e0e KeyCloak",l={},a=[{value:"OAuth2",id:"oauth2",level:2},{value:"OIDC",id:"oidc",level:2},{value:"Spring Security OAuth2 \u6388\u6743\u7801\u6a21\u5f0f\u767b\u9646",id:"spring-security-oauth2-\u6388\u6743\u7801\u6a21\u5f0f\u767b\u9646",level:2},{value:"\u521b\u5efa OIDC \u6388\u6743\u670d\u52a1\u5668",id:"\u521b\u5efa-oidc-\u6388\u6743\u670d\u52a1\u5668",level:2},{value:"\u4f7f\u7528 OIDC \u6388\u6743\u670d\u52a1\u5668",id:"\u4f7f\u7528-oidc-\u6388\u6743\u670d\u52a1\u5668",level:2},{value:"\u4f7f\u7528 OIDC \u8d44\u6e90\u670d\u52a1\u5668",id:"\u4f7f\u7528-oidc-\u8d44\u6e90\u670d\u52a1\u5668",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"spring-security-oauth-\u8ba4\u8bc1\u4e0e-keycloak",children:"Spring Security OAuth \u8ba4\u8bc1\u4e0e KeyCloak"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u6b21\u4ecb\u7ecd\u4e86\u5355\u4f53\u5e94\u7528\u4f7f\u7528 Spring Security \u7684\u57fa\u672c\u914d\u7f6e\uff0c\u8fd9\u6b21\u8bb2\u89e3 OAuth2 \u6846\u67b6\u7684\u4f7f\u7528\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["OAuth2 \u53ea\u662f\u4e00\u5957\u6388\u6743\u6846\u67b6\uff0c\u4e0d\u5305\u542b\u8ba4\u8bc1\u529f\u80fd\u3002Spring Security \u4e3a OAuth2 \u63d0\u4f9b\u4e86\u652f\u6301\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5b9e\u73b0 OAuth2 \u7684\u8ba4\u8bc1\u4e0e\u9274\u6743\u3002\u5176\u5b83\u8bed\u8a00\u4e5f\u6709 OAuth2 \u6846\u67b6\u3002\u4f8b\u5982\uff0cPython \u6709 ",(0,r.jsx)(n.code,{children:"authlib"}),"\uff0cGo \u6709 ",(0,r.jsx)(n.code,{children:"golang.org/x/oauth2"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 KeyCloak \u4f5c\u4e3a\u6388\u6743\u670d\u52a1\u5668\uff0cKeyCloak \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u8eab\u4efd\u548c\u8bbf\u95ee\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002KeyCloak \u4e3a OAuth2 \u548c OIDC \u63d0\u4f9b\u4e86\u652f\u6301\u3002OIDC \u662f OAuth2 \u7684\u4e00\u4e2a\u6269\u5c55\uff0c\u4e3a OAuth2 \u6dfb\u52a0\u4e86\u7528\u6237\u4fe1\u606f\u7684\u83b7\u53d6\uff0c\u5e76\u589e\u5f3a\u4e86\u5b89\u5168\u6027\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"oauth2",children:"OAuth2"}),"\n",(0,r.jsxs)(n.p,{children:["OAuth2 \u662f\u4e00\u4e2a\u5f00\u653e\u6807\u51c6\uff0c\u5141\u8bb8\u7528\u6237\u6388\u6743\u7b2c\u4e09\u65b9\u5e94\u7528\u8bbf\u95ee\u4ed6\u4eec\u5b58\u50a8\u5728\u53e6\u5916\u7684\u670d\u52a1\u63d0\u4f9b\u8005\u4e0a\u7684\u4fe1\u606f\uff0c\u800c\u4e0d\u9700\u8981\u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u63d0\u4f9b\u7ed9\u7b2c\u4e09\u65b9\u5e94\u7528\u3002OAuth2 \u4e3a\u7528\u6237\u8d44\u6e90\u7684\u6388\u6743\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b89\u5168\u7684\u3001\u5f00\u653e\u548c\u7b80\u5355\u7684\u6807\u51c6\u3002\u8fd9\u4e2a\u6807\u51c6\u7684\u6587\u6863\u5728 ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749",children:"RFC 6749"})," \u4e2d\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7b80\u5355\u6765\u8bf4\uff0cOAuth2 \u4e2d\u6709\u56db\u4e2a\u89d2\u8272\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8d44\u6e90\u62e5\u6709\u8005\uff08Resource Owner\uff09\uff1a\u7528\u6237"}),"\n",(0,r.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\uff08Client\uff09\uff1a\u7b2c\u4e09\u65b9\u5e94\u7528"}),"\n",(0,r.jsx)(n.li,{children:"\u6388\u6743\u670d\u52a1\u5668\uff08Authorization Server\uff09\uff1a\u7528\u4e8e\u8ba4\u8bc1\u7528\u6237\u5e76\u6388\u6743\u5ba2\u6237\u7aef\u8bbf\u95ee\u8d44\u6e90\u7684\u670d\u52a1\u5668"}),"\n",(0,r.jsx)(n.li,{children:"\u8d44\u6e90\u670d\u52a1\u5668\uff08Resource Server\uff09\uff1a\u5b58\u50a8\u8d44\u6e90\u7684\u670d\u52a1\u5668"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u53ef\u4ee5\u6388\u6743\u670d\u52a1\u5668\u548c\u8d44\u6e90\u670d\u52a1\u5668\u53ef\u4ee5\u662f\u540c\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u8fd9\u6837\u5c31\u662f\u4e00\u4e2a\u5355\u4f53\u5e94\u7528\u3002\u5982\u679c\u4e0d\u5728\u540c\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\uff0c\u5c31\u662f\u5fae\u670d\u52a1\u67b6\u6784\u3002\u73b0\u5728\u5f88\u591a\u7f51\u7ad9\u90fd\u63d0\u4f9b\u4e86 OAuth2 \u7684\u6388\u6743\u670d\u52a1\uff0c\u4f8b\u5982 GitHub\uff0cGoogle\u3002\u56fd\u5185\u7684 Gitee \u4e5f\u63d0\u4f9b\u4e86 OAuth2 \u7684\u6388\u6743\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"OAuth2 \u4e2d\u6709\u56db\u79cd\u6388\u6743\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6388\u6743\u7801\u6a21\u5f0f\uff08Authorization Code\uff09\uff1a\u5177\u4f53\u6d41\u7a0b\u4e3a\uff0c\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411\u5230\u6388\u6743\u670d\u52a1\u5668\uff0c\u7528\u6237\u767b\u5f55\u5e76\u6388\u6743\uff0c\u6388\u6743\u670d\u52a1\u5668\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\uff0c\u5e76\u63d0\u4f9b\u6388\u6743\u7801\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u6388\u6743\u7801\u83b7\u53d6 Token\uff0c\u518d\u4f7f\u7528 Token \u83b7\u53d6\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7b80\u5316\u6a21\u5f0f\uff08Implicit\uff09\uff1a\u5177\u4f53\u6d41\u7a0b\u4e3a\uff0c\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411\u5230\u6388\u6743\u670d\u52a1\u5668\uff0c\u7528\u6237\u767b\u5f55\u5e76\u6388\u6743\uff0c\u6388\u6743\u670d\u52a1\u5668\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u76f4\u63a5\u83b7\u53d6 Token\uff0c\u518d\u4f7f\u7528 Token \u83b7\u53d6\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5bc6\u7801\u6a21\u5f0f\uff08Resource Owner Password Credentials\uff09\uff1a\u9002\u7528\u4e8e\u53d7\u4fe1\u4efb\u7684\u5ba2\u6237\u7aef\u3002\u5ba2\u6237\u7aef\u76f4\u63a5\u4f7f\u7528\u7528\u6237\u540d\u548c\u5bc6\u7801\u83b7\u53d6 Token\uff0c\u518d\u4f7f\u7528 Token \u83b7\u53d6\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u6a21\u5f0f\uff08Client Credentials\uff09\uff1a\u5ba2\u6237\u7aef\u76f4\u63a5\u4f7f\u7528\u5ba2\u6237\u7aef ID \u548c\u5ba2\u6237\u7aef\u5bc6\u7801\u83b7\u53d6 Token\uff0c\u518d\u4f7f\u7528 Token \u83b7\u53d6\u8d44\u6e90\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u524d\u4e09\u79cd\u6a21\u5f0f\u90fd\u6709\u5ba2\u6237\u7aef\u7684\u53c2\u4e0e\uff0c\u6700\u540e\u4e00\u79cd\u6a21\u5f0f\u6ca1\u6709\u5ba2\u6237\u7aef\u7684\u53c2\u4e0e\uff0c\u5373\u6388\u6743\u670d\u52a1\u5668\u7b7e\u53d1\u4e00\u4e2a\u56fa\u5b9a\u7684 secret\uff0c\u8fd9\u4e2a secret \u53ef\u4ee5\u76f4\u63a5\u7528\u6765\u83b7\u53d6 token\uff0c\u56e0\u6b64\u662f\u7528\u4e8e\u670d\u52a1\u5bf9\u670d\u52a1\u7684\u901a\u4fe1\u3002\u800c\u524d\u4e09\u79cd\u90fd\u662f\u5ba2\u6237\u7aef\u548c\u7528\u6237\u7684\u901a\u4fe1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 OAuth2 \u4e2d\uff0c\u9a8c\u8bc1\u4f7f\u7528\u7684 Token \u901a\u5e38\u662f JWT\u3002\u4e0d\u8fc7 JWS\uff0c\u5373 JSON Web Signature\uff0c\u4e5f\u662f\u4e00\u79cd\u5e38\u7528\u7684 Token \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"oidc",children:"OIDC"}),"\n",(0,r.jsxs)(n.p,{children:["OIDC\uff0c\u5373 OpenID Connect\uff0c\u662f OAuth2 \u7684\u4e00\u4e2a\u6269\u5c55\u3002OIDC \u4e3a OAuth2 \u6dfb\u52a0\u4e86\u7528\u6237\u4fe1\u606f\u7684\u83b7\u53d6\u3002OIDC \u4e3a OAuth2 \u6dfb\u52a0\u4e86\u4e00\u4e2a ID Token\uff0c\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002OIDC \u7684\u6587\u6863\u5728 ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OIDC"})," \u4e2d\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"OIDC \u4e0e OAuth2 \u7684\u4e3b\u8981\u533a\u522b\u6709\uff0c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OIDC \u53ea\u4f7f\u7528\u6388\u6743\u7801\u6a21\u5f0f\u548c\u5ba2\u6237\u7aef\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"OIDC \u6dfb\u52a0\u4e86\u7528\u6237\u4fe1\u606f\u7684 scope\uff0c\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"OIDC \u8fd8\u80fd\u751f\u4ea7\u7528\u6237\u4ee4\u724c\uff0c\u7528\u4e8e\u7528\u6237\u8ba4\u8bc1\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"spring-security-oauth2-\u6388\u6743\u7801\u6a21\u5f0f\u767b\u9646",children:"Spring Security OAuth2 \u6388\u6743\u7801\u6a21\u5f0f\u767b\u9646"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\u6211\u4eec\u4ecb\u7ecd\u5982\u4f55\u5728 Spring Security \u4e2d\u914d\u7f6e OAuth2 \u5ba2\u6237\u7aef\u3002\u8fd9\u91cc\u6211\u4eec\u5c06\u4f1a\u4f7f\u7528 GitHub \u4f5c\u4e3a\u6388\u6743\u670d\u52a1\u5668\u3002\u7531\u4e8e\u5728\u540e\u7aef\u5f00\u53d1\u4e2d\uff0c\u51e0\u4e4e\u53ea\u4f1a\u7528\u5230\u6388\u6743\u7801\u6a21\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u53ea\u4ecb\u7ecd\u8fd9\u4e00\u79cd\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\uff0c\u52a0\u5165\u4f9d\u8d56\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"implementation 'org.springframework.boot:spring-boot-starter-oauth2-client'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u5220\u9664\u5176\u5b83\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u6dfb\u52a0 OAuth2 \u767b\u9646\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Bean\npublic SecurityWebFilterChain securityWebFilterChain(\n    ServerHttpSecurity http\n) {\n    SecurityWebFilterChain chain = http\n    .httpBasic(basic -> basic.disable())\n    .formLogin(form -> form.disable())\n    .logout(logout -> logout.disable())\n    .oauth2Login(Customizer.withDefaults())\n    // .addFilterBefore(filter, SecurityWebFiltersOrder.AUTHENTICATION)\n    .authorizeExchange(exchanges -> exchanges\n            .pathMatchers("/resource/public").permitAll()\n            .pathMatchers("/resource/private").authenticated()\n            .pathMatchers("/resource/admin").hasRole("ADMIN")\n            .anyExchange().permitAll()\n    )\n    .csrf(csrf -> csrf.disable())\n    .cors(Customizer.withDefaults())\n    .securityContextRepository(\n        NoOpServerSecurityContextRepository.getInstance()\n    )\n    .build();\n    return chain;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 GitHub \u7684\u6388\u6743\u670d\u52a1\u5668\uff0c\u9700\u8981\u5411 GitHub \u7533\u8bf7\u4e00\u4e2a OAuth2 \u5e94\u7528\uff0c\u83b7\u53d6 Client ID \u548c Client Secret\u3002\u7533\u8bf7\u5730\u5740\u5728",(0,r.jsx)(n.a,{href:"https://github.com/settings/applications/new",children:"\u6b64\u5904"}),"\uff0ccallback URL \u5fc5\u987b\u586b\u5199",(0,r.jsx)(n.code,{children:"{baseUrl}/login/oauth2/code/{registrationId}"}),"\uff0c\u73b0\u5728\u5373",(0,r.jsx)(n.code,{children:"http://localhost:8080/login/oauth2/code/github"}),"\u3002\u8fd9\u4e2a URL \u662f\u6388\u6743\u670d\u52a1\u5668\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\u7684 URL\uff0c\u5373\u63a5\u6536\u6388\u6743\u7801\u7684 URL\uff1bhomepage URL \u586b\u5199",(0,r.jsx)(n.code,{children:"http://localhost:8080"}),"\uff0c\u8fd9\u4e2a URL \u53ea\u662f\u7528\u4e8e homepage \u68c0\u67e5\uff0c\u4f8b\u5982\u63d0\u4f9b\u7ed9 GitHub \u67e5\u770b\u662f\u5426\u5c5e\u4e8e GitHub \u8ba4\u8bc1\u7684\u5e94\u7528\u7b49\u3002\u5982\u679c\u4fee\u6539\u4e86\u7aef\u53e3\u8981\u4e00\u5e76\u4fee\u6539\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u5728 ",(0,r.jsx)(n.code,{children:"application.yml"})," \u4e2d\u914d\u7f6e\uff0c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          github:\n            clientId: ${clientId}\n            clientSecret: ${clientSecret}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e4b\u540e\u518d\u8bbf\u95ee ",(0,r.jsx)(n.code,{children:"http://localhost:8080/resource/private"}),"\uff0c\u4f1a\u91cd\u5b9a\u5411\u5230 GitHub \u767b\u9646\u9875\u9762\u3002\u6388\u6743\u767b\u9646\u540e\uff0c\u4f1a\u91cd\u5b9a\u5411\u5230 ",(0,r.jsx)(n.code,{children:"http://localhost:8080/login/oauth2/code/github"}),"\uff0c\u7136\u540e\u518d\u91cd\u5b9a\u5411\u5230 ",(0,r.jsx)(n.code,{children:"http://localhost:8080/resource/callback"}),"\uff0c\u8fd9\u65f6\u5019\u80fd\u62ff\u5230 ",(0,r.jsx)(n.code,{children:"code"}),"\u3002\u8fdb\u800c\u53ef\u4ee5\u8bbf\u95ee GitHub \u7684\u8d44\u6e90\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u5b9e\u73b0\u4e86 OAuth2 \u6388\u6743\u7801\u6a21\u5f0f\u7684\u5ba2\u6237\u7aef\u3002\u4e4b\u524d URL \u4e2d\u7684",(0,r.jsx)(n.code,{children:"code"}),"\u4e5f\u5c31\u4ee3\u8868\u4e86\u6388\u6743\u7801\u6a21\u5f0f\u3002\u5927\u90e8\u5206\u7684\u64cd\u4f5c\u90fd\u5df2\u7ecf\u88ab\u5904\u7406\u597d\u4e86\uff0c\u4e0d\u5fc5\u6211\u4eec\u8fc7\u591a\u5173\u6ce8\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u8fd9\u91cc\u662f\u5728\u540e\u7aef\u4f5c\u4e3a\u5ba2\u6237\u7aef\u8fdb\u884c\u6388\u6743\u7801\u6a21\u5f0f\u767b\u5f55\u4ee5\u8bbf\u95ee\u8d44\u6e90\u670d\u52a1\u5668\u3002\u5982\u679c\u540e\u7aef\u4f5c\u4e3a\u8d44\u6e90\u670d\u52a1\u5668\uff0c\u89c1\u4e0b\u6587\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa-oidc-\u6388\u6743\u670d\u52a1\u5668",children:"\u521b\u5efa OIDC \u6388\u6743\u670d\u52a1\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u6388\u6743\u670d\u52a1\u5668\u6709\u8bb8\u591a\u9009\u62e9\uff0c\u53ef\u4ee5\u7528 SaaS\uff0c\u4f8b\u5982 Auth0\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u642d\u5efa\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 KeyClock\u3002\u5176 Docker \u955c\u50cf\u5728",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/keycloak/keycloak",children:"\u6b64\u5904"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"services:\n  keyclock:\n    image: keycloak/keycloak\n    environment:\n      - KEYCLOAK_ADMIN=admin\n      - KEYCLOAK_ADMIN_PASSWORD=pwd\n    ports:\n      - 8080:8080\n    command: start-dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u540e\uff0c\u9996\u5148\u5728\u5de6\u4e0a\u89d2\u70b9\u51fb\u4e0b\u62c9\u6846\uff0c\u521b\u5efa\u4e00\u4e2a Realm\uff0c\u4e00\u4e2a Realm \u5373\u4e00\u4e2a\u72ec\u7acb\u7684\u6388\u6743\u670d\u52a1\u5668\u3002\u7136\u540e\u5728\u5de6\u4fa7\u9009\u62e9 Clients\uff0c\u521b\u5efa\u4e00\u4e2a Client\uff0cClient ID \u5373\u5ba2\u6237\u7aef ID\uff0cClient Secret \u5373\u5ba2\u6237\u7aef\u5bc6\u7801\u3002\u7136\u540e\u5728\u5de6\u4fa7\u9009\u62e9 Users\uff0c\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u7528\u6237\u540d\u548c\u5bc6\u7801\u5373\u4e3a\u7528\u6237\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u521b\u5efa Realm",src:t(3132).A+"",width:"2590",height:"882"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u5728\u5de6\u4fa7 clients \u91cc\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Client\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Client \u521b\u5efa",src:t(4210).A+"",width:"2600",height:"1158"})}),"\n",(0,r.jsx)(n.p,{children:"\u540d\u5b57\u4efb\u610f\uff0c\u5176\u5b83\u4fe1\u606f\u9ed8\u8ba4\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\uff0c\u5c06 Access Settings \u4e2d Root URL \u8bbe\u7f6e\u597d\u3002\u76ee\u524d\u53ef\u4ee5\u968f\u610f\u8bbe\u7f6e\uff0c\u4f46\u662f\u4e4b\u540e\u7684 Callback URL \u5fc5\u987b\u4e0e\u8fd9\u4e2a Root URL \u6709\u4e00\u6837\u7684\u6839\u57df\u540d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u5728\u5de6\u4fa7 Users \u91cc\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7528\u6237\u3002\u518d\u70b9\u8fdb\u65b0\u521b\u5efa\u7684\u7528\u6237\uff0c\u9009\u62e9 Credential \u754c\u9762\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u5bc6\u7801\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u518d\u8fdb\u5165\u5de6\u4fa7 Realm Settings\uff0c\u5728\u6700\u4e0b\u65b9\u627e\u5230 Endpoint\uff0c\u70b9\u8fdb\u53bb\u540e\u4f1a\u770b\u5230\u4e00\u4e2a json \u5bf9\u8c61\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"issuer":"http://localhost:8080/realms/demo","authorization_endpoint":"http://localhost:8080/realms/demo/protocol/openid-connect/auth","token_endpoint":"http://localhost:8080/realms/demo/protocol/openid-connect/token","introspection_endpoint":"http://localhost:8080/realms/demo/protocol/openid-connect/token/introspect","userinfo_endpoint":"http://localhost:8080/realms/demo/protocol/openid-connect/userinfo","end_session_endpoint":"http://localhost:8080/realms/demo/protocol/openid-connect/logout","frontchannel_logout_session_supported":true,"frontchannel_logout_supported":true,"jwks_uri":"http://localhost:8080/realms/demo/protocol/openid-connect/certs","check_session_iframe": ...}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684",(0,r.jsx)(n.code,{children:"authorization_endpoint"}),"\u5c31\u662f\u6388\u6743\u670d\u52a1\u5668\u7684\u5730\u5740\uff0c",(0,r.jsx)(n.code,{children:"token_endpoint"}),"\u5c31\u662f\u83b7\u53d6 Token \u7684\u5730\u5740\u3002\u4e0b\u9762\u6211\u4eec\u4f1a\u7528\u5230\u7684\u76f8\u5173\u4fe1\u606f\u90fd\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u5c31\u5df2\u7ecf\u53ef\u4ee5\u7528\u4e0a\u9762\u4ecb\u7ecd\u7684\u65b9\u5f0f\u8bf7\u6c42\u6388\u6743\u670d\u52a1\u5668\u4e86\u3002\u4e0a\u9762\u7684 Json \u4e2d\u5df2\u7ecf\u7ed9\u51fa\u4e86\u6388\u6743\u670d\u52a1\u5668\u7684\u5730\u5740\uff0c\u548c token \u7684\u83b7\u53d6\u5730\u5740\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u6dfb\u52a0\u6216\u5220\u9664\u7528\u6237\u7b49\u64cd\u4f5c\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 KeyClock \u7684 REST API \u6765\u5b9e\u73b0\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-oidc-\u6388\u6743\u670d\u52a1\u5668",children:"\u4f7f\u7528 OIDC \u6388\u6743\u670d\u52a1\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u5728 Spring \u9879\u76ee\u4e2d\uff0c\u53ea\u9700\u8981\u5c06\u4e4b\u524d\u7684 Client \u6362\u6389\u5373\u53ef\u3002\u5728 ",(0,r.jsx)(n.code,{children:"application.yml"})," \u4e2d\u914d\u7f6e\uff0c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          keycloak:\n            clientId: ${clientId}\n            clientSecret: ${clientSecret}\n            clientName: keycloak\n            provider: keycloak\n            redirectUri: "{baseUrl}/login/oauth2/code/{registrationId}"\n            authorizationGrantType: authorization_code\n            scope: openid\n        provider:\n          keycloak:\n            authorizationUri: http://localhost:8080/realms/demo/protocol/openid-connect/auth\n            tokenUri: http://localhost:8080/realms/demo/protocol/openid-connect/token\n            jwkSetUri: http://localhost:8080/realms/demo/protocol/openid-connect/certs\n            userInfoUri: http://localhost:8080/realms/demo/protocol/openid-connect/userinfo\n            userNameAttribute: preferred_username\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684",(0,r.jsx)(n.code,{children:"client"}),"\u5b57\u6bb5\u4e4b\u524d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\u3002\u8fd9\u91cc\u7684",(0,r.jsx)(n.code,{children:"provider"}),"\u662f\u63d0\u4f9b\u7528\u6237\u4fe1\u606f\u7684\u5730\u5740\uff0c",(0,r.jsx)(n.code,{children:"jwkSetUri"}),"\u662f\u63d0\u4f9b JWT \u7684\u5730\u5740\uff0c",(0,r.jsx)(n.code,{children:"userInfoUri"}),"\u662f\u63d0\u4f9b\u7528\u6237\u4fe1\u606f\u7684\u5730\u5740\uff0c",(0,r.jsx)(n.code,{children:"userNameAttribute"}),"\u662f\u7528\u6237\u4fe1\u606f\u4e2d\u7684\u7528\u6237\u540d\u5b57\u6bb5\u3002\u8fd9\u4e9b\u5b57\u6bb5\u90fd\u53ef\u4ee5\u5728\u4e0a\u9762\u7684 Endpoint \u4e2d\u627e\u5230\u3002\u6b64\u5916\uff0c\u5c3d\u7ba1\u6211\u4eec\u7684 scope \u662f\u7528\u7684\u9ed8\u8ba4\u7684\uff0c\u4f46\u4e0d\u80fd\u7701\u7565\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d\uff0c\u6211\u4eec\u8fd8\u6ca1\u7ed9\u7528\u6237\u63d0\u4f9b\u591a\u4f59\u7684\u4fe1\u606f\u3002\u73b0\u5728\u5728 KeyCloak \u7684 Client Scope \u91cc\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Scope\uff0c\u6253\u5f00 include in token scope\u3002\u8fd9\u6837\u4f1a\u5728\u8ba4\u8bc1\u65f6\u5c31\u53ef\u4ee5\u540c\u65f6\u5728 JWT \u91cc\u8fd4\u56de\u8fd9\u6761\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Scope \u8bbe\u7f6e",src:t(704).A+"",width:"2998",height:"1618"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u4e3a\u5b83\u521b\u5efa\u4e00\u4e2a Mapper\uff0c\u8fd9\u91cc\u6211\u4eec\u9009\u62e9 User Attribute\u3002\u8fd9\u91cc\u6211\u4eec\u6240\u6709\u7684 key \u7edf\u4e00\u7528 ",(0,r.jsx)(n.code,{children:"is_admin"}),"\u3002\u8fd9\u6837\uff0cJWT \u4e2d",(0,r.jsx)(n.code,{children:"is_admin"}),"\u7684\u503c\u4f1a\u88ab\u6620\u5c04\u5230\u7528\u6237\u7684",(0,r.jsx)(n.code,{children:"is_admin"}),"\u5c5e\u6027\u3002\u8fd9\u91cc\u7684\u903b\u8f91\u662f\uff0cJWT \u4e2d Claim \u540d\u4e3a Token Claim Name \u7684\u4f1a\u88ab\u6620\u5c04\u5230\u7528\u6237\u7684 User Attribute Name\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Mapper \u8bbe\u7f6e",src:t(4412).A+"",width:"2976",height:"1558"})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u7ed9\u7528\u6237\u8bbe\u5b9a Attribute\uff0c\u9700\u8981\u628a\u7528\u6237\u52a0\u5165\u7ec4\u4e2d\uff0c\u7136\u540e\u5728\u7ec4\u91cc\u8bbe\u7f6e Scope \u7684\u503c\u3002\u8fd9\u6837\u7528\u6237\u5c31\u4f1a\u6709\u8fd9\u4e2a Scope \u7684\u503c\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Group \u521b\u5efa",src:t(5094).A+"",width:"2994",height:"1316"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u5728 Members \u91cc\uff0c\u628a admin \u52a0\u8fdb\u53bb\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u6dfb\u52a0\u6210\u5458",src:t(9069).A+"",width:"2966",height:"1400"})}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\uff0c\u5728 Client \u91cc\uff0c\u5c06\u8fd9\u4e2a Scope \u52a0\u8fdb\u53bb\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Client \u6dfb\u52a0 Scope",src:t(5172).A+"",width:"2978",height:"1590"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u5982\u679c\u8bbe\u7f6e\u7684 Default\uff0c\u8bf7\u6c42\u65f6\u5c31\u4f1a\u81ea\u52a8\u52a0\u4e0a\u8fd9\u4e2a Scope\u3002\u5982\u679c\u8bbe\u7f6e\u7684 Optional\uff0c\u8bf7\u6c42\u65f6\u4f1a\u6839\u636e Scope \u53c2\u6570\u6765\u51b3\u5b9a\u662f\u5426\u52a0\u4e0a\u8fd9\u4e2a Scope\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u8fdb\u5165\u5230 Client Scope \u7684 Evaluate \u754c\u9762\uff0c\u53ef\u4ee5\u770b\u5230 token \u91cc\u5df2\u7ecf\u80fd\u6b63\u786e\u8fd4\u56de",(0,r.jsx)(n.code,{children:"is_admin"}),"\u4e86\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Scope Evaluate",src:t(1424).A+"",width:"2994",height:"1336"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-oidc-\u8d44\u6e90\u670d\u52a1\u5668",children:"\u4f7f\u7528 OIDC \u8d44\u6e90\u670d\u52a1\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u8fc7\uff0c\u5927\u90e8\u5206\u65f6\u5019\u6211\u4eec\u7684\u540e\u7aef\u662f\u8d44\u6e90\u670d\u52a1\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: http://localhost:8080/realms/demo\n          jwk-set-uri: http://localhost:8080/realms/demo/protocol/openid-connect/certs\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Configuration\n@EnableWebFluxSecurity\npublic class SecurityConfig {\n    @Bean\n    SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {\n        http\n            .oauth2ResourceServer(Customizer.withDefaults())\n            .authorizeExchange(exchanges -> exchanges\n                .pathMatchers("/resource/public").permitAll()\n                .pathMatchers("/resource/private").authenticated()\n                .pathMatchers("/resource/admin").hasAnyAuthority("SCOPE_is_admin")\n                .anyExchange().permitAll()\n            );\n        return http.build();\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u5c31\u80fd\u901a\u8fc7",(0,r.jsx)(n.code,{children:"/resource/admin"}),"\u6765\u8bbf\u95ee\u9700\u8981",(0,r.jsx)(n.code,{children:"is_admin"})," Scope \u7684\u8d44\u6e90\u65f6\uff0c\u5c31\u5fc5\u987b\u6709\u6765\u81ea\u6388\u6743\u670d\u52a1\u5668\u7684 bearer token\u3002\u5177\u4f53\u5982\u4f55\u83b7\u5f97 token \u524d\u6587\u4ee5\u8bf4\u660e\uff0c\u4e0d\u8fc7\u4e00\u822c\u60c5\u51b5\u4e0b\u5927\u591a\u662f\u5728\u524d\u7aef\u83b7\u53d6 token\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}},9069:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-6-021cf441505f7a5b19b0602d2030391d.png"}}]);