"use strict";(self.webpackChunknotes_template=self.webpackChunknotes_template||[]).push([[1864],{3460:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"19","title":"\u540e\u7aef\u6846\u67b6\u4e00\u89c8","description":"\u73b0\u5728\uff0c\u6211\u4eec\u5bf9 Spring \u4e0e Java \u6280\u672f\u6808\u7684\u5b66\u4e60\u6b63\u5f0f\u7ed3\u675f\u3002\u4e0b\u4e00\u90e8\u5206\u662f\u57fa\u4e8e k8s \u7684\u5fae\u670d\u52a1\u3002\u4f46\u4e3a\u4e86\u907f\u514d\u5927\u91cf\u7684 boilerplate\uff0c\u6211\u4eec\u4e0d\u518d\u4f7f\u7528 Spring \u5f00\u53d1\u3002\u4e4b\u540e\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528 Javascript \u7684 hono \u6846\u67b6\u6765\u8fdb\u884c k8s \u5fae\u670d\u52a1\u7684\u5b9e\u73b0\u3002","source":"@site/docs/19.md","sourceDirName":".","slug":"/19","permalink":"/micro-service-crashcourse/docs/19","draft":false,"unlisted":false,"editUrl":"https://github.com/finger-bone/micro-service-crashcourse/blob/main/docs/19.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"gRPC","permalink":"/micro-service-crashcourse/docs/18"},"next":{"title":"k8s \u65e0\u72b6\u6001\u670d\u52a1\u57fa\u672c\u90e8\u7f72","permalink":"/micro-service-crashcourse/docs/20"}}');var c=r(4848),l=r(8453);const o={},t="\u540e\u7aef\u6846\u67b6\u4e00\u89c8",a={},p=[{value:"Spring",id:"spring",level:2},{value:"Express",id:"express",level:2},{value:"Hono",id:"hono",level:2},{value:"Fiber",id:"fiber",level:2},{value:"FastAPI",id:"fastapi",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u540e\u7aef\u6846\u67b6\u4e00\u89c8",children:"\u540e\u7aef\u6846\u67b6\u4e00\u89c8"})}),"\n",(0,c.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u5bf9 Spring \u4e0e Java \u6280\u672f\u6808\u7684\u5b66\u4e60\u6b63\u5f0f\u7ed3\u675f\u3002\u4e0b\u4e00\u90e8\u5206\u662f\u57fa\u4e8e k8s \u7684\u5fae\u670d\u52a1\u3002\u4f46\u4e3a\u4e86\u907f\u514d\u5927\u91cf\u7684 boilerplate\uff0c\u6211\u4eec\u4e0d\u518d\u4f7f\u7528 Spring \u5f00\u53d1\u3002\u4e4b\u540e\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528 Javascript \u7684 hono \u6846\u67b6\u6765\u8fdb\u884c k8s \u5fae\u670d\u52a1\u7684\u5b9e\u73b0\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8fd9\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u4f1a\u5bf9\u540e\u7aef\u6846\u67b6\u8fdb\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u6982\u89c8\u3002\u8fd9\u4e9b\u6846\u67b6\u90fd\u662f\u540e\u7aef\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u6846\u67b6\uff0c\u4f46\u662f\u6211\u4eec\u4e0d\u4f1a\u6df1\u5165\u8bb2\u89e3\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u73b0\u4ee3\u7684\u540e\u7aef\u6846\u67b6\u57fa\u672c\u90fd\u662f\u57fa\u4e8e\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\uff0c\u800c\u975e\u50cf Spring \u4e00\u6837\u9762\u5411\u5bf9\u8c61\u5e76\u57fa\u4e8e\u6ce8\u89e3\u3002\u8bda\u7136\uff0cSpring \u73b0\u5728\u4e5f\u63d0\u4f9b\u4e86\u51fd\u6570\u5f0f\u8def\u7531\uff0c\u4f46\u7528\u7684\u4eba\u5f88\u5c11\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"spring",children:"Spring"}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4eec\u524d\u9762\u5df2\u7ecf\u5b66\u4e60\u8fc7\u4e86 Java \u548c\u5176\u6280\u672f\u6808\u4e0a\u7684 Spring \u6846\u67b6\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"express",children:"Express"}),"\n",(0,c.jsx)(n.p,{children:"Express \u662f\u4e00\u4e2a\u7b80\u6d01\u800c\u7075\u6d3b\u7684 Node.js Web \u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u9996\u5148\u521b\u5efa\u4e00\u4e2a Node.js \u9879\u76ee\uff0c\u5e76\u5b89\u88c5 Express\u3002\u8fd9\u91cc\u6211\u4eec\u4e00\u5e76\u5e26\u4e0a Typescript\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm init -y\nnpm install express\nnpm install typescript\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u521b\u5efa\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"app.ts"}),"\u6587\u4ef6\uff0c"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"import express from 'express';\n\nconst app = express();\nconst port = 3000;\n\napp.get('/', (req, res) => {\n    res.send('Hello World!');\n});\n\napp.listen(port, () => {\n    console.log(`Example app listening at http://localhost:${port}`);\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u51fd\u6570\u5f0f\u7684\u540e\u7aef\u5f00\u53d1\u662f\u57fa\u4e8e\u56de\u8c03\u7684\u3002\u5728",(0,c.jsx)(n.code,{children:"express"}),"\u4e2d\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"app.get"}),"\u6765\u5b9a\u4e49\u8def\u7531\uff0c\u7136\u540e\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["express \u7684\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u662f",(0,c.jsx)(n.code,{children:"req"}),"\u548c",(0,c.jsx)(n.code,{children:"res"}),"\uff0c\u5206\u522b\u662f\u8bf7\u6c42\u548c\u54cd\u5e94\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u8fd4\u56de\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"req"}),"\u5bf9\u8c61\u8868\u793a HTTP \u8bf7\u6c42\uff0c\u5305\u542b\u4e86\u8bf7\u6c42\u7684\u4fe1\u606f\uff0c\u4f8b\u5982 URL\u3001HTTP \u5934\u548c\u8bf7\u6c42\u4f53\u3002",(0,c.jsx)(n.code,{children:"res"}),"\u5bf9\u8c61\u8868\u793a HTTP \u54cd\u5e94\uff0c\u7528\u4e8e\u53d1\u9001\u54cd\u5e94\u6570\u636e\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8981\u83b7\u53d6\u53c2\u6570\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"app.get('/hello/:name', (req, res) => {\n    res.send(`Hello, ${req.params.name}`);\n});\napp.get('/hello', (req, res) => {\n    const name = req.query.name;\n    res.send(`Hello, ${name}`);\n});\napp.post('/hello', (req, res) => {\n    const name = req.body.name;\n    res.send(`Hello, ${name}`);\n});\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8981\u53d1\u9001 JSON \u6216\u8005\u5176\u4ed6\u6570\u636e\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"app.get('/json', (req, res) => {\n    res.json({ message: 'Hello World!' });\n});\napp.get('/file', (req, res) => {\n    res.sendFile('path/to/file');\n});\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5bf9\u4e8e\u6570\u636e\u5e93 client\uff0c\u8fd9\u91cc\u4f7f\u7528 postgres\uff0c\u53ea\u8981\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"import { Client } from 'pg';\n\nconst client = new Client();\nclient.connect();\n\napp.get('/db', async (req, res) => {\n    const result = await client.query('SELECT * FROM table');\n    res.json(result.rows);\n});\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6ca1\u6709\u590d\u6742\u7684\u4f9d\u8d56\u6ce8\u5165\uff0c\u95ed\u5305\u7684\u6355\u83b7\u4ee3\u66ff\u4e86\u4f9d\u8d56\u6ce8\u5165\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"hono",children:"Hono"}),"\n",(0,c.jsx)(n.p,{children:"Express \u662f Node.js \u7684\u6846\u67b6\uff0c\u800c Hono \u53ef\u4ee5\u8bf4\u662f Bun \u7684\u4ee3\u8868\u6846\u67b6\u3002"}),"\n",(0,c.jsx)(n.p,{children:"Bun \u662f\u4e00\u4e2a\u65b0\u5174\u7684 JavaScript \u8fd0\u884c\u65f6\uff0c\u6bd4\u8d77 Node.js \u5f3a\u5927\u5f88\u591a\u3002\u4e00\u65b9\u9762\uff0c\u5b83\u901f\u5ea6\u5feb\uff1b\u53e6\u4e00\u65b9\u9762\uff0c\u5b83\u8fd8\u6709\u8bb8\u591a\u5185\u7f6e\u7279\u6027\uff0c\u4f8b\u5982\u539f\u751f\u652f\u6301 Typescript\u3002\u6b64\u5916\uff0cBun \u76ee\u524d\u4e0e Node.js \u5728\u9664\u4e86 v8 \u5f15\u64ce\u7684\u6240\u6709\u65b9\u9762\u90fd\u57fa\u672c\u662f\u5b8c\u5168\u517c\u5bb9\u7684\u3002\u6b64\u5916\uff0cBun \u7684\u547d\u4ee4\u4e5f\u548c Node.js \u6216 npm \u57fa\u672c\u4e00\u81f4\uff0c\u5b8c\u5168\u6ca1\u6709\u5b66\u4e60\u6210\u672c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"Hono \u662f\u4e00\u4e2a\u65b0\u7684 Web \u540e\u7aef\u6846\u67b6\uff0c\u4e5f\u662f\u51fd\u6570\u5f0f\u7684\u3002\u5f53\u7136\uff0c\u5b83\u4e5f\u652f\u6301\u57fa\u4e8e Node.js\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"const app = new Hono()\napp.get('/', (c) => c.text('Hello Bun!'))\n\nexport default app\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"bun run dev"}),"\u542f\u52a8\u670d\u52a1\u5373\u53ef\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684",(0,c.jsx)(n.code,{children:"c"}),"\u662f\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u4e86\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u6240\u6709\u4fe1\u606f\u3002",(0,c.jsx)(n.code,{children:"c.text"}),"\u662f\u4e00\u4e2a\u5feb\u6377\u65b9\u6cd5\uff0c\u7528\u4e8e\u8fd4\u56de\u6587\u672c\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8981\u83b7\u53d6\u53c2\u6570\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"import { Hono } from 'hono'\n\nconst app = new Hono()\n\napp.get('/hello/:name', async (c) => c.text(`Hello, ${c.req.param('name')}`))\napp.get('/hello', async (c) => {\n    const name = c.req.query('name')\n    return c.text(`Hello, ${name}`)\n})\napp.post('/hello', async (c) => {\n    const body = await c.req.parseBody()\n    const name = body.name\n    return c.text(`Hello, ${name}`)\n})\n\nexport default app\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e4b\u540e\u6211\u4eec\u4f1a\u4f7f\u7528 Hono \u6765\u5f00\u53d1 k8s \u5fae\u670d\u52a1\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"fiber",children:"Fiber"}),"\n",(0,c.jsx)(n.p,{children:"Fiber \u662f Go \u8bed\u8a00\u7684 Web \u6846\u67b6\u4e4b\u4e00\uff0c\u5b83\u662f Go \u8bed\u8a00\u540e\u7aef\u6846\u67b6\u4e2d\u5e76\u53d1\u6700\u9ad8\u7684\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "github.com/gofiber/fiber/v2"\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["fiber \u672c\u8d28\u662f\u5bf9 Go \u8bed\u8a00\u7684",(0,c.jsx)(n.code,{children:"net/http"}),"\u5305\u7684\u5c01\u88c5\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8981\u83b7\u53d6\u53c2\u6570\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'app.Get("/hello/:name", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, " + c.Params("name"))\n})\napp.Get("/hello", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, " + c.Query("name"))\n})\napp.Post("/hello", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, " + c.Body("name"))\n})\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8981\u53d1\u9001 JSON \u6216\u8005\u5176\u4ed6\u6570\u636e\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'app.Get("/json", func(c *fiber.Ctx) error {\n    return c.JSON(fiber.Map{"message": "Hello, World!"})\n})\napp.Get("/file", func(c *fiber.Ctx) error {\n    return c.SendFile("path/to/file")\n})\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u51fa\u6765\uff0cfiber \u548c hono \u975e\u5e38\u76f8\u4f3c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8981\u4f7f\u7528\u6570\u636e\u5e93 client\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'import "github.com/jackc/pgx/v4"\n\nfunc main() {\n    conn, err := pgx.Connect(context.Background(), "postgresql://user:password@localhost:5432/database")\n    if err != nil {\n        log.Fatalf("Unable to connect to database: %v\\n", err)\n    }\n    defer conn.Close()\n\n    app.Get("/db", func(c *fiber.Ctx) error {\n        rows, err := conn.Query(context.Background(), "SELECT * FROM table")\n        if err != nil {\n            return err\n        }\n        defer rows.Close()\n\n        var result []string\n        for rows.Next() {\n            var name string\n            if err := rows.Scan(&name); err != nil {\n                return err\n            }\n            result = append(result, name)\n        }\n\n        return c.JSON(result)\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u548c express \u4e00\u6837\uff0cfiber \u4e5f\u662f\u4f7f\u7528\u56de\u8c03\u6355\u83b7\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"fastapi",children:"FastAPI"}),"\n",(0,c.jsx)(n.p,{children:"Python \u6709\u4e09\u4e2a\u4e3b\u8981\u7684 Web \u6846\u67b6\uff0c\u5206\u522b\u662f Django\u3001Flask \u548c FastAPI\u3002FastAPI \u662f\u6700\u65b0\u7684\u4e00\u4e2a\uff0c\u4e5f\u662f\u6700\u5feb\u7684\u4e00\u4e2a\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'from fastapi import FastAPI, APIRouter\n\napp = FastAPI()\n\nrouter = APIRouter()\n\n@router.get("/")\nasync def read_root():\n    return {"Hello": "World"}\n\napp.include_router(router, prefix="/api")\n\n@app.get("/ping")\nasync def pong():\n    return {"ping": "pong!"}\n\nif __name__ == "__main__":\n    import uvicorn\n    uvicorn.run(app, host="0.0.0.0", port=8000)\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8981\u83b7\u53d6\u53c2\u6570\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'@app.get("/hello/{name}")\nasync def hello(name: str):\n    return {"Hello": name}\n\n@app.get("/hello")\nasync def hello(name: str):\n    return {"Hello": name}\n\nclass Item(BaseModel):\n    name: str\n\n@app.post("/hello")\nasync def hello(item: Item):\n    return {"Hello": item.name}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u8981\u505a\u4f9d\u8d56\u6ce8\u5165\uff0c\u9700\u8981\u4f7f\u7528",(0,c.jsx)(n.code,{children:"Depends"}),"\uff0c"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'from fastapi import Depends\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@app.get("/db")\nasync def db(db: Session = Depends(get_db)):\n    return db.query(Table).all()\n'})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var s=r(6540);const c={},l=s.createContext(c);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);